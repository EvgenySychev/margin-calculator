import {ensure} from "../utils/ensureFunction"
import {ModelType} from "../../redux/slices/dataAutoParametersSlice";
import {paymentMethodType} from "../paymentMethod/PaymentMethod"

type calculationCoreType = {
    currentModel: string
    currentConfiguration: string
    finance: any
    dataAutoParameters:any
    tiresCheck: boolean
    tradeInCheck: boolean
    tiresMarginRatio: number
    tradeInMarginRatio: number
    additionalEquipmentMarginRatio: number
    minAutoMargin:number
    paymentMethod: paymentMethodType
    percentAB:string
}

export const calculationCore = ({
    currentModel,
    currentConfiguration,
    finance,
    dataAutoParameters,
    tiresCheck,
    tradeInCheck,
    tiresMarginRatio,
    tradeInMarginRatio,
    additionalEquipmentMarginRatio,
    minAutoMargin,
    paymentMethod,
    percentAB
}:calculationCoreType) => {

    const toTiresKmRecognize = (check: boolean, tires: number) => {
        if (check) {
            return -Math.abs(tires);
        } else {
            return tires * tiresMarginRatio
        }
    }
    const toTiresRecognize = (check: boolean, tires: number) => {
        if (!check) {
            return Math.abs(tires);
        } else {
            return 0
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
    const discountLeasing = configuration.discountLeasing

    const retailValueInt = Number(retailValue)
    const entranceCostInt = Number(entranceCost)
    const discountInt = Number(discount)
    const discountTradeInInt = toTradeInRecognize(tradeInCheck, Number(discountTradeIn), Number(importerDiscount))
    const refundTradeInInt = toTradeInRefundRecognize(tradeInCheck, Number(refundTradeIn))
    const additionalEquipmentInt = Number(additionalEquipment)
    const tradeInInt = toTradeInMarginRefundRecognize(tradeInCheck, Number(tradeIn))
    const creditInt = Number(credit)
    const tiresKmInt = toTiresKmRecognize(tiresCheck, Number(tires))
    const tiresInt = toTiresRecognize(tiresCheck, Number(tires))
    const refundDealerInt = Number(refundDealer)
    const percentABInt = Number(percentAB)/100
    const discountLeasingInt = Number(discountLeasing)/100

    const marginKuzov:number = (retailValueInt - entranceCostInt - discountInt - discountTradeInInt)
    const bezDopSkidok:number = (retailValueInt - discountTradeInInt)
    const sDopSkidoy:number = (bezDopSkidok-discountInt)
    const netPrice:number = (retailValueInt - discountInt - discountTradeInInt)
    const km:number= (marginKuzov + refundTradeInInt + additionalEquipmentInt * additionalEquipmentMarginRatio + 
        tradeInInt + creditInt + tiresKmInt + refundDealerInt)
    const autoCoast:number = (netPrice + additionalEquipmentInt + tiresInt)
    const totalBenefit:number = (discountTradeInInt + discountInt)

    const retailLeasingValueInt = retailValueInt - retailValueInt*discountLeasingInt
    const entranceLeasingCostInt = retailValueInt -  retailValueInt*(discountLeasingInt+0.02)
    const marginKuzovLeasing = retailLeasingValueInt - entranceLeasingCostInt-discountInt
    const kmLeasing = (marginKuzovLeasing + additionalEquipmentInt * additionalEquipmentMarginRatio 
        + tiresKmInt +  retailLeasingValueInt*percentABInt)
    const totalBenefitLeasing = retailValueInt*discountLeasingInt + discountInt
    const sDopSkidoyLeasing = retailLeasingValueInt - discountInt
    const autoCoastLeasing = retailLeasingValueInt + additionalEquipmentInt + tiresInt - discountInt


    return ( paymentMethod === 'cash'
        ?
            {  "РРЦ":retailValueInt,
                "Цена без доп.скидок":bezDopSkidok,
                "Маржа кузов":marginKuzov,
                "Цена с доп.скидокой":sDopSkidoy,
                "АВ":creditInt,
                "Общая выгода клиента":totalBenefit,
                "КМ": km,
                "Итоговая стоимость авто":autoCoast
            } 
        :   {  "РРЦ":retailValueInt,
            "Цена без доп.скидок":retailLeasingValueInt,
            "Маржа кузов":marginKuzovLeasing,
            "Цена с доп.скидокой":sDopSkidoyLeasing,
            "АВ":retailLeasingValueInt*percentABInt,
            "Общая выгода клиента":totalBenefitLeasing,
            "КМ": kmLeasing,
            "Итоговая стоимость авто":autoCoastLeasing
        }   
    ) 
}