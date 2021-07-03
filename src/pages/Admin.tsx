import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToast, IonGrid, IonRow, IonCol, IonButton, IonIcon
} from '@ionic/react';

import { cloudUpload, closeOutline, folderOutline } from 'ionicons/icons';
import Resizer from 'react-image-file-resizer';

import Header from '../components/Header';
import { useActions } from '../hooks/useActions';
import { blobToBase64 } from '../utils/image-conversions';
import { useHistory } from 'react-router';
import GalleryItem from '../components/GalleryItem';
import { useTypedSelector } from '../hooks/useTypesSelector';
import cssClasses from './Admin.module.css';
import { getAllUsers, getUserProfileFromDB } from '../state';
import produce from 'immer';
import { API, graphqlOperation } from 'aws-amplify';
import { getProfile, listUsers } from '../graphql/queries';
import { DRAFTABLE } from 'immer/dist/internal';


const Admin: React.FC = () => {
  const imagePlaceholder = '/assets/placeholder.png';
  const [imagePreviewUrl, setImagePreviewUrl] = useState(imagePlaceholder);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [fileUploading, setFileUploading] = useState('');
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [showToast, setShowToast] = useState(false);

  interface User {
    userName: string;
    email: string;
    userId: string;
    role: string;
    roleInteger: string
  }

  interface AllUsers {
    users: User[]
  }


  const { getCarouselData, saveCarouselData, deleteCarouselImage } = useActions();

  const { files } = useTypedSelector(state => state.carouselData)

  const [newImage, setNewImage] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [allTheUsers, setAllUsers] = useState<User[]>([]);
  const { profileCreated, loggedIn } = useTypedSelector(state => state.userData);

  const history = useHistory();

  const getUsers = async () => {

    const users = await getAllUsers();

    users && users.map(i => {
      setAllUsers(
        produce(draft => {
          return draft.push(i);

        })
      )
    });

    // setAllUsers([...users]);

    // return users;

    // const listOfUsers = [];

    // users && users.map(async user => {

    //   const profile = await getUserProfileFromDB(user.email);

    //   const item = {
    //     name: user.userName,
    //     email: user.email,
    //     userId: user.userId,
    //     role: profile.role,
    //     roleInteger: profile.roleInteger
    //   };

    //   listOfUsers.push(item);

    // });

    // return listOfUsers;
  }

  useEffect(() => {

    if (!loggedIn) {
      console.error('Log in');
      history.push('/home');
    }

    if (!profileCreated) {
      console.error('Create profile');
      history.push('/home');
    }

    const allUsers = [];
    const runOnce = async () => {

      try {

        await getCarouselData();

        await getUsers();

        // const items = await getAllUsers();
        // console.log('Items: ', items);

        // const users = [];
        // const allItems = [...items];

        // // allItems && allItems.map(i => {
        // //   console.log(i);
        // //   users.push({
        // //     userName: i.userName,
        // //     email: i.email,
        // //     userId: i.userId,
        // //     role: i.role,
        // //     roleInteger: i.roleInteger
        // //   })
        // // });


        // // const users = [...items];

        // console.log('ALL ITEMS: ', allItems);
        // console.log('USERS: ', users);

        // // setAllUsers([...allItems]);

        // setAllUsers(
        //   produce(draft => {
        //     draft = [...items]
        //   })
        // )

        // users && users.map(user => {

        //   // const { role, roleInteger } = await getUserProfileFromDB(user.email);

        //   // console.log(role, roleInteger);

        //   const item = {
        //     userName: user.userName,
        //     email: user.email,
        //     userId: user.userId,
        //     role: user.role,
        //     roleInteger: user.roleInteger
        //   };

        //   console.log('Item: ', item);

        //   // setAllUsers(prevState => {
        //   //   return [
        //   //     ...prevState,
        //   //     { ...item }
        //   //   ]
        //   // });

        //   // allUsers.push({ ...item });
        //   allUsers.push(item);

        // });

        // console.log('List of users:', allUsers);

        // // allUsers && allUsers.map(i => {

        // //   setAllUsers(
        // //     produce(draft => {
        // //       draft.push(i);
        // //     })
        // //   )

        // // });

        // // setAllUsers([...{ ...allUsers }]);

        // // setAllUsers([...allUsers])

      } catch (err) {
        console.error(err);
      }
    }

    runOnce();

  }, [loggedIn, profileCreated]);


  const handleCancel = () => {
    setImagePreviewUrl(imagePlaceholder);
    images.splice(0);
    setIsFileSelected(false);
    setNewImage(null);
  }



  const fileUploadProgress = (percent: any, file: any) => {

    setFileUploading(file);

    if (percent === 100) {
      setFileUploading(null);
      setImagePreviewUrl(imagePlaceholder);
      setIsUploading(false);
      setImages([]);
      setUploadInProgress(false);
      setShowToast(true);
      setImages([]);
      setIsFileSelected(null);
      setNewImage(null);
    }

  }

  const fileChangedHandler = (event) => {
    let fileInput = false;
    if (event.target.files[0]) {
      fileInput = true
    }
    if (fileInput) {
      setIsFileSelected(true);
      const name: string = event.target.files[0].name;
      const file = name?.split('.')[0];

      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          1500,
          800,
          'JPEG',
          70,
          0,
          uri => {

            setImages(state => {

              if (!state) {
                blobToBase64(uri).then(res => {
                  setNewImage(res);
                });

                setNewImage(uri);
                return [{ fileName: file + '.jpeg', image: uri, type: 'JPEG' }]
              }
              else {
                blobToBase64(uri).then(res => {
                  setNewImage(res);
                });

                setNewImage(uri);
                return [...state, { fileName: file + '.jpeg', image: uri, type: 'JPEG' }];
              }

            });
          },
          'blob',
          100,
          50,
        );
      } catch (err) {
      }
    }
  }

  const handleUpload = async () => {

    setUploadInProgress(true);

    await saveCarouselData(images, fileUploadProgress,);


  };

  return (
    <IonPage>
      <Header />
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin Page
          </IonTitle>
        </IonToolbar >
      </IonHeader>
      <IonContent className={cssClasses.alignment}>

        <IonToast
          position="bottom"
          color="success"
          header="Success"
          isOpen={showToast}
          duration={5000}
          message={"File has been successfully uploaded!"}
        />

        <IonGrid className="container">

          <IonRow>
            <IonCol>
              All Users
            </IonCol>
          </IonRow>

          {allTheUsers && allTheUsers.map(user => {
            return (
              <IonRow key={user.userId}>

                <IonCol>
                  {user.userName}
                </IonCol>

                <IonCol>
                  {user.email}
                </IonCol>

                <IonCol>
                  {user.userId}
                </IonCol>

                <IonCol>
                  {user.role}
                </IonCol>

                <IonCol>
                  {user.roleInteger}
                </IonCol>

              </IonRow>
            )

          })}

          <IonRow >
            <IonCol size="12">

              <div className="content ion-text-center">
                {imagePreviewUrl && !newImage && (
                  <img
                    className="image-preview"
                    src={imagePreviewUrl}
                    alt="Image Preview"
                  />
                )}
              </div>

              <img src={newImage} alt='' />

              <div className={`${cssClasses.fileUpload} content ion-text-center`} >
                <IonButton fill="solid" hidden={isFileSelected}>
                  <IonIcon slot="start" icon={folderOutline}></IonIcon>
                  Select File
                  <input type="file" className={cssClasses.upload} accept="image/*" onChange={fileChangedHandler} />
                </IonButton>

              </div>

            </IonCol>

          </IonRow>


          <IonRow>
            <IonCol size="12" >
              <div className="content ion-text-center">

                <IonButton fill="solid" onClick={handleCancel}
                  disabled={!isFileSelected || uploadInProgress} >
                  <IonIcon slot="start" icon={closeOutline}></IonIcon>
                  Cancel
                </IonButton>

                <IonButton
                  onClick={handleUpload}
                  disabled={isUploading || images?.length === 0}
                >
                  <IonIcon slot="start" icon={cloudUpload}></IonIcon>
                  {isUploading ? "Uploading..." : "Upload"}
                </IonButton>

              </div>


            </IonCol>
          </IonRow>

        </IonGrid>


        <div className="container">
          <br /><br />

          {files && files.map((item, index) => {
            return (
              <div key={index}>
                <>
                  <GalleryItem
                    fileKey={item.key}
                    fileId={item.fileId}
                    isCarousel={true}
                  />
                  <br /> <br /> <br />
                </>
              </div>
            )

          })}

        </div>

        <hr />

      </IonContent>
    </IonPage >
  );
};

export default Admin;