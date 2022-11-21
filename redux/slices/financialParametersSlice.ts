import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type financialParametersState = {
    credit: string;
    tires: string;
    additionalEquipment: string;
    tradeIn: string;
    discount: string;
}

const initialState: financialParametersState = {
    credit: '',
    tires: '',
    additionalEquipment: '',
    tradeIn: '',
    discount: '',
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
    },
});

export const getParametersState = (state: { financialParameters: financialParametersState }) => state.financialParameters;

export const {
    setParameters,
} = financialParametersSlice.actions;

export default financialParametersSlice.reducer;