import {createSlice} from '@reduxjs/toolkit';

export type ConfigurationType = {
    id: number
    nameConfiguration: string
    retailValue: string
    entranceCost: string
    discountTradeIn:string
    refundTradeIn:string
    discountTires:string
    discountEquipment:string
    discountDealer:string
    refundDealer:string
}

export type ModelType = {
    id: number
    modelName: string
    configuration: ConfigurationType[]
}

export type DataModelType = ModelType[]

const initialState: DataModelType = [
    {
        id: 1,
        modelName: '4PRO',
        configuration: [
            {
                id: 1,
                nameConfiguration: 'Travel',
                retailValue: '2339900',
                entranceCost: '2049900',
                discountTradeIn:'220000',
                refundTradeIn:'50000',
                discountTires:'40000',
                discountEquipment:'50000',
                discountDealer:'100000',
                refundDealer:'100000',
            },
            {
                id: 2,
                nameConfiguration: 'Stile',
                retailValue: '2399900',
                entranceCost: '2109900',
                discountTradeIn:'220000',
                refundTradeIn:'50000',
                discountTires:'40000',
                discountEquipment:'50000',
                discountDealer:'100000',
                refundDealer:'100000',
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
                discountTradeIn:'320000',
                refundTradeIn:'60000',
                discountTires:'50000',
                discountEquipment:'50000',
                discountDealer:'200000',
                refundDealer:'200000',
            },
            {
                id: 2,
                nameConfiguration: 'Prestige',
                retailValue: '2779900',
                entranceCost: '2379900',
                discountTradeIn:'320000',
                refundTradeIn:'60000',
                discountTires:'50000',
                discountEquipment:'50000',
                discountDealer:'200000',
                refundDealer:'200000',
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
                discountTradeIn:'510000',
                refundTradeIn:'110000',
                discountTires:'50000',
                discountEquipment:'50000',
                discountDealer:'200000',
                refundDealer:'200000',
            },
            {
                id: 2,
                nameConfiguration: 'Ultimate',
                retailValue: '3589900',
                entranceCost: '3035900',
                discountTradeIn:'510000',
                refundTradeIn:'110000',
                discountTires:'50000',
                discountEquipment:'50000',
                discountDealer:'200000',
                refundDealer:'200000',
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
                discountTradeIn:'370000',
                refundTradeIn:'40000',
                discountTires:'50000',
                discountEquipment:'50000',
                discountDealer:'200000',
                refundDealer:'200000',
            },
            {
                id: 2,
                nameConfiguration: 'Ultimate',
                retailValue: '4190900',
                entranceCost: '3640900',
                discountTradeIn:'430000',
                refundTradeIn:'80000',
                discountTires:'50000',
                discountEquipment:'50000',
                discountDealer:'200000',
                refundDealer:'200000',
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