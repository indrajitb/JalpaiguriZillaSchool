import { IonButton, IonInput, IonLabel, IonNote } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useHistory } from 'react-router';
import { useTypedSelector } from '../hooks/useTypesSelector';
import './Editor.css';
import classes from './Editor.module.css';
import { signIn } from './Header';

interface Props {
    onPostFormData: (title: string, data: string) => void;
    hideTitle?: boolean;
    hidden?: boolean;
    text: string;
}

const Editor: React.FC<Props> = ({ onPostFormData, hideTitle, hidden, text }) => {

    const history = useHistory();
    const { userId, profileCreated, loggedIn } = useTypedSelector(state => state.userData);

    const loginMessage = "Please Login and then create your Profile to post";
    const profileMessage = "Please create your Profile to post"

    const postFromLS = () => {
        if (typeof window === 'undefined') {
            return null;
        }

        if (localStorage.getItem('post')) {
            return JSON.parse(localStorage.getItem('post'));
        } else {
            return null;
        }
    }

    const contentFromLS = () => {
        if (typeof window === 'undefined') {
            return null;
        }

        if (localStorage.getItem('posttext')) {
            return JSON.parse(localStorage.getItem('posttext'));
        } else {
            return null;
        }
    }

    const [body, setBody] = useState(postFromLS());
    const [content, setContent] = useState(contentFromLS());
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: null,
        title: '',
        hidePostButton: false
    })

    const [form, setForm] = useState(postFromLS());

    const { error, sizeError, success, formData, title, hidePostButton } = values;

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            ['clean'],
            // ['code-block']
        ]
    };

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        // 'image',
        // 'video',
        // 'code-block'
    ];


    useEffect(() => {
        setValues({ ...values, formData: new FormData() })
    }, [])


    const createPost = async () => {


        if (!loggedIn || !userId) {
            await signIn();
            return;
        }

        if (!profileCreated) {
            history.push('/my/profile');
        }
        onPostFormData(title, form);
    }

    const onSubmitForm = async (e) => {


        e.preventDefault();

        createPost();

        if (typeof window !== 'undefined') {
            localStorage.setItem('post', null);
        }

        if (typeof window !== 'undefined') {
            localStorage.setItem('posttext', null);
        }

        setValues({
            error: '',
            sizeError: '',
            success: '',
            formData: new FormData(),
            title: '',
            hidePostButton: false
        });

        setBody(postFromLS());
    }

    const clearAllData = () => {

        setValues({
            error: '',
            sizeError: '',
            success: '',
            formData: new FormData(),
            title: '',
            hidePostButton: false
        });

        if (typeof window !== 'undefined') {
            localStorage.setItem('post', null);
        }

        if (typeof window !== 'undefined') {
            localStorage.setItem('posttext', null);
        }

        setBody(postFromLS());

    }

    const handleCancel = () => {
        clearAllData();
    }

    const handleChange = text => e => {

        const value = text === 'photo' ? e.target.files[0] : e.target.value;

        formData.set(text, value);
        setValues({ ...values, [text]: value, formData, error: '' });
    }

    const handleBody = (e, delta, source, editor) => {
        const text = editor.getText(e);
        setBody(e);
        setContent(text);
        if (typeof window !== 'undefined') {
            localStorage.setItem('posttext', JSON.stringify(text));
        }
        if (!formData) return;
        formData.set('body', e);
        setForm(e);
        if (typeof window !== 'undefined') {
            localStorage.setItem('post', JSON.stringify(e));
        }
    }



    const createForm = () => {

        if (hidden) return null;


        return (
            <form onSubmit={onSubmitForm} className="app">

                <div className="ion-marginvertical ion-text-left">
                    <h5 className={classes.color}>{!loggedIn ? loginMessage : null}</h5>
                    <h5 className={classes.color}>{(loggedIn && !profileCreated) ? profileMessage : null}</h5>
                </div>

                <div hidden={hideTitle}>
                    <IonLabel >Title*</IonLabel>
                    <IonInput onIonChange={handleChange('title')} value={title} placeholder="Enter title for your post..." />
                </div>

                <ReactQuill
                    modules={modules}
                    formats={formats}
                    placeholder={text}
                    onChange={handleBody}
                    value={body}
                />
                <br />

                <IonNote>{Number.isNaN((1001 - content?.length)) ? ''
                    : (1001 - content?.length) + " charecters left"}
                </IonNote>
                <br />
                <br />


                <div >
                    <IonButton type="submit"
                        disabled={!content || content?.trim() === '' || content?.length > 1000 ||
                            (!hideTitle && !title) || (!hideTitle && title?.trim()) === ''} >
                        Post
                    </IonButton>

                    <IonButton type="button" onClick={handleCancel} disabled={!content || content?.trim() === ''} >
                        Cancel
                    </IonButton>

                </div>

            </form>
        )

    }

    return (
        createForm()
    )

}

export default Editor;