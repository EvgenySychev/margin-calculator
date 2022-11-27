import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type calculationToggleState = {
    toggle: boolean
    modelWasSelected: boolean
    tiresCheck:boolean
}

const initialState: calculationToggleState = {
    toggle: false,
    modelWasSelected: false,
    tiresCheck:false
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
        setTiresCheck: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.tiresCheck>
        ) => {
            state.tiresCheck = action.payload;
        },
    },
});

export const getParametersState = (state: { calculationToggle: calculationToggleState }) => state.calculationToggle;

export const {
    setCalculate,
    setModelWasSelected,
    setTiresCheck,
} = calculationToggleSlice.actions;

export default calculationToggleSlice.reducer;