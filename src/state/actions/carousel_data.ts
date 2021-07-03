import { CarouselMediaActionTypes } from '../action-types/index';

interface File {
    bucket: string;
    key: string;
    region: string;
    fileId?: string;
    url?: string;
}

interface GetCarouselDataAction {
    type: CarouselMediaActionTypes.GET_CAROUSEL_DATA,

}

interface GetCarouselDataSucceesAction {
    type: CarouselMediaActionTypes.GET_CAROUSEL_DATA_SUCCESS,
    payload: {
        files: File[],
    }
}

interface GetCarouselDataErrorAction {
    type: CarouselMediaActionTypes.GET_CAROUSEL_DATA_ERROR;
    payload: {
        error: string
    }

}

interface SaveCarouselDataAction {
    type: CarouselMediaActionTypes.SAVE_CAROUSEL_DATA;

}

interface SaveCarouselDataSuccessAction {
    type: CarouselMediaActionTypes.SAVE_CAROUSEL_DATA_SUCCESS;
    payload: {
        files: File[],
    }
}

interface SaveCarouselDataErrorAction {
    type: CarouselMediaActionTypes.SAVE_CAROUSEL_DATA_ERROR;
    payload: {
        error: string
    }

}

interface DeleteCarouselDataAction {
    type: CarouselMediaActionTypes.DELETE_CAROUSEL_DATA,
    payload: {
        file: File;
    }
}

interface DeleteCarouselDataSuccessAction {
    type: CarouselMediaActionTypes.DELETE_CAROUSEL_DATA_SUCCESS;
    payload: {
        file: File;
    }
}

interface DeleteCarouselDataErrorAction {
    type: CarouselMediaActionTypes.DELETE_CAROUSEL_DATA_ERROR;
    payload: {
        error: string;
    }

}

export type CarouselAction =
    GetCarouselDataAction
    | GetCarouselDataSucceesAction
    | GetCarouselDataErrorAction
    | SaveCarouselDataAction
    | SaveCarouselDataSuccessAction
    | SaveCarouselDataErrorAction
    | DeleteCarouselDataAction
    | DeleteCarouselDataSuccessAction
    | DeleteCarouselDataErrorAction
    ;


