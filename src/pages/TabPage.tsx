import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
} from "@ionic/react";
import React from "react";


interface PageProps {
    pageName: string | undefined;
}

const TabPage: React.FC<PageProps> = ({ pageName }) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{pageName}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {pageName}
            </IonContent>
        </IonPage>
    );
};

export default TabPage;