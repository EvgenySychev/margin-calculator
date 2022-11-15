import {configureStore} from '@reduxjs/toolkit';
import financialParametersSlice from "./slices/financialParametersSlice";
import autoParametersSlice from './slices/autoParametersSlice'
import {
    useDispatch as useDispatchBase,
    useSelector as useSelectorBase,
} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper'

export function makeStore() {
    return configureStore({
        reducer: {
            autoParameters: autoParametersSlice,
            financialParameters: financialParametersSlice,
        },
    });
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>;
export type AppRootStateType = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useDispatchBase<AppDispatch>();
export const useSelector = <TSelected = unknown>(
    selector: (state: AppRootStateType) => TSelected
): TSelected => useSelectorBase<AppRootStateType, TSelected>(selector);

export const wrapper = createWrapper<RootStore>(makeStore)
