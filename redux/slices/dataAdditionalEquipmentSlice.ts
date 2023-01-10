import {createSlice} from '@reduxjs/toolkit';

export type dataAdditionalEquipmentItemState = {
    id: string
    productName: string
    entranceCost: string
}

export type dataAdditionalEquipmentState = dataAdditionalEquipmentItemState[]

const initialState: dataAdditionalEquipmentState = [
    {
        id: '',
        productName: '',
        entranceCost: ''
    },
    {
        id: '',
        productName: '',
        entranceCost: ''
    }
]

export const dataAdditionalEquipmentSlice = createSlice({
    name: 'dataAdditionalEquipment',
    initialState,
    reducers: {},
});

export const getParametersState = (state: { dataAdditionalEquipment: dataAdditionalEquipmentState }) => state.dataAdditionalEquipment;

export const {} = dataAdditionalEquipmentSlice.actions;

export default dataAdditionalEquipmentSlice.reducer;