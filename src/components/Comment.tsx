import { IonAlert, IonBadge, IonButton, IonIcon, IonNote } from '@ionic/react';
import { thumbsDownOutline, thumbsUpOutline, trash, thumbsUpSharp, thumbsDownSharp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import renderHtml from 'react-render-html';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { formatAMPM } from '../utils/date-formatter';
import classes from './Comment.module.css';


interface Props {
    content: string;
    userName: string;
    updatedAt: string;
    uId: string;
    commentId: string;
    likes?: string[];
    unlikes?: string[];
    likeCount?: number;
    unlikeCount: number;
    handleDelete: (type: string, id: string, title?: string) => {}
    handleLike: (e, commentId, type, likes, uId) => {}
    handleUnLike: (e, commentId, type, unlikes, uId) => {}
}

const CommentItem: React.FC<Props> = ({ content, uId, userName, commentId, updatedAt, handleDelete, handleLike,
    handleUnLike, likes, unlikes, likeCount, unlikeCount }) => {

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

    useEffect(() => {
        didILike();
        didIUnLike();
    }, [liked, unliked, likes, unlikes]);

    return (
        <React.Fragment>
            <div className={`${classes.comment}`}>
                {content ? renderHtml(content) : null}
            </div>

            <br />

            <IonButton fill="clear" className={classes.alignleft}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleLike(e, commentId, 'comment', likes, uId);
                    return false;
                }
                }
            >
                <IonIcon icon={liked ? thumbsUpSharp : thumbsUpOutline}></IonIcon>
                <IonBadge color="success" hidden={!likes || likes?.length === 0} className={classes.tooltip}>{likes?.length}</IonBadge>
            </IonButton>


            <IonButton fill="clear" className={classes.alignleft}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleUnLike(e, commentId, 'comment', unlikes, uId);
                    return false;
                }
                }

            >
                <IonIcon icon={unliked ? thumbsDownSharp : thumbsDownOutline}></IonIcon>
                <IonBadge color="danger" hidden={!unlikes || unlikes?.length === 0}>{unlikes?.length}</IonBadge>
            </IonButton>


            <IonButton fill="clear" onClick={(e) => handleShowAlert(e)} className={classes.alignleft}
                hidden={!isSameUser(uId)}
            >
                <IonIcon icon={trash}></IonIcon>
            </IonButton>



            <IonNote
                className={`${classes.alignright} ion-text-center`}>
                Commented by {isSameUser(uId) ? " me" : userName} on {formatAMPM(updatedAt)}

                <IonAlert isOpen={showAlert}
                    message={'Really want to delete your comment?'}
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
                            handler: () => handleDelete("comment", commentId)
                        }
                    ]}
                />
            </IonNote>
            <br /><br />
        </React.Fragment>
    )
}

export default CommentItem;
