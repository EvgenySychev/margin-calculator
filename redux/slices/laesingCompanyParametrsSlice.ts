import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type leasingCompanyParametrsState = {
    name: string
    percent: string;
}

const initialState: leasingCompanyParametrsState = {
    name: '',
    percent: "2.5",
} as const;

export const leasingCompanyParametrsSlice = createSlice({
    name: 'leasingCompanyParametrs',
    initialState,
    reducers: {
        setLeasingCompany: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.name>
        ) => {
            state.name = action.payload;
        },
        setPercent: (
                state: Draft<typeof initialState>,
                action: PayloadAction<typeof initialState.percent>
            ) => {
                state.percent = action.payload;
            },
    },
});

export const getParametersState = (state: { leasingCompanyParametrs: leasingCompanyParametrsState }) => state.leasingCompanyParametrs;

export const {
    setLeasingCompany,
    setPercent,
    
} = leasingCompanyParametrsSlice.actions;

export default leasingCompanyParametrsSlice.reducer;