import { API, graphqlOperation, Storage } from "aws-amplify";
import { listCarouselDatas } from '../../graphql/queries';
import aws_exports from "../../aws-exports";
import { File } from '../actions';
import { createCarouselData, deleteCarouselData } from '../../graphql/mutations';
import { Dispatch } from "redux";
import { CarouselAction } from '../actions';
import { CarouselMediaActionTypes } from "../action-types";

export const getCarouselData = (count?: number) => {

    return async (dispatch: Dispatch<CarouselAction>) => {


        dispatch({
            type: CarouselMediaActionTypes.GET_CAROUSEL_DATA,
        });

        try {

            type allFiles = {
                files: File[],
            };

            let allFiles: allFiles = {
                files: []
            }

            const result: any = await API.graphql(graphqlOperation(listCarouselDatas,
                { createdAt: { le: new Date().toString() }, sortDirection: "DESC" }));


            if (result && result.data && result.data.listCarouselDatas) {
                const mediaList: any[] = result.data.listCarouselDatas.items;

                mediaList && mediaList.map(item => {

                    item.file.map(i => {

                        let singleFile: File = {
                            bucket: '',
                            key: '',
                            region: '',
                            fileId: '',
                            createdAt: ''
                        };

                        singleFile.bucket = i.bucket;
                        singleFile.key = i.key;
                        singleFile.region = i.region;
                        singleFile.fileId = item.id;
                        singleFile.createdAt = item.createdAt;

                        allFiles.files.push(singleFile);

                        return i;
                    }
                    );

                    return item;

                }

                );


                dispatch({
                    type: CarouselMediaActionTypes.GET_CAROUSEL_DATA_SUCCESS,
                    payload: {
                        files: allFiles.files
                    }
                });

                return {
                    carouselData: allFiles.files,
                };
            }

        } catch (err) {
            console.error(err);
            dispatch({
                type: CarouselMediaActionTypes.GET_CAROUSEL_DATA_ERROR,
                payload: {
                    error: err
                }
            });
        }
    }

}

export const saveCarouselData = (images: any[], progressFn: any) => {

    return async (dispatch: Dispatch<CarouselAction>) => {

        dispatch({
            type: CarouselMediaActionTypes.SAVE_CAROUSEL_DATA,
            payload: {
                uploading: true
            }
        });

        const visibility = "public";

        type allFiles = {
            files: File[],
        };

        let allFiles: allFiles = {
            files: []
        }

        let folder = 'carousel';

        images.map(async image => {
            const filename = `${folder}/${Date.now()}-${image.fileName}`;
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
                    file
                };

                const result: any = await API.graphql(graphqlOperation(createCarouselData,
                    { input: input })
                );

                allFiles.files.push({
                    bucket: aws_exports.aws_user_files_s3_bucket,
                    region: aws_exports.aws_user_files_s3_bucket_region,
                    key: uploadedFile.key
                });

                dispatch({
                    type: CarouselMediaActionTypes.SAVE_CAROUSEL_DATA_SUCCESS,
                    payload: {
                        files: allFiles.files
                    }

                });


            } catch (err) {
                console.error("Error uploading file", err);
                dispatch({
                    type: CarouselMediaActionTypes.SAVE_CAROUSEL_DATA_ERROR,
                    payload: {
                        error: err
                    }

                });

            }

        });

        return allFiles;
    }


}

export const deleteCarouselImage = async (fileKey: string, fileId: string) => {

    return async (dispatch: Dispatch<CarouselAction>) => {
        const file = {
            key: fileKey,
            bucket: aws_exports.aws_user_files_s3_bucket,
            region: aws_exports.aws_user_files_s3_bucket_region,
            fileId: fileId
        };


        dispatch({
            type: CarouselMediaActionTypes.DELETE_CAROUSEL_DATA,
            payload: {
                file
            }
        });

        const visibility = "public";

        try {
            await Storage.remove(fileKey, { visibility });

            await API.graphql(graphqlOperation(deleteCarouselData, { input: { id: fileId } }));


            dispatch(
                {
                    type: CarouselMediaActionTypes.DELETE_CAROUSEL_DATA_SUCCESS,
                    payload: {
                        file
                    }

                }

            );


        } catch (err) {
            console.error('There was an error deleting the file', err);
        }
    }
}
