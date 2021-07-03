import { IonAlert, IonBadge, IonButton, IonIcon, IonNote } from '@ionic/react';
import { chatboxEllipsesOutline, thumbsDownOutline, thumbsUpOutline, trash, thumbsUpSharp, thumbsDownSharp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { formatAMPM } from '../utils/date-formatter';
import renderHtml from 'react-render-html';
import classes from './Post.module.css';
import { getLoggedInUserData } from '../state';

interface Props {
    content: string;
    title?: string;
    postId?: string;
    userName?: string;
    uId?: string;
    updatedAt?: string;
    hideDetails?: boolean;
    likes?: string[];
    unlikes?: string[];
    likeCount?: number;
    unlikeCount: number;
    handleDelete: (e, type: string, id: string, title?: string) => void;
    handleComment: (e, postId) => void;
    handleLike: (e, postId, type, likes, uId) => void;
    handleUnLike: (e, postId, type, unlikes, uId) => void;
    comments?: any[];
}

const PostItem: React.FC<Props> = ({ content, title, postId, userName, uId, updatedAt, handleComment, handleDelete,
    handleLike, handleUnLike, likes, unlikes, likeCount, unlikeCount, comments }) => {

    const { userId, name } = useTypedSelector(state => state.userData);
    const [showAlert, setShowAlert] = useState(false);
    const [liked, setLiked] = useState(false);
    const [unliked, setUnliked] = useState(false);

    const isSameUser = (uId: string): boolean => {

        return userId === uId;

    }

    const handleShowAlert = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setShowAlert(true);
    }

    useEffect(() => {

        const runOnce = async () => {

            await getLoggedInUserData();
        }

        runOnce();

        didILike();
        didIUnLike();
    }, [liked, unliked, likes, unlikes, likeCount, unlikeCount]);
    // }, []);

    const didILike = () => {
        if (likes.includes(name)) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }

    const didIUnLike = () => {
        if (unlikes.includes(name)) {
            setUnliked(true);
        } else {
            setUnliked(false);
        }
    }


    return (
        <>
            <div className={`${classes.post}`}>
                {content ? renderHtml(content) : null}
            </div>
            <br></br>


            <IonButton hidden={comments.length === 0} fill="clear" onClick={(e) => {
                // e.preventDefault();
                // e.stopPropagation();
                // handleComment(e, postId);
                return false;
            }
            }
                className={classes.alighleft}
            >
                <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                <IonBadge color="tertiary">{comments.length}</IonBadge>
            </IonButton>

            <IonButton fill="clear" className={classes.alighleft}
                onClick={
                    (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLike(e, postId, 'post', likes, uId);
                        return false;
                    }
                }
            >
                <IonIcon icon={liked ? thumbsUpSharp : thumbsUpOutline}></IonIcon>
                <IonBadge color="success" hidden={!likes || likes?.length === 0} className={classes.tooltip}
                >{likes?.length}</IonBadge>

            </IonButton>

            <IonButton fill="clear" className={classes.alighleft}
                onClick={
                    (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleUnLike(e, postId, 'post', unlikes, uId);
                        return false;
                    }
                }
            >
                <IonIcon icon={unliked ? thumbsDownSharp : thumbsDownOutline}></IonIcon>
                <IonBadge color="danger" hidden={!unlikes || unlikes?.length === 0}>{unlikes?.length}</IonBadge>
            </IonButton>

            <IonButton fill="clear" onClick={(e) => handleShowAlert(e)}
                hidden={!isSameUser(uId)}
            >
                <IonIcon icon={trash}></IonIcon>
            </IonButton>

            <IonNote className={`${classes.alignright} ion-text-center`}>
                Posted by {isSameUser(uId) ? " me" : userName} on {formatAMPM(updatedAt)}

                <br /><br /><br />

                <IonAlert isOpen={showAlert}
                    message={'Really want to delete your post?'}
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
                            handler: () => {

                                handleDelete("post", postId, title)
                            }
                        }
                    ]}
                />
            </IonNote>
            {/* </div> */}
        </>
    )
}

export default PostItem;


