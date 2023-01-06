import {configureStore} from '@reduxjs/toolkit';
import financialParametersSlice from "./slices/financialParametersSlice";
import autoParametersSlice from './slices/autoParametersSlice'
import dataAutoParametersSlice from "./slices/dataAutoParametersSlice";
import calculationToggleSlice from "./slices/calculationToggleSlice";
import coefficientsSlice from "./slices/coefficientsSlice";
import dataLeasingCompanyParametersSlice from './slices/dataLaesingCompanyParametersSlice';
import lasingCompanyParametersSlice from './slices/laesingCompanyParametrsSlice';
import {
    TypedUseSelectorHook,
    useDispatch as useDispatchBase,
    useSelector as useSelectorBase,
} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper'
import calculationResultSlice from "./slices/calculationResultSlice";


export function makeStore() {
    return configureStore({
        reducer: {
            autoParameters: autoParametersSlice,
            dataAutoParameters: dataAutoParametersSlice,
            financialParameters: financialParametersSlice,
            calculationToggle:calculationToggleSlice,
            coefficients:coefficientsSlice,
            dataLeasingCompanyParameters:dataLeasingCompanyParametersSlice,
            leasingCompanyParameters:lasingCompanyParametersSlice,
            calculationResult:calculationResultSlice
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

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
