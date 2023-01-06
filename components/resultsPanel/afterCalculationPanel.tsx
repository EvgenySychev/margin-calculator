
import {useAppSelector} from "../../redux/store";
import {ModelType} from "../../redux/slices/dataAutoParametersSlice";
import {ensure} from "../utils/ensureFunction"

type AfterCalculationPanelPropsType = {
    callback: (km: string) => void
}

export const AfterCalculationPanel = ({callback}: AfterCalculationPanelPropsType) => {

    const currentModel = useAppSelector(state => state.autoParameters.model)
    const currentConfiguration = useAppSelector(state => state.autoParameters.configuration)
    const finance = useAppSelector(state => state.financialParameters)
    const data = useAppSelector(state => state.dataAutoParameters)
    const tiresCheck = useAppSelector(state => state.calculationToggle.tiresCheck)
    const tradeInCheck = useAppSelector(state => state.calculationToggle.tradeInCheck)
    const tiresMarginRatio = useAppSelector(state => state.coefficients.tiresMarginRatio)
    const tradeInMarginRatio = useAppSelector(state => state.coefficients.tradeInMarginRatio)
    const additionalEquipmentMarginRatio = useAppSelector(state => state.coefficients.additionalEquipmentMarginRatio)
    const minAutoMargin = useAppSelector(state => state.coefficients.minAutoMargin)

    const model: ModelType = ensure(data.find(t => t.modelName == currentModel))
    const configuration = ensure(model.configuration.find(c => c.nameConfiguration === currentConfiguration))

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

    const toKmParameterSend = (km:string) => {
        callback(km)
    }

    const retailValue = parseInt(configuration.retailValue) 
    const entranceCost = parseInt(configuration.entranceCost)
    const discount = parseInt(finance.discount)
    const discountTradeIn = toTradeInRecognize(tradeInCheck, parseInt(configuration.discountTradeIn), parseInt(configuration.importerDiscount))
    const refundTradeIn = toTradeInRefundRecognize(tradeInCheck, parseInt(configuration.refundTradeIn))
    const additionalEquipment = parseInt(finance.additionalEquipment)
    const tradeIn = toTradeInMarginRefundRecognize(tradeInCheck, parseInt(finance.tradeIn))
    const credit = parseInt(finance.credit)
    const tires = toTiresRecognize(tiresCheck, parseInt(finance.tires))
    const refundDealer = parseInt(configuration.refundDealer)

    const marginKuzov = (retailValue - entranceCost - discount - discountTradeIn).toString() + ' ₽'
    const bezDopSkidok = (retailValue - discountTradeIn).toString()  + ' ₽'
    const netPrice = (retailValue - discount - discountTradeIn).toString()  + ' ₽'
    const km = (parseInt(marginKuzov) + refundTradeIn + additionalEquipment * additionalEquipmentMarginRatio + tradeIn + credit + tires + refundDealer).toString()  + ' ₽'
    const autoCoast = (parseInt(netPrice) + additionalEquipment).toString() + ' ₽'
    const totalBenefit = (discountTradeIn + discount).toString() + ' ₽'
    const retailValueStr = retailValue + ' ₽'

    toKmParameterSend(km)

    return <div>
        <div style={{
            height: "30px",
            marginTop: "15px",
            textAlign: "right"
        }}>{retailValueStr}</div>
        <div style={{
            height: "30px",
            marginTop: "15px",
            textAlign: "right"
        }}>{bezDopSkidok}</div>
        <div style={{
            height: "30px",
            marginTop: "15px",
            textAlign: "right"
        }}>{marginKuzov}</div>
        <div style={{
            height: "30px",
            marginTop: "15px",
            textAlign: "right"
        }}>{netPrice}</div>
        <div style={{
            height: "30px",
            marginTop: "15px",
            textAlign: "right"
        }}>{totalBenefit}</div>
        <div style={parseInt(km) < minAutoMargin
            ? {height: "30px", marginTop: "15px", textAlign: "right", color: "red"}
            : {height: "30px", marginTop: "15px", textAlign: "right"}}>{km}

        </div>
        <div style={{
            height: "30px",
            marginTop: "15px",
            textAlign: "right", 
            width: "150px"
        }}>{autoCoast}</div>
    </div>
}