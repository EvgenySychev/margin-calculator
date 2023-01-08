import {createSlice} from '@reduxjs/toolkit';

export type ConfigurationType = {
    id: number
    nameConfiguration: string
    retailValue: string
    entranceCost: string
    importerDiscount:string
    discountTradeIn: string
    refundTradeIn: string
    discountTires: string
    discountEquipment: string
    discountDealer: string
    refundDealer: string
    discountLeasing: string 
}

export type ModelType = {
    id: number
    modelName: string
    configuration: ConfigurationType[]
}

export type DataModelType = ModelType[]

const initialState: DataModelType = [
    {
        id: 0,
        modelName: '',
        configuration: [
            {
                id: 0,
                nameConfiguration: '',
                retailValue: '0',
                entranceCost: '0',
                importerDiscount: '0',
                discountTradeIn: '0',
                refundTradeIn: '0',
                discountTires: '0',
                discountEquipment: '0',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '0'
            }]
    },
    {
        id: 1,
        modelName: '4PRO',
        configuration: [
            {
                id: 1,
                nameConfiguration: 'Travel',
                retailValue: '2339900',
                entranceCost: '2049900',
                importerDiscount: '170000',
                discountTradeIn: '220000',
                refundTradeIn: '50000',
                discountTires: '40000',
                discountEquipment: '50000',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '15'
            },
            {
                id: 2,
                nameConfiguration: 'Stile',
                retailValue: '2399900',
                entranceCost: '2109900',
                importerDiscount: '170000',
                discountTradeIn: '220000',
                refundTradeIn: '50000',
                discountTires: '40000',
                discountEquipment: '50000',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '15'
            },
        ]
    },
    {
        id: 2,
        modelName: '7PRO',
        configuration: [
            {
                id: 1,
                nameConfiguration: 'Elite',
                retailValue: '2649900',
                entranceCost: '2249900',
                importerDiscount: '240000',
                discountTradeIn: '320000',
                refundTradeIn: '60000',
                discountTires: '50000',
                discountEquipment: '50000',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '22'
            },
            {
                id: 2,
                nameConfiguration: 'Prestige',
                retailValue: '2779900',
                entranceCost: '2399900',
                importerDiscount: '240000',
                discountTradeIn: '320000',
                refundTradeIn: '60000',
                discountTires: '50000',
                discountEquipment: '50000',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '22'
            },
        ]
    },
    {
        id: 3,
        modelName: '8PRO',
        configuration: [
            {
                id: 1,
                nameConfiguration: 'Dreamline',
                retailValue: '3469900',
                entranceCost: '2915900',
                importerDiscount: '350000',
                discountTradeIn: '510000',
                refundTradeIn: '110000',
                discountTires: '50000',
                discountEquipment: '50000',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '23'
            },
            {
                id: 2,
                nameConfiguration: 'Ultimate',
                retailValue: '3589900',
                entranceCost: '3035900',
                importerDiscount: '350000',
                discountTradeIn: '510000',
                refundTradeIn: '110000',
                discountTires: '50000',
                discountEquipment: '50000',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '23'
            },
        ]
    },
    {
        id: 4,
        modelName: '8PRO-MAX',
        configuration: [
            {
                id: 1,
                nameConfiguration: 'Dreamline',
                retailValue: '3890900',
                entranceCost: '3360900',
                importerDiscount: '280000',
                discountTradeIn: '580000',
                refundTradeIn: '180000',
                discountTires: '50000',
                discountEquipment: '50000',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '23'
            },
            {
                id: 2,
                nameConfiguration: 'Ultimate',
                retailValue: '4190900',
                entranceCost: '3640900',
                importerDiscount: '300000',
                discountTradeIn: '580000',
                refundTradeIn: '180000',
                discountTires: '50000',
                discountEquipment: '50000',
                discountDealer: '0',
                refundDealer: '0',
                discountLeasing: '23'
            },
        ]
    }

];

export const dataAutoParametersSlice = createSlice({
    name: 'dataAutoParameters',
    initialState,
    reducers: {},
});

export const getParametersState = (state: { dataAutoParameters: DataModelType }) => state.dataAutoParameters;

export const {} = dataAutoParametersSlice.actions;

export default dataAutoParametersSlice.reducer;