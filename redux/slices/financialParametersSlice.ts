import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type financialParametersState = {
    credit: boolean;
    creditValue: string;
    tires: boolean;
    tiresValue: string;
    additionalEquipment: boolean;
    additionalEquipmentValue: string;
    tradeIn: boolean;
    tradeInValue: string;
    discount: boolean;
    discountValue: string;
}

const initialState: financialParametersState = {
    credit: false,
    creditValue: '',
    tires: false,
    tiresValue: '',
    additionalEquipment: false,
    additionalEquipmentValue: '',
    tradeIn: false,
    tradeInValue: '',
    discount: false,
    discountValue: '',
} as const;

export const financialParametersSlice = createSlice({
    name: 'financialParameters',
    initialState,
    reducers: {
        setParameters: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state = action.payload;
        },
        setCredit: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.credit>
        ) => {
            state.credit = action.payload;
        },
        setTires: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.tires>
        ) => {
            state.tires = action.payload;
        },
        setAdditionalEquipment: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.additionalEquipment>
        ) => {
            state.additionalEquipment = action.payload;
        },
        setTradeIn: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.tradeIn>
        ) => {
            state.tradeIn = action.payload;
        },
        setDiscount: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.discount>
        ) => {
            state.discount = action.payload;
        },
        setCreditValue: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.creditValue>
        ) => {
            state.creditValue = action.payload;
        },
        setTiresValue: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.tiresValue>
        ) => {
            state.tiresValue = action.payload;
        },
        setAdditionalEquipmentValue: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.additionalEquipmentValue>
        ) => {
            state.additionalEquipmentValue = action.payload;
        },
        setTradeInValue: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.tradeInValue>
        ) => {
            state.tradeInValue = action.payload;
        },
        setDiscountValue: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.discountValue>
        ) => {
            state.discountValue = action.payload;
        },
    },
});

export const getParametersState = (state: { financialParameters: financialParametersState }) => state.financialParameters;

export const {
    setParameters,
    setCredit,
    setTires,
    setAdditionalEquipment,
    setTradeIn,
    setDiscount,
    setCreditValue,
    setTiresValue,
    setAdditionalEquipmentValue,
    setTradeInValue,
    setDiscountValue
} = financialParametersSlice.actions;

export default financialParametersSlice.reducer;