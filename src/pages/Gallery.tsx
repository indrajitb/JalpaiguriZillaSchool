import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton,
  IonIcon, IonGrid, IonRow, IonCol, IonButton,
  IonSegment, IonSegmentButton, IonLabel, IonFabList, IonToast, IonButtons, IonBackButton
} from '@ionic/react';

import { CameraResultType, CameraSource } from '@capacitor/core';
import { Camera } from '@capacitor/core'
import { camera, cloudUpload, add, closeOutline, folderSharp, folderOutline } from 'ionicons/icons';
import Resizer from 'react-image-file-resizer';

import Header from '../components/Header';
import { useActions } from '../hooks/useActions';
import { blobToBase64, dataURItoBlob } from '../utils/image-conversions';
import { useHistory } from 'react-router';
import { signIn } from '../components/Header';
import GalleryItem from '../components/GalleryItem';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { uuidv4 } from '../utils/uuid-generator';
import cssClasses from './Gallery.module.css';


const Gallery: React.FC = () => {
  const imagePlaceholder = '/assets/placeholder.png';
  const [imagePreviewUrl, setImagePreviewUrl] = useState(imagePlaceholder);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [percntUploaded, setPercentUploaded] = useState(0);
  const [fileUploading, setFileUploading] = useState('');
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { getMediaGallery, saveMediaGallery } = useActions();

  const { userId, profileCreated, email, name, loggedIn } = useTypedSelector(state => state.userData);

  const { galleryMediaFiles, error, percentUploaded, deleting, loading,
    fileIdDeleting } = useTypedSelector(state => state.galleryData);

  const uploadErrorText: string = "There was an error uploading the file.";

  const [segment, setSegment] = useState("gallery");
  const [mediaFrom, setMediaFrom] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const history = useHistory();

  useEffect(() => {

    const runOnce = async () => {

      await getMediaGallery();

    }

    runOnce();

  }, []);


  const handleCancel = () => {
    setImagePreviewUrl(imagePlaceholder);
    // images.splice(0);
    setImages([]);
    setIsFileSelected(false);
    setNewImage(null);
  }

  const handlePictureClick = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        allowEditing: true,
        width: 2000,
      });

      // setImagePreviewUrl(photo.webPath);
      setIsFileSelected(true);
      // setNewImage(photo.webPath);

      const blob = dataURItoBlob(photo.dataUrl);
      const file = uuidv4();

      Resizer.imageFileResizer(
        blob,
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
        500,
        300,
      );

    } catch (error) {
    }

  };


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
          500,
          300,
        );
      } catch (err) {
      }
    }
  }

  const handleSegment = (e: CustomEvent<HTMLIonSegmentButtonElement>) => {
    setSegment(e.detail.value);
  }

  const addMediaFrom = async (mediaFrom: string) => {

    if (!userId) {
      await signIn();
      return;
    }

    if (!profileCreated) {
      history.push('/my/profile');
    }

    if (mediaFrom === 'file') {

      setMediaFrom('file');

    } else if (mediaFrom === 'camera') {
      setMediaFrom('camera');
      await handlePictureClick();
    }

    setSegment("upload");

  }


  const clearStates = () => {
    setFileUploading(null);
    setPercentUploaded(0);
    setImagePreviewUrl(imagePlaceholder);
    setIsUploading(false);
    setImages([]);
    setUploadInProgress(false);
    // setShowToast(true);
    setIsFileSelected(null);
    setNewImage(null);
  }

  const fileUploadProgress = (percent: any, file: any) => {

    setFileUploading(file);
    setPercentUploaded(percent);

    if (percent === 100) {
      setShowToast(true);
    }
    clearStates();
  }

  const handleUpload = async () => {

    if (!userId) {
      await signIn();
      return;
    }

    if (!profileCreated) {
      history.push('/my/profile');
    }

    setUploadInProgress(true);

    await saveMediaGallery(userId, email, name, images, fileUploadProgress);

    clearStates();

  };

  const handleBackButton = () => {
    history.goBack();
  }

  return (
    <IonPage>
      <Header />
      <IonHeader>
        <IonToolbar>
          <IonButtons onClick={handleBackButton} slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={cssClasses.alignment}>

        <IonSegment value={segment} onIonChange={handleSegment}>
          <IonSegmentButton value="gallery">
            <IonLabel>Gallery</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="upload">
            <IonLabel>Upload</IonLabel>
          </IonSegmentButton>
        </IonSegment>



        <div hidden={segment === "upload"} className={cssClasses.container}>
          <br /><br />

          {galleryMediaFiles && galleryMediaFiles.map((item, index) => {
            return (
              <div key={index}>
                <>
                  <GalleryItem
                    fileKey={item.file.key}
                    fileId={item.file.fileId}
                    name={item.user.name}
                    email={item.user.email}
                    userId={userId}
                    itemUserId={item.user.userId}
                    itemUserName={item.user.name}
                    createdAt={item.file.createdAt}
                    deleting={deleting}
                    loading={loading}
                    fileIdDeleting={fileIdDeleting}
                    isCarousel={false}
                  />
                  <br /> <br /> <br />
                </>
              </div>
            )

          })}

        </div>


        <IonToast
          position="bottom"
          color="success"
          header="Success"
          isOpen={showToast}
          duration={5000}
          message={"File has been successfully uploaded!"}
        />

        <IonToast
          position="bottom"
          color="danger"
          header="Failure"
          isOpen={error !== null}
          duration={5000}
          message={uploadErrorText}
        />

        <IonGrid hidden={segment !== 'upload'} className={cssClasses.container}>
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
                <IonButton fill="solid">
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
                  disabled={!isFileSelected || percntUploaded > 0 || uploadInProgress} >
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

                <IonLabel hidden={percentUploaded === 0 || percentUploaded === 100}>
                  Uploading {" " + fileUploading + "... " + percentUploaded ? percentUploaded.toString() + '%' : ''}
                </IonLabel>

              </div>


            </IonCol>
          </IonRow>

        </IonGrid>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton onClick={async () => await addMediaFrom('file')} >
              <IonIcon icon={folderSharp} />
            </IonFabButton>
            <IonFabButton onClick={async () => await addMediaFrom('camera')} >
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFabList>
        </IonFab>


      </IonContent>
    </IonPage >
  );
};

export default Gallery;