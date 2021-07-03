import { useTypedSelector } from "./useTypesSelector"

export const useData = () => {

  return useTypedSelector(
    state => {
      return {
        ...state.userData,
        ...state.profileData,
        ...state.galleryData,
        loading: state.userData.loading || state.profileData.loading
      }
    }
  )

}