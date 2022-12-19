import { createSlice } from '@reduxjs/toolkit';

export type LeasingCompanyType = {
    id: number
    nameLeasingCompany: string
    discountPercentage: number
}

export type AmountAgencyRemunerationType = {
    id: number
    percent: number
}

export type DataModelType = {
    leasingCompany: LeasingCompanyType[],
    percent: string[]
}

const initialState: DataModelType = {
    leasingCompany: [
        {
            id: 0,
            nameLeasingCompany: '',
            discountPercentage: 0,
        },
        {
            id: 1,
            nameLeasingCompany: 'Газпром лизинг',
            discountPercentage: 16.5,
        },
        {
            id: 2,
            nameLeasingCompany: 'Каркаде',
            discountPercentage: 15.0,
        },
        {
            id: 3,
            nameLeasingCompany: 'РЕСО-Лизинг',
            discountPercentage: 16.0,
        },
        {
            id: 4,
            nameLeasingCompany: 'Балтийский лизинг',
            discountPercentage: 16.0,
        },
        {
            id: 5,
            nameLeasingCompany: 'Европлан',
            discountPercentage: 16.0,
        },
        {
            id: 6,
            nameLeasingCompany: 'УралБизнесЛизинг',
            discountPercentage: 15,
        },
        {
            id: 7,
            nameLeasingCompany: 'Сбербанк лизинг',
            discountPercentage: 15,
        },
        {
            id: 8,
            nameLeasingCompany: 'Альфа-Лизинг',
            discountPercentage: 15,
        },
    ],
    percent: ['0.0' ,' 0.5' , '1.0' , '1.5' , '2.0' , '2.5' , '3.0']
}
    ;

export const dataLeasingCompanyParametersSlice = createSlice({
    name: 'dataLeasingCompanyParameters',
    initialState,
    reducers: {},
});

export const getParametersState = (state: { dataLeasingCompanyParameters: DataModelType }) => state.dataLeasingCompanyParameters;

export const { } = dataLeasingCompanyParametersSlice.actions;

export default dataLeasingCompanyParametersSlice.reducer;