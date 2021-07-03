import { Dispatch } from 'redux';
import { UserDataActionTypes } from '../action-types';
import { UserDataAction } from '../actions';
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { createUser } from '../../graphql/mutations';
import { getUser, listUsers } from '../../graphql/queries';
import { TableName } from '../../API';
import { getUserProfileFromDB } from '.';

interface UserType {
    userId: string;
    // profileId: string;
    name: string;
    email: string;
    profileCreated: boolean;
    userOwnerId: string
}

export const getLoggedInUserInfo = async (): Promise<{
    name: string, email: string, userId: string,
    profileCreated: boolean, userOwnerId: string
}> => {
    let email = null, name = null, result = null;
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
        email = user.attributes.email;
        name = user.attributes.name;
        //userOwnerId = user.attributes.userOwnerId;
    }
    result = await getUserData(email);
    return {
        name: name,
        email: email,
        userId: result.userId,
        profileCreated: result.profileCreated,
        userOwnerId: result.userOwnerId
    }
}

export const getLoggedInUserData = () => {
    return async (dispatch: Dispatch<UserDataAction>) => {
        dispatch({
            type: UserDataActionTypes.GET_USER_DATA
        });
        let user = null;
        try {
            user = await getLoggedInUserInfo();

            dispatch({
                type: UserDataActionTypes.GET_USER_DATA_SUCCESS,
                payload: {
                    name: user.name,
                    email: user.email,
                    userId: user.userId,
                    loading: false,
                    profileCreated: user.profileCreated,
                }
            });
            return {
                name: user.name,
                email: user.email,
                userId: user.userId,
                loading: false,
                profileCreated: user.profileCreated,
            }
        } catch (err) {
            console.error(err);
            dispatch({
                type: UserDataActionTypes.GET_USER_DATA_ERROR,
                payload: {
                    name: null,
                    email: null,
                    userId: null,
                    loading: false,
                    error: err
                }
            });
            return {
                name: null,
                email: null,
                userId: null,
                loading: false,
                profileCreated: null,
            }
        }
    }

}

export const setLoggedInUserData = () => {
    return async (dispatch: Dispatch<UserDataAction>) => {
        dispatch({
            type: UserDataActionTypes.SET_USER_DATA
        });

        let _email = null, _name = null, owner = null;
        try {
            const user = await Auth.currentAuthenticatedUser();
            if (user) {
                _email = user.attributes.email;
                _name = user.attributes.name;
                owner = owner = user.attributes.sub;
            }
            const result = await storeUser(_name, _email, owner);
            dispatch({
                type: UserDataActionTypes.SET_USER_DATA_SUCCESS,
                payload: {
                    name: _name,
                    email: _email,
                    userId: result.userId,
                    loading: false,
                    error: null,
                    profileCreated: result.profileCreated,
                }
            });
        } catch (err) {
            console.error(err);
            dispatch({
                type: UserDataActionTypes.SET_USER_DATA_ERROR,
                payload: {
                    name: _name,
                    email: _email,
                    userId: null,
                    loading: false,
                    error: err,
                    profileCreated: false,
                }
            })
        }
    }
}

const getUserData = async (email: string): Promise<{ userId: string, profileCreated: boolean, userOwnerId: string }> => {
    const _email = email.trim().toLowerCase();

    let userId = null, isProfileCreated = false, userOwnerId = null;
    try {
        const result: any = await API.graphql(graphqlOperation(getUser,
            { email: _email }));
        // { type: TableName.User, email: { eq: _email }, sortDirection: "DESC" }));

        // const result: any = await API.graphql(graphqlOperation(listUsers));


        if (result && result.data && result.data.getUser &&
            result.data.getUser && result.data.getUser.id) {
            userId = result.data.getUser.id;
            isProfileCreated = result.data.getUser.profileCreated;
            userOwnerId = result.data.getUser.userOwnerId;
        }

        // if (result && result.data && result.data.listUsers &&
        //     result.data.listUsers.items && result.data.listUsers.items.length > 0) {
        //     result.data.listUsers.items.map(u => {
        //         const e = u.email.trim().toLowerCase();
        //         if (e === _email) {
        //             userId = u.id;
        //             isProfileCreated = u.profileCreated;
        //             userOwnerId = u.userOwnerId;
        //             return { userId: userId, profileCreated: isProfileCreated, userOwnerId: userOwnerId };
        //         }
        //     });

        // }


    } catch (err) {
        console.error(err);
    }


    return { userId: userId, profileCreated: isProfileCreated, userOwnerId: userOwnerId };
}


const storeUser = async (name: string, email: string, owner: string): Promise<UserType> => {

    let result = null;
    result = await getUserData(email);

    let userId = null, profileCreated = false;


    if (!result || !result.userId) {
        //New User; Create one
        //Send email to user to create profile
        const userResult: any = await API.graphql(graphqlOperation(createUser,
            { input: { name: name, email: email.trim().toLowerCase(), userOwnerId: owner, profileCreated: false, type: TableName.User } }));


        if (userResult && userResult.data && userResult.data.createUser != null) {
            userId = userResult.data.createUser.id;
            profileCreated = false;
            // owner = userResult.data.createUser.owner;
        }

    }
    else {
        userId = result.userId;
        owner = result.userOwnerId;
        profileCreated = result.profileCreated;
    }

    return {
        userId: userId,
        name: name,
        email: email,
        profileCreated: profileCreated,
        userOwnerId: owner
    };

}

interface UserInt {
    userName: string;
    email: string;
    userId: string;
    role: string;
    roleInteger: string
}

export const getAllUsers = async (): Promise<UserInt[]> => {

    const users: any = await API.graphql(graphqlOperation(listUsers));

    const items: any = users?.data?.listUsers?.items;

    const allUsers: UserInt[] = [];

    items && items.map(async user => {

        const { role, roleInteger } = await getUserProfileFromDB(user.email);

        allUsers.push({
            userName: user.name,
            email: user.email,
            userId: user.id,
            role,
            roleInteger
        })
    });

    return allUsers;


}
