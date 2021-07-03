import { combineReducers } from 'redux';
import { userDataReducer } from './user-data';
import { userProfileReducer } from './user-profile';
import { galleryMediaDataReducer } from './gallery-media';
import { carouselReducer } from './carousel-data';

const reducers = combineReducers({
    profileData: userProfileReducer,
    userData: userDataReducer,
    galleryData: galleryMediaDataReducer,
    carouselData: carouselReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
