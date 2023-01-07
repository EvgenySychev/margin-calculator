import {useAppSelector, useAppDispatch} from "../../redux/store";
import {ensure} from "../utils/ensureFunction"
import {ModelType} from "../../redux/slices/dataAutoParametersSlice";
import {setCalculateResult} from "../../redux/slices/calculationResultSlice";

export const calculationCore = () => {

    const dispatch = useAppDispatch()
    const calculate = useAppSelector(state => state.calculationToggle.toggle)

    const toTiresRecognize = (check: boolean, tires: number) => {
        if (check) {
            return -Math.abs(tires);
        } else {
            return tires * tiresMarginRatio
        }
    }
    const toTradeInRecognize = (check: boolean, tradeInDiscount: number, importerDiscount: number) => {
        if (check) {
            return tradeInDiscount;
        } else {
            return importerDiscount
        }
    }
    const toTradeInRefundRecognize = (check: boolean, refundTradeIn: number) => {
        if (check) {
            return refundTradeIn;
        } else {
            return 0
        }
    }
    const toTradeInMarginRefundRecognize = (check: boolean, TradeInMargin: number) => {
        if (check) {
            return TradeInMargin * tradeInMarginRatio;
        } else {
            return 0
        }
    }
   

    // const currentModel = useAppSelector(state => state.autoParameters.model)
    // const currentConfiguration = useAppSelector(state => state.autoParameters.configuration)
    // const finance = useAppSelector(state => state.financialParameters)
    // const dataAutoParameters = useAppSelector(state => state.dataAutoParameters)
    // const tiresCheck = useAppSelector(state => state.calculationToggle.tiresCheck)
    // const tradeInCheck = useAppSelector(state => state.calculationToggle.tradeInCheck)
    // const tiresMarginRatio = useAppSelector(state => state.coefficients.tiresMarginRatio)
    // const tradeInMarginRatio = useAppSelector(state => state.coefficients.tradeInMarginRatio)
    // const additionalEquipmentMarginRatio = useAppSelector(state => state.coefficients.additionalEquipmentMarginRatio)
    // const minAutoMargin = useAppSelector(state => state.coefficients.minAutoMargin)

    const currentModel = '7PRO'
    const currentConfiguration = 'Prestige'
    const finance = {
        credit: '0',
        tires: '0',
        additionalEquipment: '0',
        tradeIn: '0',
        discount: '0',
    } 
    const dataAutoParameters = [{
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
                discountDealer: '100000',
                refundDealer: '100000',
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
                discountDealer: '100000',
                refundDealer: '100000',
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
                discountDealer: '200000',
                refundDealer: '200000',
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
                discountDealer: '200000',
                refundDealer: '200000',
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
                discountDealer: '200000',
                refundDealer: '200000',
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
                discountDealer: '200000',
                refundDealer: '200000',
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
                discountDealer: '200000',
                refundDealer: '200000',
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
                discountDealer: '200000',
                refundDealer: '200000',
            },
        ]
    }]
    const tiresCheck = false
    const tradeInCheck = false
    const tiresMarginRatio = 0.3
    const tradeInMarginRatio = 0.1
    const additionalEquipmentMarginRatio = 0.65


    const model = ensure<ModelType>(dataAutoParameters.find(t => t.modelName === currentModel))
    const configuration =ensure(model.configuration.find(c => c.nameConfiguration === currentConfiguration))
    
    const retailValue = configuration.retailValue
    const entranceCost = configuration.entranceCost
    const discount = finance.discount
    const discountTradeIn = configuration.discountTradeIn
    const importerDiscount = configuration.importerDiscount
    const refundTradeIn = configuration.refundTradeIn
    const additionalEquipment = finance.additionalEquipment
    const tradeIn = finance.tradeIn
    const credit = finance.credit
    const tires = finance.tires
    const refundDealer = configuration.refundDealer

    const retailValueInt = parseInt(retailValue)
    const entranceCostInt = parseInt(entranceCost)
    const discountInt = parseInt(discount)
    const discountTradeInInt = toTradeInRecognize(tradeInCheck, parseInt(discountTradeIn), parseInt(importerDiscount))
    const refundTradeInInt = toTradeInRefundRecognize(tradeInCheck, parseInt(refundTradeIn))
    const additionalEquipmentInt = parseInt(additionalEquipment)
    const tradeInInt = toTradeInMarginRefundRecognize(tradeInCheck, parseInt(tradeIn))
    const creditInt = parseInt(credit)
    const tiresInt = toTiresRecognize(tiresCheck, parseInt(tires))
    const refundDealerInt = parseInt(refundDealer)

    const marginKuzov = (retailValueInt - entranceCostInt - discountInt - discountTradeInInt).toString() + ' ₽'
    const bezDopSkidok = (retailValueInt - discountTradeInInt).toString() + ' ₽'
    const sDopSkidoy = (parseInt(bezDopSkidok)-discountInt) + ' ₽'
    const netPrice = (retailValueInt - discountInt - discountTradeInInt).toString() + ' ₽'
    const km = (parseInt(marginKuzov) + refundTradeIn + additionalEquipmentInt * additionalEquipmentMarginRatio + tradeInInt + creditInt + tiresInt + refundDealerInt).toString() + ' ₽'
    const autoCoast = (parseInt(netPrice) + additionalEquipment).toString() + ' ₽'
    const totalBenefit = (discountTradeIn + discount).toString() + ' ₽'
    const retailValueStr = retailValue + ' ₽'


    return (
        calculate 
            ? {
                "РРЦ":retailValueStr,
                "Цена без доп.скидок":bezDopSkidok,
                "Маржа кузов":marginKuzov,
                "Цена с доп.скидокой":sDopSkidoy,
                "АВ":credit,
                "Общая выгода клиента":totalBenefit,
                "КМ": km,
                "Итоговая стоимость авто":autoCoast
            }
            : {"":"Нажмите кнопку рассчитать"}
    
    ) 
}

//dispatch(setCalculateResult ())