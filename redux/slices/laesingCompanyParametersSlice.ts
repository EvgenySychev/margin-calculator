import { createSlice } from '@reduxjs/toolkit';

export type LeasingCompanyType = {
    id: number
    nameLeasingCompany: string
    discountPercentage: number
    amountAgencyRemuneration: AmountAgencyRemunerationType[]
}

export type AmountAgencyRemunerationType = {
    id: number
    percent: number
}

export type DataModelType = LeasingCompanyType[]

const initialState: DataModelType = [
    {
        id: 0,
        nameLeasingCompany: '',
        discountPercentage: 0,
        amountAgencyRemuneration: [
            {
                id: 0,
                percent: 0
            }]
    },
    {
        id: 1,
        nameLeasingCompany: 'Газпром лизинг',
        discountPercentage: 16.5,
        amountAgencyRemuneration: [
            {
                id: 1,
                percent: 0.5
            },
            {
                id: 2,
                percent: 1.0
            },
            {
                id: 3,
                percent: 1.5
            },
            {
                id: 4,
                percent: 2.0
            },
            {
                id: 5,
                percent: 2.5
            },
        ]
    },
    {
        id: 2,
        nameLeasingCompany: 'Каркаде',
        discountPercentage: 15.0,
        amountAgencyRemuneration: [
            {
                id: 1,
                percent: 0.5
            },
            {
                id: 2,
                percent: 1.0
            },
            {
                id: 3,
                percent: 1.5
            },
            {
                id: 4,
                percent: 2.0
            },
            {
                id: 5,
                percent: 2.5
            },
        ]
    },
    {
        id: 3,
        nameLeasingCompany: 'РЕСО-Лизинг',
        discountPercentage: 16.0,
        amountAgencyRemuneration: [
            {
                id: 1,
                percent: 0.5
            },
            {
                id: 2,
                percent: 1.0
            },
            {
                id: 3,
                percent: 1.5
            },
            {
                id: 4,
                percent: 2.0
            },
            {
                id: 5,
                percent: 2.5
            },
        ]
    },
    {
        id: 4,
        nameLeasingCompany: 'Балтийский лизинг',
        discountPercentage: 16.0,
        amountAgencyRemuneration: [
            {
                id: 1,
                percent: 0.5
            },
            {
                id: 2,
                percent: 1.0
            },
            {
                id: 3,
                percent: 1.5
            },
            {
                id: 4,
                percent: 2.0
            },
            {
                id: 5,
                percent: 2.5
            },
        ]
    },
    {
        id: 5,
        nameLeasingCompany: 'Европлан',
        discountPercentage: 16.0,
        amountAgencyRemuneration: [
            {
                id: 1,
                percent: 0.5
            },
            {
                id: 2,
                percent: 1.0
            },
            {
                id: 3,
                percent: 1.5
            },
            {
                id: 4,
                percent: 2.0
            },
            {
                id: 5,
                percent: 2.5
            },
        ]
    },
    {
        id: 6,
        nameLeasingCompany: 'УралБизнесЛизинг',
        discountPercentage: 15,
        amountAgencyRemuneration: [
            {
                id: 1,
                percent: 0.5
            },
            {
                id: 2,
                percent: 1.0
            },
            {
                id: 3,
                percent: 1.5
            },
            {
                id: 4,
                percent: 2.0
            },
            {
                id: 5,
                percent: 2.5
            },
        ]
    },
    {
        id: 7,
        nameLeasingCompany: 'Сбербанк лизинг',
        discountPercentage: 15,
        amountAgencyRemuneration: [
            {
                id: 1,
                percent: 0.5
            },
            {
                id: 2,
                percent: 1.0
            },
            {
                id: 3,
                percent: 1.5
            },
            {
                id: 4,
                percent: 2.0
            },
            {
                id: 5,
                percent: 2.5
            },
        ]
    },
    {
        id: 8,
        nameLeasingCompany: 'Альфа-Лизинг',
        discountPercentage: 15,
        amountAgencyRemuneration: [
            {
                id: 1,
                percent: 0.5
            },
            {
                id: 2,
                percent: 1.0
            },
            {
                id: 3,
                percent: 1.5
            },
            {
                id: 4,
                percent: 2.0
            },
            {
                id: 5,
                percent: 2.5
            },
        ]
    },
];

export const leasingCompanyParametersSlice = createSlice({
    name: 'leasingCompanyParameters',
    initialState,
    reducers: {},
});

export const getParametersState = (state: { leasingCompanyParameters: DataModelType }) => state.leasingCompanyParameters;

export const { } = leasingCompanyParametersSlice.actions;

export default leasingCompanyParametersSlice.reducer;