import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import Editor from '../components/Editor';
import Header, { signIn } from '../components/Header';
import classes from './Posts.module.css';
import { API, graphqlOperation } from "aws-amplify";
import { TableName } from '../API'
import { getAllPosts } from '../graphql/queries';
import { createPost, createComment, deletePost, deleteComment, updatePost, updateComment } from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import { useTypedSelector } from '../hooks/useTypesSelector';
import PostItem from '../components/Post';
import CommentItem from '../components/Comment';
import produce from 'immer';
import { useHistory } from 'react-router';
import { pushNotification } from '../utils/push-notification';
import { uid } from '../utils/utils';

const cors = require('cors')({ origin: false });
// const cors = require('cors')();

const Posts: React.FC = () => {

    type CommentInterface = {
        commentId: string;
        postId: string;
        userId: string;
        updatedAt: string;
        content: string;
        userName: string;
        likes: string[],
        unlikes: string[],
    }

    type PostInterface = {
        userName: string;
        userId: string;
        title: string;
        content: string;
        updatedAt: string;
        postId: string;
        comments: CommentInterface[],
        likes: string[],
        unlikes: string[]
    }

    const [postedFormData, setPostedFormData] = useState('');
    const [title, setTitle] = useState('');
    const { userId, profileCreated, email: userEmail, name: userName, loggedIn } = useTypedSelector(state => state.userData);
    const [posts, setPosts] = useState<PostInterface[]>([]);
    // const [cPostListener, setCPostListener] = useState();
    // const [uPostListener, setUPostListener] = useState();
    // const [dPostListener, setDPostListener] = useState();
    const [createPListener, setcreatePListener] = useState<any>();
    const [deletePListener, setdeletePListener] = useState<any>();
    const [updatePListener, setUpdatePostListener] = useState<any>();
    const [showCommentBox, setShowCommentBox] = useState({ postId: null, show: false });
    const [createCListener, setcreateCListener] = useState<any>();
    const [deleteCListener, setdeleteCListener] = useState<any>();
    const [updateCListener, setUpdateCommentListener] = useState<any>();
    const history = useHistory();


    useEffect(() => {
        let createPostListener: any;
        let deletePostListener: any;
        let updatePostListener: any;

        let createCommentListener: any;
        let deleteCommentListener: any;
        let updateCommentListener: any


        const runOnce = async () => {
            // createPostListener = await API.graphql(graphqlOperation(subscriptions.createdPost));
            // deletePostListener = await API.graphql(graphqlOperation(subscriptions.deletedPost));
            // updatePostListener = await API.graphql(graphqlOperation(subscriptions.updatedPost));

            // createCommentListener = await API.graphql(graphqlOperation(subscriptions.createdComment));
            // deleteCommentListener = await API.graphql(graphqlOperation(subscriptions.deletedComment));
            // updateCommentListener = await API.graphql(graphqlOperation(subscriptions.updatedComment));

            createPostListener = await API.graphql(graphqlOperation(subscriptions.onCreatePost));
            deletePostListener = await API.graphql(graphqlOperation(subscriptions.onDeletePost));
            updatePostListener = await API.graphql(graphqlOperation(subscriptions.onUpdatePost));

            createCommentListener = await API.graphql(graphqlOperation(subscriptions.onCreateComment));
            deleteCommentListener = await API.graphql(graphqlOperation(subscriptions.onDeleteComment));
            updateCommentListener = await API.graphql(graphqlOperation(subscriptions.onUpdateComment));

            setcreatePListener(createPostListener);
            setdeletePListener(deletePostListener);
            setUpdatePostListener(updatePostListener);
            setcreateCListener(createCommentListener);
            setdeleteCListener(deleteCommentListener);
            setUpdateCommentListener(updateCommentListener);

            // const result: any = await API.graphql(graphqlOperation(listPosts, { createdAt: { le: new Date().toString() }, sortDirection: "DESC" }));


            let arrayPost = [];

            try {
                const result: any = await API.graphql(graphqlOperation(getAllPosts, { type: TableName.Post, sortDirection: "DESC" }));


                result.data.getAllPosts.items.map(async postItem => {
                    const userName = postItem.user.name;
                    const uId = postItem.user.id;
                    const updatedAt = postItem.updatedAt;
                    const title = postItem.title;
                    const content = postItem.content;
                    const postId = postItem.id;
                    const postLikes = [];
                    const postUnlikes = [];
                    const comments: any = postItem.comments;
                    let arrayComment = [];

                    postItem.likes && postItem.likes.map(l => { postLikes.push(l) });
                    postItem.unlikes && postItem.unlikes.map(u => { postUnlikes.push(u) });


                    comments && comments.items && comments.items.map(commentItem => {

                        const content = commentItem.content
                        const postId = commentItem.postId;
                        const uId = commentItem?.user?.id;
                        const updatedAt = commentItem.updatedAt;
                        const userName = commentItem?.user?.name;
                        const commentId = commentItem.id;
                        const commentLikes = [];
                        const commentUnlikes = [];


                        commentItem.likes && commentItem.likes.map(l => { commentLikes.push(l) });
                        commentItem.unlikes && commentItem.unlikes.map(u => { commentUnlikes.push(u) });

                        const comment = {
                            commentId,
                            postId,
                            userId: uId,
                            updatedAt,
                            content,
                            userName,
                            likes: [...commentLikes],
                            unlikes: [...commentUnlikes],
                        }

                        arrayComment.unshift(comment);

                    });

                    const post = {
                        userName,
                        userId: uId,
                        title,
                        content,
                        updatedAt,
                        postId,
                        comments: [...arrayComment],
                        likes: [...postLikes],
                        unlikes: [...postUnlikes]
                    };

                    arrayPost.push(post);

                });

            } catch (err) {
                console.error(err);
            }

            setPosts(
                [...arrayPost]
            );


            createPostListener?.subscribe({
                next: data => {
                    const createdPost: any = data.value.data.onCreatePost;

                    const userName = createdPost.user.name;
                    const uId = createdPost.user.id;
                    const updatedAt = createdPost.updatedAt;
                    const title = createdPost.title;
                    const content = createdPost.content;
                    const newPost = {
                        userName,
                        userId: uId,
                        title,
                        content,
                        updatedAt,
                        postId: createdPost.id,
                        likes: [],
                        unlikes: [],
                        comments: []
                    };


                    setPosts(prevPosts => {
                        return [
                            newPost,
                            ...prevPosts
                        ]
                    });

                }
            });




            deletePostListener?.subscribe({
                next: data => {
                    setPosts(prevState => {
                        return prevState.filter(item => {
                            return item.postId !== data.value.data.onDeletePost.id;
                        });

                    })
                }
            });



            updatePostListener?.subscribe({
                next: data => {

                    const updatedPost: any = data.value.data.onUpdatePost;

                    const newPost = {
                        userName: updatedPost.user.name,
                        userId: updatedPost.user.id,
                        title: updatedPost.title,
                        content: updatedPost.content,
                        updatedAt: updatedPost.updatedAt,
                        postId: updatedPost.id,
                        likes: updatedPost.likes,
                        unlikes: updatedPost.unlikes
                    };


                    setPosts(
                        produce(draft => {
                            const idx = draft.findIndex(e => {
                                return e.postId === newPost.postId
                            }
                            );

                            if (idx === -1)
                                return;

                            draft[idx].likes = [];
                            if (newPost.likes)
                                draft[idx].likes.push(...newPost.likes);


                            draft[idx].unlikes = [];
                            if (newPost.unlikes)
                                draft[idx].unlikes.push(...newPost.unlikes);
                        })
                    );

                }
            });



            createCommentListener?.subscribe({
                next: data => {

                    const createdComment: any = data.value.data.onCreateComment;

                    const postId = createdComment.postId;
                    const content = createdComment.content;
                    const commentId = createdComment.id;
                    const userName = createdComment.user.name;
                    const uId = createdComment.user.id;
                    const updatedAt = createdComment.updatedAt;

                    const comment = {
                        commentId,
                        postId,
                        userId: uId,
                        updatedAt,
                        content,
                        userName,
                        likes: [],
                        unlikes: []
                    }

                    setPosts(
                        produce(draft => {
                            const idx = draft.findIndex(e => {
                                return e.postId === postId
                            }
                            );

                            if (idx === -1)
                                return;

                            draft[idx].comments.unshift(comment);

                        })
                    );

                }
            }


            );



            deleteCommentListener?.subscribe({
                next: data => {

                    const deletedComment: any = data.value.data.onDeleteComment;


                    const postId = deletedComment.postId;

                    setPosts(
                        produce(draft => {
                            const idx = draft.findIndex(e => {
                                return e.postId === postId
                            }
                            );

                            if (idx === -1)
                                return;

                            draft[idx].comments.splice(idx, 1);

                        })
                    );

                }
            });

            updateCommentListener?.subscribe({
                next: data => {
                    const updatedComment: any = data.value.data.onUpdateComment;

                    const newComment = {
                        userName: updatedComment.user.name,
                        userId: updatedComment.user.id,
                        content: updatedComment.content,
                        updatedAt: updatedComment.updatedAt,
                        commentId: updatedComment.id,
                        likes: updatedComment.likes,
                        unlikes: updatedComment.unlikes,
                        postId: updatedComment.postId
                    };

                    setPosts(
                        produce(draft => {
                            const idx = draft.findIndex(e => {
                                return e.postId === newComment.postId
                            }
                            );

                            if (idx === -1)
                                return;

                            const comments = draft[idx].comments;
                            const cIdx = comments.findIndex(e => {
                                return e.commentId === newComment.commentId
                            }
                            );

                            if (cIdx !== -1) {

                                draft[idx].comments[cIdx].likes = [];
                                if (newComment.likes)
                                    draft[idx].comments[cIdx].likes.push(...newComment.likes);
                            }

                            if (cIdx !== -1) {

                                draft[idx].comments[cIdx].unlikes = [];
                                if (newComment.unlikes)
                                    draft[idx].comments[cIdx].unlikes.push(...newComment.unlikes);
                            }


                        })
                    );
                }
            });



        }

        runOnce();


        return () => {
            if (createPListener) {
                createPListener?.unsubscribe();
                setcreatePListener(null);
            }
            if (deletePListener) {
                deletePListener?.unsubscribe();
                setdeletePListener(null);
            }
            if (updatePListener) {
                updatePListener?.unsubscribe();
                setUpdatePostListener(null);
            }

            if (createCListener) {
                createCListener?.unsubscribe();
                setcreateCListener(null);
            }
            if (deleteCListener) {
                deleteCListener?.unsubscribe();
                setdeleteCListener(null);
            }
            if (updateCListener) {
                updateCListener?.unsubscribe();
                setUpdateCommentListener(null);
            }
        }
    }, []);



    const createMyPost = async (title: string, data: string) => {


        if (!loggedIn || !userId) {
            await signIn();
            return;
        }

        if (!profileCreated) {
            history.push('/my/profile');
            return;
        }

        const input = {
            type: TableName.Post,
            userId: userId,
            title: title && title.trim(),
            content: data && data.trim(),
            userEmail
        };

        try {
            await API.graphql(graphqlOperation(createPost,
                { input: input }));


            //Send push notification

            const pushMessage = `New Post added by ${userName}!`;

            pushNotification(pushMessage, '/posts', 'post');


        } catch (err) {
            console.error(err);
        }
    }

    const createMyComment = async (postId, data) => {


        if (!loggedIn || !userId) {
            await signIn();
            return;
        }

        if (!profileCreated) {
            history.push('/my/profile');
        }

        const input = {
            type: TableName.Comment,
            postId,
            userId,
            content: data && data.trim(),
            userEmail
        };

        try {
            await API.graphql(graphqlOperation(createComment,
                { input: input }));


            //Send push notification

            const pushMessage = `New Comment added by ${userName}!`;

            pushNotification(pushMessage, '/posts', 'post');

        } catch (err) {
            console.error(err);
        }
    }

    const onPostFormData = async (title: string, data: string, isComment?: boolean, postId?: string) => {


        if (isComment) {
            createMyComment(postId, data);
        } else {
            createMyPost(title, data);
        }
    }

    const handleDelete = async (type: string, id: string) => {


        if (type === "post") {

            try {

                //Delet the associated comments

                const post = posts.find(post => post.postId === id);
                const comments = post.comments;

                if (comments)
                    comments.map(async comment => {
                        const commentId = comment.commentId;

                        await API.graphql(graphqlOperation(deleteComment,
                            { input: { id: commentId } }));

                    });

                //Delete the post
                await API.graphql(graphqlOperation(deletePost,
                    { input: { id: id } }));

            } catch (err) {
                console.error(err);
            }



        }
        else if (type === "comment") {

            try {

                await API.graphql(graphqlOperation(deleteComment,
                    { input: { id: id } }));

            } catch (err) {
                console.error(err);
            }

        }
    }

    const handleComment = (e, postId) => {

        e.preventDefault();
        e.stopPropagation();

        setShowCommentBox(state => {
            return {
                ...state,
                postId,
                show: !state.show
            }

        });

        return false;
    }

    const handleLike = async (e, pId, cId, type, storedLikes: any[], uId) => {

        e.preventDefault();
        e.stopPropagation();

        const newLikes = [...storedLikes];


        if (!loggedIn || !userId) {
            await signIn();
            return;
        }

        if (!profileCreated) {
            history.push('/my/profile');
        }

        if (uId === userId) {
            return;
        }


        if (type === 'post') {

            let isLiked = false;

            isLiked = newLikes && newLikes.includes(userName);

            if (!isLiked) {
                newLikes.push(userName);
            } else {
                const index = newLikes.findIndex(s => s === userName);
                if (index !== -1)
                    newLikes.splice(index, 1);
            }

            const input = {
                id: pId,
                likes: [...newLikes]
            };


            try {
                await API.graphql(graphqlOperation(updatePost,
                    { input: input }));


            } catch (err) {
                console.error(err);
            }
        }
        else if (type === 'comment') {

            let isLiked = false;

            isLiked = newLikes && newLikes.includes(userName);

            if (!isLiked) {
                newLikes.push(userName);
            } else {
                const index = newLikes.findIndex(s => s === userName);
                if (index !== -1)
                    newLikes.splice(index, 1);
            }

            const input = {
                id: cId,
                likes: [...newLikes]
            };

            try {
                await API.graphql(graphqlOperation(updateComment,
                    { input: input }));

            } catch (err) {
                console.error(err);
            }
        }

        return false;

    }

    const handleUnlike = async (e, pId, cId, type, storedUnlikes: any[], uId) => {

        e.preventDefault();
        e.stopPropagation();


        const newUnlikes = [...storedUnlikes];


        if (!loggedIn || !userId) {
            await signIn();
            return;
        }

        if (!profileCreated) {
            history.push('/my/profile');
        }

        if (uId === userId) {
            return;
        }


        if (type === 'post') {

            let isUnliked = false;

            isUnliked = newUnlikes && newUnlikes.includes(userName);

            if (!isUnliked) {
                newUnlikes.push(userName);
            } else {
                const index = newUnlikes.findIndex(s => s === userName);
                if (index !== -1)
                    newUnlikes.splice(index, 1);
            }

            const input = {
                id: pId,
                unlikes: newUnlikes
            };


            try {
                await API.graphql(graphqlOperation(updatePost,
                    { input: input }));


            } catch (err) {
                console.error(err);
            }
        }
        else if (type === 'comment') {

            let isUnliked = false;

            isUnliked = newUnlikes && newUnlikes.includes(userName);

            if (!isUnliked) {
                newUnlikes.push(userName);
            } else {
                const index = newUnlikes.findIndex(s => s === userName);
                if (index !== -1)
                    newUnlikes.splice(index, 1);
            }

            const input = {
                id: cId,
                unlikes: newUnlikes
            };

            try {
                await API.graphql(graphqlOperation(updateComment,
                    { input: input }));

            } catch (err) {
                console.error(err);
            }
        }

        return false;

    }

    const handleBackButton = () => {
        history.goBack();
    }

    return (
        <IonPage>
            <Header />
            <IonToolbar>
                <IonButtons onClick={handleBackButton} slot="start">
                    <IonBackButton defaultHref="home" />
                </IonButtons>
                <IonTitle>Posts</IonTitle>
            </IonToolbar>
            <IonContent className={classes.alignment}>

                <IonGrid>

                    <IonRow>
                        <IonCol size-md="12">
                            <Editor onPostFormData={onPostFormData} text="Write something..." />
                        </IonCol>
                    </IonRow>


                    {posts && posts?.map((post) => {
                        return (
                            <React.Fragment key={uid()}>
                                <IonRow key={uid()}>
                                    <IonCol size-md="12">
                                        <IonCard>
                                            <IonCardHeader>
                                                <IonCardSubtitle>
                                                    <IonCardTitle>
                                                        <h2><strong>{post.title}</strong></h2>
                                                    </IonCardTitle>
                                                </IonCardSubtitle>
                                            </IonCardHeader>

                                            <IonCardContent>

                                                <PostItem postId={post.postId} content={post.content} title={post.title} updatedAt={post.updatedAt}
                                                    userName={post.userName} uId={post.userId} likes={post.likes} unlikes={post.unlikes}
                                                    likeCount={post.likes?.length}
                                                    unlikeCount={post.unlikes?.length}
                                                    handleDelete={() => handleDelete('post', post.postId)}
                                                    handleComment={(e) => handleComment(e, post.postId)}
                                                    handleLike={(e) => handleLike(e, post.postId, 0, 'post', post.likes, post.userId)}
                                                    handleUnLike={(e) => handleUnlike(e, post.postId, 0, 'post', post.unlikes, post.userId)}
                                                    comments={post.comments}
                                                    key={uid()} />

                                                <hr />

                                                <br /><br />

                                                {/* {post.postId === showCommentBox.postId ?
                                                    <Editor onPostFormData={(title, form) => onPostFormData(title, form, true, post.postId)}
                                                        hideTitle={true} hidden={!showCommentBox.show} key={uid()}
                                                    />

                                                    :
                                                    null
                                                } */}

                                                <Editor onPostFormData={(title, form) => onPostFormData(title, form, true, post.postId)}
                                                    hideTitle={true} key={uid()} text="Write a comment..."
                                                />

                                                {post.comments && post.comments.length > 0 ?
                                                    <React.Fragment key={uid()}>
                                                        <br /><br /><br></br><br />
                                                        <h2><b><IonLabel>Comments</IonLabel></b></h2>
                                                        <br /><br />
                                                        {post.comments.map((comment, i) => {
                                                            return (
                                                                <React.Fragment key={uid()}>
                                                                    <CommentItem content={comment.content} updatedAt={comment.updatedAt}
                                                                        commentId={comment.commentId} uId={comment.userId} userName={comment.userName}
                                                                        likes={comment.likes} unlikes={comment.unlikes}
                                                                        likeCount={comment.likes?.length}
                                                                        unlikeCount={comment.unlikes?.length}
                                                                        handleDelete={() => handleDelete('comment', comment.commentId)}
                                                                        handleLike={(e) => handleLike(e, 0, comment.commentId, 'comment', comment.likes, comment.userId)}
                                                                        handleUnLike={(e) => handleUnlike(e, 0, comment.commentId, 'comment', comment.unlikes, comment.userId)}
                                                                    />

                                                                    <br /><br /><br />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </React.Fragment> : null
                                                }

                                                <br /><br />

                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>




                            </React.Fragment>

                        )

                    })}




                </IonGrid>

            </IonContent>
        </IonPage>
    )

}

export default Posts;