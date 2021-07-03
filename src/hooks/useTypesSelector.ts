import { createSelectorHook, TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../state';

export const useTypedSelector = createSelectorHook<RootState>();
// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;