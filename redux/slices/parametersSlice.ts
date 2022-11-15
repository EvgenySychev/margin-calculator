import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export type ParametersState = {
    model: string|null;
    configuration: string|null;
    reportStatus: "yellow"|"grey"|"white";
    buyer: "individual" | "legalEntity"
}

const initialState: ParametersState = {
    model: null,
    configuration: null,
    reportStatus: "white",
    buyer: "individual",
} as const;

export const parametersSlice = createSlice({
    name: 'parameters',
    initialState,
    reducers: {
        setModel: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.model>
        ) => {
            state.model = action.payload;
        },
        setConfiguration: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.configuration>
        ) => {
            state.configuration = action.payload;
        },
        setReportStatus: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.reportStatus>
        ) => {
            state.reportStatus = action.payload;
        },
        setBuyer: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState.buyer>
        ) => {
            state.buyer = action.payload;
        },
    },
});

export const getParametersState = (state: { parameters: ParametersState }) => state.parameters;

export const { setModel, setConfiguration, setReportStatus, setBuyer } = parametersSlice.actions;

export default parametersSlice.reducer;