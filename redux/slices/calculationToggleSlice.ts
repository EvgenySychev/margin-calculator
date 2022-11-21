import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type calculationToggleState = {
    toggle: boolean
}

const initialState: calculationToggleState = {
    toggle: false,
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
    },
});

export const getParametersState = (state: { calculationToggle: calculationToggleState }) => state.calculationToggle;

export const {
    setCalculate,
} = calculationToggleSlice.actions;

export default calculationToggleSlice.reducer;