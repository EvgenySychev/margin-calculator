import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type calculationToggleState = {
    toggle: boolean
    modelWasSelected: boolean
    tiresCheck:boolean
    tradeInCheck:boolean
    paymentMethod: 'leasing' | 'cash'
    leasingCompanyWasSelected:boolean
}

const initialState: calculationToggleState = {
    toggle: false,
    modelWasSelected: false,
    tiresCheck:false,
    tradeInCheck:false,
    paymentMethod:'cash',
    leasingCompanyWasSelected: true


} as const;

export const calculationToggleSlice = createSlice({
    name: 'calculationToggle',
    initialState,
    reducers: {
        setCalculate: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.toggle>
        ) => {
            state.toggle = action.payload;
        },
        setModelWasSelected: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.modelWasSelected>
        ) => {
            state.modelWasSelected = action.payload;
        },
        setLeasingCompanyWasSelected: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.leasingCompanyWasSelected>
        ) => {
            state.leasingCompanyWasSelected = action.payload;
        },
        setTiresCheck: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.tiresCheck>
        ) => {
            state.tiresCheck = action.payload;
        },
        setTradeInCheck: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.tradeInCheck>
        ) => {
            state.tradeInCheck = action.payload;
        },
        setPaymentMethod: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.paymentMethod>
        ) => {
            state.paymentMethod = action.payload;
        },
    },
});

export const getParametersState = (state: { calculationToggle: calculationToggleState }) => state.calculationToggle;

export const {
    setCalculate,
    setModelWasSelected,
    setTiresCheck,
    setTradeInCheck,
    setPaymentMethod,
    setLeasingCompanyWasSelected
} = calculationToggleSlice.actions;

export default calculationToggleSlice.reducer;