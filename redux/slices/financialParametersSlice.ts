import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type financialParametersState = {
    credit: string;
    tires: string;
    additionalEquipment: string;
    tradeIn: string;
    discount: string;
}

const initialState: financialParametersState = {
    credit: '0',
    tires: '0',
    additionalEquipment: '0',
    tradeIn: '0',
    discount: '0',
} as const;

export const financialParametersSlice = createSlice({
    name: 'financialParameters',
    initialState,
    reducers: {
        setParameters: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.credit = action.payload.credit;
            state.tires = action.payload.tires;
            state.additionalEquipment = action.payload.additionalEquipment;
            state.tradeIn = action.payload.tradeIn;
            state.discount = action.payload.discount;
        },
    },
});

export const getParametersState = (state: { financialParameters: financialParametersState }) => state.financialParameters;

export const {
    setParameters,
} = financialParametersSlice.actions;

export default financialParametersSlice.reducer;