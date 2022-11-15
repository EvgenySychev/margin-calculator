import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export type financialParametersState = {
    credit: boolean;
    creditValue: string | null;
    tires: boolean;
    tiresValue: string | null;
    additionalEquipment: boolean;
    additionalEquipmentValue: string | null;
    tradeIn: boolean;
    tradeInValue: string | null;
    discount: boolean;
    discountValue: string | null;
}

const initialState: financialParametersState = {
    credit: false,
    creditValue: null,
    tires: false,
    tiresValue: null,
    additionalEquipment: false,
    additionalEquipmentValue: null,
    tradeIn: false,
    tradeInValue: null,
    discount: false,
    discountValue: null,
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