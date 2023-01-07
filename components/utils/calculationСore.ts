import {ensure} from "../utils/ensureFunction"
import {ModelType} from "../../redux/slices/dataAutoParametersSlice";

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
    minAutoMargin
}:calculationCoreType) => {

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
            {  "РРЦ":retailValueStr,
                "Цена без доп.скидок":bezDopSkidok,
                "Маржа кузов":marginKuzov,
                "Цена с доп.скидокой":sDopSkidoy,
                "АВ":credit,
                "Общая выгода клиента":totalBenefit,
                "КМ": km,
                "Итоговая стоимость авто":autoCoast
            }    
    ) 
}