import produce from 'immer';
import { GalleryMediaActionTypes } from '../action-types';
import { GalleryMediaAction } from '../actions';
import { SingleFileAttribute } from '../actions'

interface GalleryMediaState {
    galleryMediaFiles: SingleFileAttribute[];
    totalNoOfFilesInDB: number;
    noOfFilesFetched: number;
    error?: string;
    fileGettingUploaded: string;
    percentUploaded: number;
    uploading?: boolean;
    deleting?: boolean;
    loading?: boolean;
    fileIdDeleting?: string;
};


const InitialState: GalleryMediaState = {
    galleryMediaFiles: [],
    totalNoOfFilesInDB: 0,
    noOfFilesFetched: 0,
    error: null,
    fileGettingUploaded: '',
    percentUploaded: 0,
    fileIdDeleting: ''
}


export const galleryMediaDataReducer = (state: GalleryMediaState = InitialState, action: GalleryMediaAction) => {

    return produce(state, draft => {

        switch (action.type) {
            case GalleryMediaActionTypes.GET_GALLERY_MEDIA:
                draft.loading = true;

                return draft;

            case GalleryMediaActionTypes.GET_GALLERY_MEDIA_SUCCESS:
                draft.galleryMediaFiles = [];
                action.payload.galleryMediaList.files.map(item => {
                    draft.galleryMediaFiles.push(item);
                });
                draft.noOfFilesFetched += action.payload.galleryMediaList.files.length;
                draft.totalNoOfFilesInDB += action.payload.galleryMediaList.files.length;
                draft.loading = false;
                draft.error = null;

                return draft;

            case GalleryMediaActionTypes.GET_GALLERY_MEDIA_ERROR:
                draft.loading = false;
                draft.error = action.payload.error;

                return draft;

            case GalleryMediaActionTypes.SAVE_GALLERY_MEDIA:
                draft.uploading = true;

                return draft;

            case GalleryMediaActionTypes.SAVE_GALLERY_MEDIA_SUCCESS:
                action.payload.galleryMediaList.files.map(item => {
                    draft.galleryMediaFiles.unshift(item);
                });

                draft.uploading = false;
                draft.totalNoOfFilesInDB = draft.galleryMediaFiles.length;
                draft.noOfFilesFetched = action.payload.noOfFilesSaved;
                draft.error = null;

                return draft;

            case GalleryMediaActionTypes.SAVE_GALLERY_MEDIA_ERROR:
                draft.uploading = false;
                draft.error = action.payload.error;

                return draft;

            case GalleryMediaActionTypes.PERCENT_UPLOADED:
                draft.fileGettingUploaded = action.payload.file.key;
                draft.percentUploaded = action.payload.file.percentUploaded;

                return draft;

            case GalleryMediaActionTypes.DELETE_GALLERY_MEDIA:
                draft.deleting = true;
                draft.fileIdDeleting = action.payload.file.file.fileId;

                return draft;

            case GalleryMediaActionTypes.DELETE_GALLERY_MEDIA_SUCCESS:

                draft.galleryMediaFiles.map((item, index) => {
                    if (item.file.fileId === action.payload.file.fileId) {
                        draft.galleryMediaFiles.splice(index, 1);
                    }
                });

                draft.totalNoOfFilesInDB = draft.galleryMediaFiles.length;
                draft.noOfFilesFetched = draft.galleryMediaFiles.length;
                draft.deleting = false;
                draft.error = null;

                return draft;

            case GalleryMediaActionTypes.DELETE_GALLERY_MEDIA_ERROR:

                draft.deleting = false;
                draft.error = action.payload.error;

                return draft;

            default:
                return state;
        }
    });
};