import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
    IonLabel,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { home, settings, imageOutline, peopleOutline } from "ionicons/icons";
import HomePage from "./Home";
import ProfilePage from "./Profile";
import GalleryPage from "./Gallery";
import Posts from "./Posts";
import { useTypedSelector } from "../hooks/useTypesSelector";
import Admin from "./Admin";
import AppContext from "../state/app-context";


const TabRootPage: React.FC = () => {
    const { loggedIn } = useTypedSelector(state => state.userData);
    const context = useContext(AppContext);

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Switch>
                    <Redirect exact path="/tabs" to="/home" />
                    <Redirect exact path="/my" to="/my/profile" />
                    <Route path="/home" component={HomePage} exact={true} />
                    <Route
                        path="/my/profile"
                        render={() => <ProfilePage />}
                        exact={true}
                    />
                    <Route
                        path="/gallery"
                        component={GalleryPage}
                        exact={true}
                    />

                    <Route
                        path="/posts"
                        component={Posts}
                        exact={true}
                    />

                    <Route
                        path="/admin"
                        component={Admin}
                        exact={true}
                    />

                    <Redirect exact from="/" to="/home" />

                </Switch>

            </IonRouterOutlet>

            <IonTabBar slot="bottom" hidden={context.isDesktop}>
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/my/profile" disabled={!loggedIn}>
                    <IonIcon icon={settings} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
                <IonTabButton tab="gallery" href="/gallery">
                    <IonIcon icon={imageOutline} />
                    <IonLabel>Gallery</IonLabel>
                </IonTabButton>
                <IonTabButton tab="posts" href="/posts">
                    <IonIcon icon={peopleOutline} />
                    <IonLabel>Posts</IonLabel>
                </IonTabButton>

            </IonTabBar>
        </IonTabs>
    );
};

export default TabRootPage;