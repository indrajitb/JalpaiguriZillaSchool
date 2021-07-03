import { Dispatch } from 'redux';
import { UserProfileActionTypes } from '../action-types';
import { UserProfileAction } from '../actions';
import { API, graphqlOperation } from "aws-amplify";
import { createProfile, updateUser, updateProfile } from '../../graphql/mutations';
import { getProfile } from '../../graphql/queries';
import { Role, TableName } from '../../API';
import { getLoggedInUserInfo } from '../action-creators';


export const getUserProfileFromDB = async (inputEmail?: string) => {
    let userId = null, email = null, profileId = null, classRoom = null, role = null, year = null, user = null,
        classRoomYear = null, schoolLeavingYear = null, name = null, roleInteger = null;

    if (!inputEmail) {
        user = await getLoggedInUserInfo();
    }

    let result = null;

    try {

        result = await API.graphql(graphqlOperation(getProfile,
            { userEmail: inputEmail ? inputEmail : user.email }));

        const profileData = result.data.getProfile;


        if (profileData) {
            profileId = profileData.id;
            year = profileData.year;
            role = profileData.role;
            roleInteger = profileData.roleInteger;
            classRoom = profileData.classRoom;
            userId = profileData.userId;
            email = profileData.userEmail;
            name = profileData.profileOwnerName;
            classRoomYear = profileData.classRoomYear;
            schoolLeavingYear = profileData.schoolLeavingYear;

        } else
            return null;

        return {
            profileId: profileId,
            userId: profileData.userId,
            year: year,
            role: role,
            roleInteger,
            classRoom: classRoom,
            email: profileData.userEmail,
            name: profileData.profileOwnerName,
            classRoomYear: classRoomYear,
            schoolLeavingYear: schoolLeavingYear
        }
    } catch (err) {
        console.error(err);
        return {
            profileId: profileId,
            userId: userId,
            year: year,
            role: role,
            roleInteger: roleInteger,
            classRoom: classRoom,
            email: email,
            name: name,
            error: err,
            classRoomYear: classRoomYear,
            schoolLeavingYear: schoolLeavingYear
        }

    }

}

export const getUserProfile = () => {
    return async (dispatch: Dispatch<UserProfileAction>) => {

        dispatch({
            type: UserProfileActionTypes.GET_USER_PROFILE
        });

        let result = null;
        let profileObj = {
            role: null,
            roleInteger: null,
            year: null,
            classRoom: null,
            classRoomYear: null,
            schoolLeavingYear: null,
            loading: false,
            profileId: null,
            userId: null,
        }

        try {

            result = await getUserProfileFromDB();

            if (result) {

                profileObj.role = result.role;
                profileObj.roleInteger = result.roleInteger;
                profileObj.year = result.year;
                profileObj.classRoom = result.classRoom;
                profileObj.classRoomYear = result.classRoomYear;
                profileObj.schoolLeavingYear = result.schoolLeavingYear;
                profileObj.loading = false;
                profileObj.profileId = result.profileId;
                profileObj.userId = result.userId;


            }

            dispatch({
                type: UserProfileActionTypes.GET_USER_PROFILE_SUCCESS,
                payload: {
                    ...profileObj
                }
            });


            return {
                ...profileObj
            }

        } catch (err) {
            console.error(err);
            dispatch({
                type: UserProfileActionTypes.GET_USER_PROFILE_ERROR,
                payload: {
                    ...profileObj,
                    error: err
                }
            });

            return {
                role: null,
                year: null,
                classRoomYear: null,
                schoolLeavingYear: null,
                classRoom: null,
                loading: false,
                profileId: null,
                userId: null,
                err: err
            }

        }

    }

}

export const setUserProfile = (userId: string, email: string, name, role: string[], classRoomYear: string, schoolLeavingYear: string, classRoom: string,
    roleInteger?: number, presentYear?: string) => {
    return async (dispatch: Dispatch<UserProfileAction>, getState) => {
        dispatch({
            type: UserProfileActionTypes.SET_USER_PROFILE
        });

        try {

            let result = null, _userId = null, _email = null, _name = null, _profileId = null, _classRoomYear = null,
                _schoolLeavingYear = null, _classRoom = null, _year = null, _role = [];

            result = await getUserProfileFromDB();

            if (result) {
                _userId = result.userId;

                _profileId = result.profileId;
                _name = result.name;
                _email = result.email;

            }

            if (!_userId)
                _userId = userId;

            if (!_email)
                _email = email;

            if (!_name)
                _name = name;

            let __role: any = null;

            role.map(async (el) => {
                _year = presentYear;
                _role.push(el);
                __role = el;

            });

            _classRoom = classRoom;
            _classRoomYear = classRoomYear;
            _schoolLeavingYear = schoolLeavingYear;

            if (_classRoom === null || _classRoom === '') {
                _classRoom = "NotSet";
            }

            if (_classRoomYear === null || _classRoomYear === '') {
                _classRoomYear = "NotSet";
            }

            if (_schoolLeavingYear === null || _schoolLeavingYear === '') {
                _schoolLeavingYear = "NotSet";
            }


            if (role.includes(Role.Alumni) && role.includes(Role.ExTeachingStaff)) {
                __role = Role.AlumniAndExTeachingStaff;
            }

            if (role.includes(Role.Alumni) && role.includes(Role.ExNonTeachingStaff)) {
                __role = Role.AlumniAndExNonTeachingStaff;
            }

            if (role.includes(Role.Alumni) && role.includes(Role.TeachingStaff)) {
                __role = Role.AlumniAndTeachingStaff;
            }

            if (role.includes(Role.Alumni) && role.includes(Role.NonTeachingStaff)) {
                __role = Role.AlumniAndNonTeachingStaff;
            }

            if (_profileId === null) {


                await API.graphql(graphqlOperation(createProfile,
                    {
                        input: {
                            type: TableName.Profile,
                            role: __role, userId: _userId, schoolLeavingYear: _schoolLeavingYear,
                            profileOwnerName: _name, userEmail: _email, year: new Date().getFullYear().toString(),
                            classRoom: _classRoom, classRoomYear: _classRoomYear, roleInteger
                        }
                    }));

                await API.graphql(graphqlOperation(updateUser, {
                    input: {
                        profileCreated: true,
                        email: _email
                    }
                }));
            } else {
                await API.graphql(graphqlOperation(updateProfile,
                    {
                        input: {
                            id: _profileId, userId: _userId, year: new Date().getFullYear().toString(),
                            schoolLeavingYear: _schoolLeavingYear, userEmail: _email,
                            role: __role, classRoom: _classRoom, classRoomYear: _classRoomYear,
                            roleInteger
                        }
                    }));
            }


            dispatch({
                type: UserProfileActionTypes.SET_USER_PROFILE_SUCCESS,
                payload: {
                    role: __role,
                    roleInteger,
                    year: _year,
                    classRoomYear: _classRoomYear,
                    schoolLeavingYear: _schoolLeavingYear,
                    profileId: _profileId,
                    classRoom: _classRoom,
                    userId: _userId
                }
            });

        } catch (err) {
            console.error(err);
            dispatch({
                type: UserProfileActionTypes.SET_USER_PROFILE_ERROR,
                payload: {
                    error: err
                }
            });
        }
    }
}