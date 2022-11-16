import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export type autoParametersState = {
    model: string
    configuration: string;
    reportStatus: "yellow" | "grey" | "white";
    buyer: "individual" | "legalEntity"
}

const initialState: autoParametersState = {
    model: '',
    configuration: '',
    reportStatus: "white",
    buyer: "individual",
} as const;

export const autoParametersSlice = createSlice({
    name: 'autoParameters',
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

export const getParametersState = (state: { autoParameters: autoParametersState }) => state.autoParameters;

export const {
    setModel,
    setConfiguration,
    setReportStatus,
    setBuyer
} = autoParametersSlice.actions;

export default autoParametersSlice.reducer;