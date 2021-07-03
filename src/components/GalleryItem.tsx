import { IonButton, IonIcon, IonAlert, IonSpinner, IonLoading, IonImg, IonNote } from "@ionic/react";
import { trash } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { deleteCarouselImage } from "../state";
import { formatAMPM } from "../utils/date-formatter";
import { getPresignedUrl } from "../utils/s3-operations";
import './GalleryItem.css';

interface Props {
    fileKey: string;
    fileId?: string;
    userId?: string;
    name?: string;
    email?: string;
    itemUserId?: string;
    itemUserName?: string;
    createdAt?: string;
    deleting?: boolean;
    loading?: boolean;
    fileIdDeleting?: string;
    hideDetails?: boolean;
    isCarousel?: boolean;
}

const GalleryItem: React.FC<Props> = ({ fileKey, fileId, name, email, userId, itemUserId, itemUserName,
    createdAt, deleting, loading, fileIdDeleting, hideDetails, isCarousel }) => {

    const { deleteMediaFromGallery } = useActions();

    const [showAlert, setShowAlert] = useState(false);
    const [url, setUrl] = useState('');

    const isSameUser = (): boolean => {

        return userId === itemUserId;

    }

    const handleShowAlert = () => {
        setShowAlert(true);
    }

    const handleDelete = async (fileKey: string, fileId: string, userId: string, email: string, name: string, createdAt: string) => {

        if (isCarousel) {


            await deleteCarouselImage(fileKey, fileId);

        } else {
            await deleteMediaFromGallery(fileKey, fileId, userId, email, name, createdAt ? createdAt : null);
        }

    }



    useEffect(() => {


        const runOnce = async () => {
            const signedUrl = await getPresignedUrl(fileKey);
            setUrl(signedUrl);
        }

        runOnce();

    });

    return (

        <>
            {/* {loading ? <IonSpinner /> : <S3Image
                imgKey={fileKey}
                onLoad={url => {
                }}
            />} */}

            {loading ? <IonSpinner /> : <IonImg src={url} ion-padding-start />}

            <br />


            <IonNote className="ion-text-center textItalic alignment" hidden={hideDetails}>
                Uploaded by {isSameUser() ? " me" : itemUserName} {createdAt ? " on " : null}  {formatAMPM(createdAt)}

                <IonButton fill="clear" onClick={() => handleShowAlert()}
                    hidden={!isSameUser()}
                >
                    {deleting && fileIdDeleting === fileId ? <IonLoading isOpen={deleting} /> : <IonIcon icon={trash}></IonIcon>}
                </IonButton>

                <IonAlert isOpen={showAlert}
                    message={'Really want to delete the image?'}
                    onDidDismiss={() => setShowAlert(false)}
                    buttons={[
                        {
                            text: 'No',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                setShowAlert(false);
                            }
                        },
                        {
                            text: 'Yes',
                            handler: () => handleDelete(fileKey, fileId, userId, email, name, createdAt)
                        }
                    ]}
                />

            </IonNote>
        </>

    )
}

export default GalleryItem;