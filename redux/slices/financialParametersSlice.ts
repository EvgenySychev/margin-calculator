import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

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
    creditValue: '0',
    tires: false,
    tiresValue: '0',
    additionalEquipment: false,
    additionalEquipmentValue: '0',
    tradeIn: false,
    tradeInValue: '0',
    discount: false,
    discountValue: '0',
} as const;

export const financialParametersSlice = createSlice({
    name: 'financialParameters',
    initialState,
    reducers: {
        setFinancialParameters: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state = action.payload;
        },
    },
});

export const getParametersState = (state: { financialParameters: financialParametersState }) => state.financialParameters;

export const {
    setFinancialParameters,
} = financialParametersSlice.actions;

export default financialParametersSlice.reducer;