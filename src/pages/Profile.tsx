import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonLoading, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { closeOutline, saveOutline, createOutline } from 'ionicons/icons';
import { Controller, useForm } from 'react-hook-form';
import classes from './Profile.module.css';
import { useActions } from '../hooks/useActions';
import Header from '../components/Header';
import { Role } from '../API';
import { useTypedSelector } from '../hooks/useTypesSelector';

export enum RoleInteger {
    TeachingStaff = 1,
    Student = 2,
    NonTeachingStaff = 4,
    Alumni = 8,
    ExTeachingStaff = 16,
    ExNonTeachingStaff = 32,
    Headmaster = 64,
    AsstHeadMaster = 128,
    Admin = 256
    // AlumniAndTeachingStaff ,
    // AlumniAndNonTeachingStaff,
    // AlumniAndExTeachingStaff,
    // AlumniAndExNonTeachingStaff
}

const Profile: React.FC = () => {

    const { getUserProfile, setUserProfile } = useActions();

    const [_classRoom, setClassroom] = useState<string>(null);
    const [_schoolLeavingYear, setSchoolLeavingYear] = useState<string>(null);
    const [_classRoomYear, setClassroomYear] = useState<string>(null);
    const [_role, setRole] = useState<string>(null);
    const [roleArray, setRoleArray] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();
    const [roleInteger, setRoleInteger] = useState(0);




    const { control, handleSubmit, formState } =
        useForm();

    // const { name, loggedIn, loading,
    //     profileCreated, classRoom, role, classRoomYear, schoolLeavingYear, error } = useData();
    const { loading,
        classRoom, role, classRoomYear, schoolLeavingYear, error, roleInteger: roleInt } = useTypedSelector(state => state.profileData);

    const { name, loggedIn, profileCreated, userId, email } = useTypedSelector(state => state.userData);

    const setInitialData = (resetLocalState: boolean) => {
        if (resetLocalState) {
            setRole(null);
            setSchoolLeavingYear(null);
            return;
        }
        if (_schoolLeavingYear != null) {
            let n = new Date().getFullYear();
            let myDate: string = n.toString();
            setSchoolLeavingYear(myDate);
        }
        if (_role != null) {
            setRole(_role);
        }
    }


    useEffect(() => {

        if (!loggedIn) {
            history.push('/home');
        }

        if (!profileCreated)
            setEditMode(true);

        const runOnce = async () => {
            await getUserProfile();
        }
        runOnce();


        return () => {
        }
    }, [loggedIn, profileCreated]);


    const handleSave = async (data): Promise<void> => {

        interface IUserData {
            role: string,
            classroomYear: string,
            schoolLeavingYear: string,
            classRoom: string
        }

        let userData: string[] = [];

        roleArray.map(el => {
            userData.push(el);
        });


        await setUserProfile(userId, email, name, userData, _classRoomYear, _schoolLeavingYear, _classRoom, roleInteger);
        resetLocalState();

        history.push("/home");
    }

    const handleCancel = () => {
        setInitialData(true);
        resetLocalState();
        history.push("/home");
    }

    const handleBackButton = () => {
        history.goBack();
    }

    const handleRoleCheckBox = (value: string, event: any) => {
        if (event.detail.checked) {
            if (!roleArray.includes(value)) {
                setRoleArray(state => {
                    const list = [...state, value];
                    return list;
                });

                setRoleInteger(state => {

                    let rInt = 0;

                    switch (value) {
                        case Role.Alumni:
                            rInt = RoleInteger.Alumni;
                            break;
                        case Role.AsstHeadMaster:
                            rInt = RoleInteger.AsstHeadMaster;
                            break;
                        case Role.ExNonTeachingStaff:
                            rInt = RoleInteger.ExNonTeachingStaff;
                            break;
                        case Role.ExTeachingStaff:
                            rInt = RoleInteger.ExTeachingStaff;
                            break;
                        case Role.Headmaster:
                            rInt = RoleInteger.Headmaster;
                            break;
                        case Role.NonTeachingStaff:
                            rInt = RoleInteger.NonTeachingStaff;
                            break;
                        case Role.Student:
                            rInt = RoleInteger.Student;
                            break;
                        case Role.TeachingStaff:
                            rInt = RoleInteger.TeachingStaff;
                            break;
                        default:
                            rInt = 0;
                    }

                    return state | rInt;
                });
            }

        }
        else {

            setRoleArray(state => {
                const list = state.filter(item => item !== value);
                return list;
            });

            setRoleInteger(state => {

                let rInt = 0;

                switch (value) {
                    case Role.Alumni:
                        rInt = RoleInteger.Alumni;
                        break;
                    case Role.AsstHeadMaster:
                        rInt = RoleInteger.AsstHeadMaster;
                        break;
                    case Role.ExNonTeachingStaff:
                        rInt = RoleInteger.ExNonTeachingStaff;
                        break;
                    case Role.ExTeachingStaff:
                        rInt = RoleInteger.ExTeachingStaff;
                        break;
                    case Role.Headmaster:
                        rInt = RoleInteger.Headmaster;
                        break;
                    case Role.NonTeachingStaff:
                        rInt = RoleInteger.NonTeachingStaff;
                        break;
                    case Role.Student:
                        rInt = RoleInteger.Student;
                        break;
                    case Role.TeachingStaff:
                        rInt = RoleInteger.TeachingStaff;
                        break;
                    default:
                        rInt = 0;
                }

                return state ^ rInt;

            });

            if (value === Role.Alumni || value === Role.Student) {
                setClassroom(null);
                setClassroomYear(null);
            }

        }

    }

    const classRoomDetails = <IonSelect placeholder="Class" mode="ios"
        value={_classRoom ? _classRoom : classRoom ? classRoom : ""}
        onIonChange={e => {
            setClassroom(e.detail.value);

        }}>
        <IonSelectOption value="12" >Class 12</IonSelectOption>
        <IonSelectOption value="11">Class 11</IonSelectOption>
        <IonSelectOption value="10">Class 10</IonSelectOption>
        <IonSelectOption value="9">Class 9</IonSelectOption>
        <IonSelectOption value="8">Class 8</IonSelectOption>
        <IonSelectOption value="7">Class 7</IonSelectOption>
        <IonSelectOption value="6">Class 6</IonSelectOption>
        <IonSelectOption value="5">Class 5</IonSelectOption>
        <IonSelectOption value="4">Class 4</IonSelectOption>
        <IonSelectOption value="3">Class 3</IonSelectOption>
        <IonSelectOption value="2">Class 2</IonSelectOption>
        <IonSelectOption value="1">Class 1</IonSelectOption>
    </IonSelect>

    const shouldDisable = () => {
        if (roleArray.includes(Role.Alumni)) {
            return !_classRoom || !_classRoomYear;
        }
        if (roleArray.includes(Role.Student)) {
            return !_classRoom;
        }
    }

    const resetLocalState = () => {
        setRoleArray(state => {
            const list = state.filter(item => item !== item);
            return list;
        });
        setEditMode(false);
        setClassroom(null);
        setClassroomYear(null);
        setRole(null);
        setSchoolLeavingYear(null);
    }

    const handleEditMode = () => {
        resetLocalState();
        setEditMode(!editMode);
    }

    return (

        <IonPage>
            <Header />
            <IonContent className={`${classes.profile}`}>
                {loading && <IonLoading isOpen={loading} />}
                <IonGrid className={`${classes.fullheight} ${classes.xc}`}>

                    <IonRow >
                        <IonCol size-md="12">
                            <IonHeader>
                                <IonToolbar color="primary">
                                    <IonButtons onClick={handleBackButton} slot="start">
                                        <IonBackButton />
                                    </IonButtons>
                                    <IonTitle>Profile</IonTitle>
                                </IonToolbar>
                            </IonHeader>

                            <IonItem>
                                {loggedIn && name ? name.split(' ')[0].concat(', ') : ""}
                                {!profileCreated ? "please create your profile to proceed" : "want to update your profile?"}
                                <IonButton fill="clear" hidden={editMode} onClick={handleEditMode} slot="end">
                                    <IonIcon hidden={editMode} slot="start" icon={createOutline}></IonIcon>
                                    Update
                                </IonButton>
                            </IonItem>

                            <div hidden={!profileCreated || editMode}>
                                <IonItem>
                                    <IonLabel>Your Profile</IonLabel>
                                </IonItem>
                                <>
                                    <IonItem hidden={!(role === Role.ExNonTeachingStaff || role === Role.AlumniAndExNonTeachingStaff)}
                                        key={Role.ExNonTeachingStaff}>
                                        <IonLabel>Ex Non-Teaching Staff</IonLabel>
                                        <IonLabel>Left School in {schoolLeavingYear && schoolLeavingYear.split("-")[0]}</IonLabel>
                                    </IonItem>

                                    <IonItem hidden={!(role === Role.ExTeachingStaff || role === Role.AlumniAndExTeachingStaff)}
                                        key={Role.ExTeachingStaff}>
                                        <IonLabel>Ex Teaching Staff</IonLabel>
                                        <IonLabel>Left School in {schoolLeavingYear && schoolLeavingYear.split("-")[0]}</IonLabel>
                                    </IonItem>

                                    <IonItem hidden={!((role === Role.Alumni) || (role === Role.AlumniAndExNonTeachingStaff)
                                        || (role === Role.AlumniAndExTeachingStaff) || (role === Role.AlumniAndNonTeachingStaff)
                                        || (role === Role.AlumniAndTeachingStaff))
                                    }
                                        key={Role.Alumni}>
                                        <IonLabel>Alumni</IonLabel>
                                        <IonLabel>Class: {classRoom}</IonLabel>
                                        <IonLabel>Year: {classRoomYear && classRoomYear.split("-")[0]}</IonLabel>
                                    </IonItem>

                                    <IonItem hidden={role !== Role.Student} key={Role.Student}>
                                        <IonLabel>Student</IonLabel>
                                        <IonLabel>Class: {classRoom}</IonLabel>
                                    </IonItem>

                                    <IonItem hidden={!(role === Role.TeachingStaff || role === Role.AlumniAndTeachingStaff)} key={Role.TeachingStaff}>
                                        <IonLabel>Teaching Staff</IonLabel>
                                    </IonItem>

                                    <IonItem hidden={!(role === Role.NonTeachingStaff || role === Role.AlumniAndNonTeachingStaff)}
                                        key={Role.NonTeachingStaff}>
                                        <IonLabel>Non-Teaching Staff</IonLabel>
                                    </IonItem>

                                    <IonItem hidden={(roleInt & RoleInteger.Admin) !== RoleInteger.Admin}
                                        key={Role.Admin}>
                                        <IonLabel>Admin</IonLabel>
                                    </IonItem>

                                    <div className="ion-marginvertical ion-text-right">
                                        <IonButton fill="solid" onClick={handleCancel}>
                                            <IonIcon slot="start" icon={closeOutline}></IonIcon>
                                            Cancel
                                        </IonButton>

                                    </div>

                                </>
                            </div>


                            <div hidden={!editMode}>
                                <form onSubmit={handleSubmit(data => handleSave(data))}>

                                    <IonList>
                                        <IonListHeader>Role</IonListHeader>

                                        <IonItem>
                                            <IonLabel>Teaching Staff</IonLabel>
                                            <Controller
                                                render={({ onChange, onBlur, value }) =>
                                                (<IonCheckbox onIonChange={e => { onChange(e); handleRoleCheckBox(Role.TeachingStaff, e) }}
                                                    disabled={roleArray.includes(Role.Student) || roleArray.includes(Role.NonTeachingStaff)
                                                        || roleArray.includes(Role.ExTeachingStaff) || roleArray.includes(Role.ExNonTeachingStaff)}
                                                // checked={role.includes(Role.TeachingStaff)}
                                                />)}
                                                control={control}
                                                name="TeachingStaff"

                                            />
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Student</IonLabel>


                                            <Controller
                                                render={({ onChange, onBlur, value }) =>
                                                (<IonCheckbox onIonChange={e => { onChange(e); handleRoleCheckBox(Role.Student, e) }}
                                                    disabled={roleArray.includes(Role.Alumni) || roleArray.includes(Role.TeachingStaff) || roleArray.includes(Role.NonTeachingStaff)
                                                        || roleArray.includes(Role.ExTeachingStaff) || roleArray.includes(Role.ExNonTeachingStaff)}
                                                // checked={role.includes(Role.Student)}
                                                />)}
                                                control={control}
                                                name="Student"

                                            />
                                        </IonItem>

                                        <div hidden={!roleArray.includes(Role.Student) || roleArray.includes(Role.Alumni) || roleArray.includes(Role.TeachingStaff) || roleArray.includes(Role.NonTeachingStaff)
                                            || roleArray.includes(Role.ExTeachingStaff) || roleArray.includes(Role.ExNonTeachingStaff)}>
                                            <IonLabel className="ion-padding-start">
                                                <IonText color={_classRoom ? "" : "danger"} >
                                                    Select Your Class
                                                </IonText>
                                            </IonLabel>

                                            {classRoomDetails}

                                        </div>

                                        <IonItem>
                                            <IonLabel>Non-Teaching Staff</IonLabel>
                                            <Controller
                                                render={({ onChange, onBlur, value }) =>
                                                (<IonCheckbox onIonChange={e => { onChange(e); handleRoleCheckBox(Role.NonTeachingStaff, e) }}
                                                    disabled={roleArray.includes(Role.Student) || roleArray.includes(Role.TeachingStaff)
                                                        || roleArray.includes(Role.ExTeachingStaff) || roleArray.includes(Role.ExNonTeachingStaff)}
                                                // checked={role.includes(Role.NonTeachingStaff)}
                                                />)}
                                                control={control}
                                                name="NonTeachingStaff"
                                            />
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Alumni</IonLabel>

                                            <Controller
                                                render={({ onChange, onBlur, value }) =>
                                                (<IonCheckbox onIonChange={e => { onChange(e); handleRoleCheckBox(Role.Alumni, e) }}
                                                    disabled={roleArray.includes(Role.Student)}
                                                //  checked={role.includes(Role.Alumni)}
                                                />)}
                                                control={control}
                                                name="Alumni"
                                            />
                                        </IonItem>

                                        <div hidden={!roleArray.includes(Role.Alumni)}>
                                            <IonLabel className="ion-padding-start">
                                                <IonText color={_classRoom ? "" : "danger"}>
                                                    Select Your Class
                                                </IonText>
                                            </IonLabel>
                                        </div>

                                        {roleArray.includes(Role.Alumni) && !roleArray.includes(Role.Student) && classRoomDetails}

                                        {roleArray.includes(Role.Alumni) && !roleArray.includes(Role.Student) &&
                                            <>
                                                <IonLabel className="ion-padding-start">
                                                    <IonText color={_classRoomYear ? "" : "danger"}>
                                                        Class Last Attended In
                                                    </IonText>
                                                </IonLabel>

                                                <>

                                                    <Controller
                                                        render={({ onChange, onBlur, value }) =>
                                                        (<IonDatetime displayFormat="YYYY" placeholder="Year"
                                                            min="1890" max={new Date().getFullYear().toString()}
                                                            onIonChange={e => {
                                                                setClassroomYear(parseInt(e.detail.value).toString());

                                                            }}
                                                        />)}
                                                        control={control}
                                                        name="ClassLastAttended"
                                                        defaultValue={classRoomYear}
                                                    />
                                                </>
                                            </>
                                        }

                                        <IonItem>
                                            <IonLabel>Ex Teaching Staff</IonLabel>

                                            <Controller
                                                render={({ onChange, onBlur, value }) =>
                                                (<IonCheckbox onIonChange={e => { onChange(e); handleRoleCheckBox(Role.ExTeachingStaff, e) }}
                                                    disabled={roleArray.includes(Role.Student) || roleArray.includes(Role.TeachingStaff) ||
                                                        roleArray.includes(Role.NonTeachingStaff) || roleArray.includes(Role.ExNonTeachingStaff)}
                                                // checked={role.includes(Role.ExTeachingStaff)}
                                                />)}
                                                control={control}
                                                name="ExTeachingStaff"
                                            />
                                        </IonItem>
                                        <IonItem hidden={!roleArray.includes(Role.ExTeachingStaff)}>
                                            <IonLabel position="floating">
                                                <IonText color={_schoolLeavingYear ? "" : "danger"}>Left School In the Year</IonText>
                                            </IonLabel>

                                            <IonDatetime displayFormat="YYYY" placeholder="Year"
                                                min="1890" max={new Date().getFullYear().toString()}
                                                value={_schoolLeavingYear ? _schoolLeavingYear.toString() : schoolLeavingYear ? schoolLeavingYear.toString() : ""}
                                                onIonChange={e => {
                                                    setSchoolLeavingYear(parseInt(e.detail.value).toString());
                                                    setErrorCount(errorCount - 1);
                                                }}>
                                            </IonDatetime>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Ex Non-Teaching Staff</IonLabel>
                                            <Controller
                                                render={({ onChange, onBlur, value }) =>
                                                (<IonCheckbox
                                                    disabled={roleArray.includes(Role.Student) || roleArray.includes(Role.TeachingStaff) ||
                                                        roleArray.includes(Role.NonTeachingStaff) || roleArray.includes(Role.ExTeachingStaff)}
                                                    // checked={roleArray.includes(Role.ExNonTeachingStaff)}
                                                    onIonChange={e => { handleRoleCheckBox(Role.ExNonTeachingStaff, e) }}
                                                // value={Role.ExNonTeachingStaff}
                                                />)}
                                                control={control}
                                                name="ExNonTeachingStaff"
                                            />
                                        </IonItem>

                                        <IonItem hidden={!roleArray.includes(Role.ExNonTeachingStaff)}>
                                            <IonLabel position="floating">
                                                <IonText color={_schoolLeavingYear ? "" : "danger"}>Left School In the Year</IonText>
                                            </IonLabel>

                                            <IonDatetime displayFormat="YYYY" placeholder="Year"
                                                min="1890" max={new Date().getFullYear().toString()}
                                                value={_schoolLeavingYear ? _schoolLeavingYear.toString() : schoolLeavingYear ? schoolLeavingYear.toString() : ""}
                                                onIonChange={e => {
                                                    setSchoolLeavingYear(parseInt(e.detail.value).toString());
                                                    setErrorCount(errorCount - 1);
                                                }}>
                                            </IonDatetime>
                                        </IonItem>


                                    </IonList>
                                    <div className="ion-marginvertical ion-text-right">
                                        <IonButton fill="solid" onClick={handleCancel}>
                                            <IonIcon slot="start" icon={closeOutline}></IonIcon>
                                            Cancel
                                        </IonButton>
                                        <IonButton fill="solid" type="submit" disabled={roleArray.length === 0 || shouldDisable()}>
                                            <IonIcon slot="start" icon={saveOutline}></IonIcon>
                                            {profileCreated ? "Update" : "Save"}
                                        </IonButton>
                                    </div>
                                </form>
                            </div>

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >


    );
};

export default Profile;
