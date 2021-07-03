import { Dispatch } from 'redux';
import { GalleryMediaActionTypes } from '../action-types';
import { GalleryMediaAction } from '../actions';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createMediaFile, deleteMediaFile } from '../../graphql/mutations';
import { getMediaByTime, listMediaFiles } from '../../graphql/queries';
import { TableName } from '../../API';
import aws_exports from "../../aws-exports";
import { SingleFileAttribute } from '../actions';
import { database } from '../..';
import webpush from 'web-push';
import { pushNotification } from '../../utils/push-notification';

export const getMediaGallery = (userId?: string, count?: number) => {

    return async (dispatch: Dispatch<GalleryMediaAction>) => {

        dispatch({
            type: GalleryMediaActionTypes.GET_GALLERY_MEDIA,
            payload: {
                loading: true
            }
        });

        try {

            type allGalleryFiles = {
                files: SingleFileAttribute[],
                numberOfFiles: 0,
                totalNoOfFilesInDB: 0
            };

            let allFiles: allGalleryFiles = {
                files: [],
                numberOfFiles: 0,
                totalNoOfFilesInDB: 0
            };
            const queryParams = {
                // sortDirection: ModelSortDirection.DESC,
                // ModelStringKeyConditionInput: "lt",
                // createdAt: (new Date()).toString(),
                // userId: userId,
                // limit: count,
                filter: {
                    year: new Date().getFullYear().toString()
                }
            };


            const result: any = await API.graphql(graphqlOperation(getMediaByTime,
                { type: TableName.MediaFile, createdAt: { le: new Date().toString() }, sortDirection: "DESC" }));


            if (result && result.data && result.data.getMediaByTime) {
                const mediaList: any[] = result.data.getMediaByTime.items;

                mediaList && mediaList.map(item => {

                    allFiles.totalNoOfFilesInDB = result.data.getMediaByTime.items.length;
                    allFiles.numberOfFiles = result.data.getMediaByTime.items.length;

                    item.file.map(i => {

                        let singleFile: SingleFileAttribute = {
                            file: {
                                bucket: '',
                                key: '',
                                region: '',
                                fileId: '',
                                createdAt: ''
                            },
                            user: {
                                email: '',
                                name: '',
                                userId: '',
                            }
                        };

                        singleFile.file.bucket = i.bucket;
                        singleFile.file.key = i.key;
                        singleFile.file.region = i.region;
                        singleFile.file.fileId = item.id;
                        singleFile.user.userId = item.user.id;
                        singleFile.user.name = item.user.name;
                        singleFile.file.createdAt = item.createdAt;

                        allFiles.files.push(singleFile);

                        return i;
                    }
                    );

                    return item;

                }

                );


                dispatch({
                    type: GalleryMediaActionTypes.GET_GALLERY_MEDIA_SUCCESS,
                    payload: {
                        galleryMediaList: allFiles,
                        totalNoOfFilesInDB: count,
                        noOfFilesFetched: allFiles.files.length,
                        loading: false,
                        error: null
                    }
                });


                return {
                    galleryMediaList: allFiles,
                    totalNoOfFilesInDB: allFiles.totalNoOfFilesInDB,
                    noOfFilesFetched: allFiles.files.length,
                    loading: false
                };
            }

        } catch (err) {
            console.error(err);
            dispatch({
                type: GalleryMediaActionTypes.GET_GALLERY_MEDIA_ERROR,
                payload: {
                    error: err,
                    loading: false
                }
            });

        }

    }


}

