import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type calculationResultState = {
    result: {}
}

const initialState: calculationResultState = {
    result: {}
} as const;

export const calculationResultSlice = createSlice({
    name: 'calculationResult',
    initialState,
    reducers: {
        setCalculateResult: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.result>
        ) => {
            state.result = action.payload;
        },
    }
});

export const getParametersState = (state: { calculationResult: calculationResultState }) => state.calculationResult;

export const {
    setCalculateResult,
} = calculationResultSlice.actions;

export default calculationResultSlice.reducer;