import {createSlice} from '@reduxjs/toolkit';

export type dataAdditionalEquipmentItemState = {
    id: string
    productName: string
    entranceCost: string
}

export type dataAdditionalEquipmentState = dataAdditionalEquipmentItemState[]

const initialState: dataAdditionalEquipmentState = [
    {
        id: '1',
        productName: 'Защита картера',
        entranceCost: '2500'
    },
    {
        id: '2',
        productName: 'Ковры салона',
        entranceCost: '2000'
    },
    {
        id: '3',
        productName: 'Ковер багажника',
        entranceCost: '3000'
    },
    {
        id: '4',
        productName: 'Брызговики',
        entranceCost: '3500'
    },
    {
        id: '5',
        productName: 'Защитная сетка радиатора',
        entranceCost: '1500'
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