export const saveMediaGallery = (userId: string, userEmail: string, userName: string, images: any[],
    progressFn: any, folderName?: string) => {

    return async (dispatch: Dispatch<GalleryMediaAction>) => {

        dispatch({
            type: GalleryMediaActionTypes.SAVE_GALLERY_MEDIA,
            payload: {
                uploading: true
            }
        });

        const visibility = "public";

        type allGalleryFiles = {
            files: SingleFileAttribute[];
            noOfFilesSaved: number;
        };

        const user = {
            email: userEmail,
            name: userName,
            userId: userId
        }

        let allFiles: allGalleryFiles = {
            files: [],
            noOfFilesSaved: 0
        };

        let folder = folderName;
        if (!folderName)
            folder = 'gallery'

        images.map(async image => {
            const filename = `${folder}/${userId}/${Date.now()}-${image.fileName}`;
            const imgName = image.name;

            try {


                const uploadedFile: any = await Storage.put(filename, /*image.file*/ image.image, {
                    level: visibility,
                    contentType: image.type,
                    progressCallback: progress => {
                        const percentUploaded = Math.round(
                            (progress.loaded / progress.total) * 100
                        );

                        progressFn(percentUploaded, imgName);

                        dispatch({
                            type: GalleryMediaActionTypes.PERCENT_UPLOADED,
                            payload: {
                                file: {
                                    bucket: aws_exports.aws_user_files_s3_bucket,
                                    key: filename,
                                    region: aws_exports.aws_user_files_s3_bucket_region,
                                    percentUploaded: percentUploaded,
                                    uploaded: percentUploaded === 100
                                }
                            }
                        });
                    }
                });

                const date = new Date();
                const year = date.getFullYear();
                const month = date.getMonth();

                const file = {
                    key: uploadedFile.key,
                    bucket: aws_exports.aws_user_files_s3_bucket,
                    region: aws_exports.aws_user_files_s3_bucket_region
                };
                const input = {
                    type: TableName.MediaFile,
                    userId: userId,
                    userEmail: userEmail,
                    file
                };

                const result: any = await API.graphql(graphqlOperation(createMediaFile,
                    { input: input })
                );

                allFiles.files.push({
                    file: {
                        bucket: file.bucket,
                        key: file.key,
                        region: file.region,
                        createdAt: result.data.createMediaFile.createdAt,
                        fileId: result.data.createMediaFile.id
                    },
                    user
                });

                dispatch({
                    type: GalleryMediaActionTypes.SAVE_GALLERY_MEDIA_SUCCESS,
                    payload: {
                        galleryMediaList: allFiles,
                        noOfFilesSaved: allFiles.noOfFilesSaved,
                        uploading: false
                    }

                });

                //Send push notification

                const pushMessage = `New Picture added by ${userName}!`;

                pushNotification(pushMessage, '/gallery', 'gallery');


            } catch (err) {
                console.error("Error uploading file", err);

                dispatch({
                    type: GalleryMediaActionTypes.SAVE_GALLERY_MEDIA_ERROR,
                    payload: {
                        error: err,
                        uploading: false
                    }
                });
            }

        });

        return allFiles;

    }

}

export const deleteMediaFromGallery = (fileKey: string, fileId: string, userId: string, userEmail: string,
    userName: string, createdAt: string) => {
    return async (dispatch: Dispatch<GalleryMediaAction>) => {

        const user = {
            email: userEmail,
            name: userName,
            userId: userId
        }


        dispatch({
            type: GalleryMediaActionTypes.DELETE_GALLERY_MEDIA,
            payload: {
                file: {
                    file: {
                        bucket: aws_exports.aws_user_files_s3_bucket,
                        key: fileKey,
                        region: aws_exports.aws_user_files_s3_bucket_region,
                        fileId: fileId,
                        createdAt: createdAt,
                    },
                    deleting: true,
                    user
                }
            }
        });

        const visibility = "public";

        try {
            await Storage.remove(fileKey, { visibility });

            await API.graphql(graphqlOperation(deleteMediaFile, { input: { id: fileId } }));

            const file = {
                key: fileKey,
                bucket: aws_exports.aws_user_files_s3_bucket,
                region: aws_exports.aws_user_files_s3_bucket_region,
                fileId: fileId
            };


            dispatch(
                {
                    type: GalleryMediaActionTypes.DELETE_GALLERY_MEDIA_SUCCESS,
                    payload: {
                        file,
                        deleting: false
                    }

                }

            )

        } catch (err) {
            console.error(err);
            const file = {
                key: fileKey,
                bucket: aws_exports.aws_user_files_s3_bucket,
                region: aws_exports.aws_user_files_s3_bucket_region
            };

            dispatch(
                {
                    type: GalleryMediaActionTypes.DELETE_GALLERY_MEDIA_ERROR,
                    payload: {
                        deleting: false,
                        error: err,
                        file
                    }
                }
            )

        }



    }

}
