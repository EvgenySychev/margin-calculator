import {useAppSelector} from "../../redux/store";
import {ModelType} from "../../redux/slices/dataAutoParametersSlice";

export const AfterCalculationPanel = () => {

    const currentModel = useAppSelector(state => state.autoParameters.model)
    const currentConfiguration = useAppSelector(state => state.autoParameters.configuration)
    const finance = useAppSelector(state => state.financialParameters)
    const data = useAppSelector(state => state.dataAutoParameters)
    const tiresCheck = useAppSelector(state => state.calculationToggle.tiresCheck)
    const tiresMarginRatio = useAppSelector(state => state.coefficients.tiresMarginRatio)
    const tradeInMarginRatio = useAppSelector(state => state.coefficients.tradeInMarginRatio)
    const additionalEquipmentMarginRatio = useAppSelector(state => state.coefficients.additionalEquipmentMarginRatio)

    // @ts-ignore
    const model: ModelType = data.find(t => t.modelName == currentModel)
    const configuration = model.configuration.find(c => c.nameConfiguration === currentConfiguration)
    console.log(finance)

    const tiresRecognizer = (check:boolean, tires: number) => {
        if (check) {
            return tires = -Math.abs(tires);
        } else {
            return tires*tiresMarginRatio
        }
    }

    const retailValue = parseInt(configuration.retailValue)
    const entranceCost = parseInt(configuration.entranceCost)
    const discount = parseInt(finance.discount)
    const discountTradeIn = parseInt(configuration.discountTradeIn)
    const refundTradeIn = parseInt(configuration.refundTradeIn)
    const additionalEquipment = parseInt(finance.additionalEquipment)
    const tradeIn = parseInt(finance.tradeIn) * tradeInMarginRatio
    const credit = parseInt(finance.credit)
    const tires = tiresRecognizer(tiresCheck,parseInt(finance.tires))

    const marginKuzov = (retailValue - entranceCost - discount - discountTradeIn).toString()

    const bezDopSkidok = (retailValue - discountTradeIn).toString()

    const netPrice = (retailValue - discount - discountTradeIn).toString()

    const km = (parseInt(marginKuzov) + refundTradeIn + additionalEquipment * additionalEquipmentMarginRatio + tradeIn + credit + tires).toString()

    const autoCoast = (parseInt(netPrice) + additionalEquipment).toString()
    const totalBenefit = (discountTradeIn + discount).toString()


    return <div>
        <div style={{
            height: "30px",
            marginTop: "15px",
            textAlign: "right"
        }}>{configuration.retailValue}</div>
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
        <div style={{height: "30px", marginTop: "15px", textAlign: "right"}}>{km}</div>
        <div style={{
            height: "30px",
            marginTop: "15px",
            textAlign: "right"
        }}>{autoCoast}</div>
    </div>
}