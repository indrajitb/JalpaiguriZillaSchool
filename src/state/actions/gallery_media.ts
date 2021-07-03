import { GalleryMediaActionTypes } from '../action-types/index';

export interface File {
    bucket: string;
    key: string;
    region: string;
    fileId?: string;
    percentUploaded?: number;
    uploaded?: boolean;
    createdAt?: string;
    url?: string;
}

export interface User {
    name: string;
    email: string;
    userId: string;
}

export interface SingleFileAttribute {
    file: File;
    user: User;
    uploading?: boolean;
    deleting?: boolean;
    loading?: boolean;
    percentUploaded?: number;
}

interface GetGalleryMediaFiles {
    files: SingleFileAttribute[];

}

interface SavedGalleryMediaFiles {
    files: SingleFileAttribute[];
}

interface GetGalleryMediaAction {
    type: GalleryMediaActionTypes.GET_GALLERY_MEDIA,
    payload: {
        loading: boolean
    }
}

interface GetGalleryMediaSucceesAction {
    type: GalleryMediaActionTypes.GET_GALLERY_MEDIA_SUCCESS,
    payload: {
        galleryMediaList: GetGalleryMediaFiles,
        totalNoOfFilesInDB?: number;
        noOfFilesFetched?: number;
        loading: boolean;
    }
}

interface GetGalleryMediaErrorAction {
    type: GalleryMediaActionTypes.GET_GALLERY_MEDIA_ERROR;
    payload: {
        error: string;
        loading: boolean;
    };
}

interface SaveGalleryMediaAction {
    type: GalleryMediaActionTypes.SAVE_GALLERY_MEDIA;
    payload: {
        uploading: boolean;
    }
}

interface SaveGalleryMediaSuccessAction {
    type: GalleryMediaActionTypes.SAVE_GALLERY_MEDIA_SUCCESS;
    payload: {
        galleryMediaList: SavedGalleryMediaFiles,
        noOfFilesSaved: number;
        uploading: boolean;
    }
}

interface SaveGalleryMediaErrorAction {
    type: GalleryMediaActionTypes.SAVE_GALLERY_MEDIA_ERROR;
    payload: {
        error: string;
        uploading: boolean;
    };
}

interface GalleryMediaPercentUploadedAction {
    type: GalleryMediaActionTypes.PERCENT_UPLOADED;
    payload: {
        file: File
    }
}

interface GalleryMediaDeleteAction {
    type: GalleryMediaActionTypes.DELETE_GALLERY_MEDIA,
    payload: {
        file: SingleFileAttribute;
    }
}

interface GalleryMediaDeleteSuccessAction {
    type: GalleryMediaActionTypes.DELETE_GALLERY_MEDIA_SUCCESS;
    payload: {
        file: File;
        deleting: boolean;
    }
}

interface GalleryMediaDeleteErrorAction {
    type: GalleryMediaActionTypes.DELETE_GALLERY_MEDIA_ERROR;
    payload: {
        error: string;
        deleting: boolean;
        file: File;
    }

}

export type GalleryMediaAction =
    GetGalleryMediaAction
    | GetGalleryMediaSucceesAction
    | GetGalleryMediaErrorAction
    | SaveGalleryMediaAction
    | SaveGalleryMediaSuccessAction
    | SaveGalleryMediaErrorAction
    | GalleryMediaPercentUploadedAction
    | GalleryMediaDeleteAction
    | GalleryMediaDeleteSuccessAction
    | GalleryMediaDeleteErrorAction
    ;


