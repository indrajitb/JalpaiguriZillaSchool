import {
    IonContent, IonItem, IonLabel, IonList, IonMenu, IonIcon, IonMenuToggle
} from '@ionic/react';
import { settings, home, peopleOutline, imageOutline } from 'ionicons/icons';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypesSelector';
import './SideMenu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
    hidden?: boolean;
}


const SideMenu: React.FC = () => {
    const location = useLocation();
    const { loggedIn, email, userId } = useTypedSelector(state => state.userData);
    const { roleInteger } = useTypedSelector(state => state.profileData);


    const appPages: AppPage[] = [
        // {
        //     title: 'Home',
        //     url: '/',
        //     iosIcon: home,
        //     mdIcon: home,
        //     hidden: false
        // },
        {
            title: 'Home',
            url: '/home',
            iosIcon: home,
            mdIcon: home,
            hidden: false
        },
        {
            title: 'Posts',
            url: '/posts',
            iosIcon: peopleOutline,
            mdIcon: peopleOutline,
            hidden: false
        },
        {
            title: 'Profile',
            url: '/my/profile',
            iosIcon: settings,
            mdIcon: settings,
            hidden: !loggedIn
        },
        {
            title: 'Gallery',
            url: '/gallery',
            iosIcon: imageOutline,
            mdIcon: imageOutline,
            hidden: false
        }
    ]

    return (
        <IonMenu contentId="main" type="overlay" >
            {/* <IonHeader>
                <IonToolbar color="primary">
                </IonToolbar>
            </IonHeader> */}

            <IonContent>
                <IonList id="menu-list">
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false} >
                                <IonItem
                                    hidden={appPage.hidden}
                                    className={location.pathname === appPage.url ? 'selected' : ''}
                                    routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon slot="start" icon={appPage.iosIcon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}

                </IonList>
            </IonContent>

        </IonMenu>
    )
}

export default SideMenu;