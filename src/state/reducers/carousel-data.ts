import produce from 'immer';
import { CarouselMediaActionTypes } from '../action-types';
import { CarouselAction } from '../actions';
import { File } from '../actions'

interface CarouselDataState {
    files: File[];
    error: string;
};


const InitialState: CarouselDataState = {
    files: [],
    error: null
}


export const carouselReducer = (state: CarouselDataState = InitialState, action: CarouselAction) => {

    return produce(state, draft => {

        switch (action.type) {
            case CarouselMediaActionTypes.GET_CAROUSEL_DATA:
                draft.files = [];
                return draft;

            case CarouselMediaActionTypes.GET_CAROUSEL_DATA_SUCCESS:
                draft.files = [];
                action.payload.files.map(item => {
                    draft.files.push(item);
                });

                return draft;

            case CarouselMediaActionTypes.GET_CAROUSEL_DATA_ERROR:
                draft.error = action.payload.error;

                return draft;


            case CarouselMediaActionTypes.SAVE_CAROUSEL_DATA:

                return draft;

            case CarouselMediaActionTypes.SAVE_CAROUSEL_DATA_SUCCESS:
                action.payload.files.map(item => {
                    draft.files.unshift(item);
                });

                return draft;

            case CarouselMediaActionTypes.SAVE_CAROUSEL_DATA_ERROR:
                draft.error = action.payload.error;

                return draft;


            case CarouselMediaActionTypes.DELETE_CAROUSEL_DATA:

                return draft;

            case CarouselMediaActionTypes.DELETE_CAROUSEL_DATA_SUCCESS:

                draft.files.map((item, index) => {
                    if (item.fileId === action.payload.file.fileId) {
                        draft.files.splice(index, 1);
                    }
                });

                draft.error = null;

                return draft;

            case CarouselMediaActionTypes.DELETE_CAROUSEL_DATA_ERROR:

                draft.error = action.payload.error;

                return draft;

            default:
                return state;
        }
    });
};