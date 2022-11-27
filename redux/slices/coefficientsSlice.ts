import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type coefficientsState = {
    tiresMarginRatio: number
    tradeInMarginRatio: number
    additionalEquipmentMarginRatio: number
}

const initialState: coefficientsState = {
    tiresMarginRatio: 0.3,
    tradeInMarginRatio: 0.1,
    additionalEquipmentMarginRatio: 0.65,
} as const;

export const coefficientsSlice = createSlice({
    name: 'coefficients',
    initialState,
    reducers: {
    },
});

export const getParametersState = (state: { coefficients: coefficientsState }) => state.coefficients;

export const {

} = coefficientsSlice.actions;

export default coefficientsSlice.reducer;