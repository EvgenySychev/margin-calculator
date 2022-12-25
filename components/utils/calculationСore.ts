
type calculationCoreType = {

    tiresMarginRatio: number
    tradeInMarginRatio: number
    retailValue: string
    entranceCost: string
    discount: string
    tradeInCheck: boolean
    tiresCheck: boolean
    discountTradeIn: string
    importerDiscount: string
    refundTradeIn: string
    additionalEquipment: string;
    tradeIn: string;
    credit: string;
    tires: string;
    refundDealer: string
    additionalEquipmentMarginRatio: number
}

export const calculationCore = ({
    tiresMarginRatio,
    tradeInMarginRatio,
    retailValue,
    entranceCost,
    discount,
    tradeInCheck,
    tiresCheck,
    discountTradeIn,
    importerDiscount,
    refundTradeIn,
    additionalEquipment,
    tradeIn,
    credit,
    tires,
    refundDealer,
    additionalEquipmentMarginRatio

}: calculationCoreType) => {

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


    return {
        "РРЦ":retailValueStr,
        "Цена без доп.скидок":bezDopSkidok,
        "Маржа кузов":marginKuzov,
        "Цена с доп.скидокой":sDopSkidoy,
        "АВ":credit,
        "Общая выгода клиента":totalBenefit,
        "КМ": km,
        "Итоговая стоимость авто":autoCoast
    }
}