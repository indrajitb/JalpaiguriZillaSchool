import {
  IonHeader, IonToolbar, IonButton, IonPopover, IonIcon, IonList, IonItem,
  IonButtons, IonLabel, IonLoading, IonMenuButton
} from '@ionic/react';
import { chevronDown, logOut as logOutIcon, logIn, personCircleOutline } from 'ionicons/icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Amplify, { Auth, Hub } from "aws-amplify";
import { useActions } from '../hooks/useActions';
import classes from './Header.module.css';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { RoleInteger } from '../pages/Profile';
import aws_exports from "../aws-exports";

export const signIn = async () => {
  await Auth.federatedSignIn();
}

export const signOut = async () => {
  await Auth.signOut();
}

const Header: React.FC = () => {

  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const { setLoggedInUserData, getUserProfile } = useActions();
  const history = useHistory();

  const { getLoggedInUserData } = useActions();

  const { name, loading, loggedIn, profileCreated } = useTypedSelector(state => state.userData);
  const { roleInteger } = useTypedSelector(state => state.profileData);



  // useEffect(() => {
  //   const runOnce = async () => {
  //     await getLoggedInUserData();
  //     // await getUserProfile();
  //   }
  //   runOnce();

  // }, [loggedIn, profileCreated]);

  const handleLogin = async () => {
    setLogin(true);
    await signIn();
  }

  const handleLogout = async () => {
    setLogout(true);
    await signOut();
    setLogin(false);
    setLogout(false);
  }

  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });


  const onHubCapsule = async (capsule: { payload: { event: any; }; }): Promise<void> => {
    switch (capsule.payload.event) {
      case "signIn":
        // console.log('Sign In...', capsule);
        await setLoggedInUserData();
        break;
      case "signUp":
        await setLoggedInUserData();
        // console.log('Sign Up...', capsule);
        break;
      case "signOut":
        // console.log('Sign Out...')
        break;
      case 'signIn_failure':
        // console.log('Sign In Failure...');
        break;
      default:
        return;
    }
  }

  useEffect(() => {

    const runOnce = async () => {

      await getLoggedInUserData();

      await getUserProfile();

    }

    runOnce();

    Hub.listen("auth", /*({ channel, payload, source, patternInfo }) => { } */
      onHubCapsule,
      "onHubCapsule");

    return () => Hub.remove("auth", onHubCapsule);

  }, [loggedIn, profileCreated]);

  const handleAdmin = () => {
    if (loggedIn && ((roleInteger & RoleInteger.Admin) === RoleInteger.Admin)) {
      history.push('/admin');
    } else {
      console.error('You don\'t have admin Permission ', loggedIn, roleInteger);
    }
  }

  return (
    <>
      {loading && <IonLoading isOpen={loading} />}

      <IonHeader>

        <IonToolbar className={classes.toolbar} color="primary">

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonButtons slot="end">
            <IonButton onClick={handleAdmin} hidden={RoleInteger.Admin !== (roleInteger & RoleInteger.Admin)}>
              Admin
            </IonButton>
          </IonButtons>

          <IonButtons slot="end" hidden={loggedIn}>
            <IonButton className={classes.buttonStyle} onClick={handleLogin} >
              {login ?
                <IonLoading isOpen={login} /> :
                !loggedIn ? "Log In" : ""}
            </IonButton>
          </IonButtons>

          <div hidden={!loggedIn}>

            <IonPopover
              event={popoverState.event}
              isOpen={popoverState.showPopover}
              onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
            >

              <IonList>
                <IonItem onClick={handleLogout}>
                  {/* <IonIcon slot="start" icon={logOutIcon} /> */}
                  <IonLabel className={classes.itemStyle}>Log Out</IonLabel>
                </IonItem>
              </IonList>

            </IonPopover>
          </div>

          <div hidden={!loggedIn} slot="end">

            <IonButtons >
              <IonButton
                className={classes.buttonStyle}
                onClick={
                  (e: any) => {
                    e.persist();
                    setShowPopover({ showPopover: true, event: e })
                  }}
              >
                < IonIcon slot="start" icon={personCircleOutline}></IonIcon>
                {/* {name ? name.split(' ')[0] : ''} */}
                {name}
                < IonIcon slot="end" icon={chevronDown}></IonIcon>
              </IonButton>
            </IonButtons>
          </div>

        </IonToolbar>
      </IonHeader>
    </>
  )

};

export default Header;
