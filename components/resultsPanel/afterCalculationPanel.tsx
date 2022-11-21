import {useAppSelector} from "../../redux/store";
import {ModelType} from "../../redux/slices/dataAutoParametersSlice";

type AfterCalculationPanelType = {
    value: string
}

export const AfterCalculationPanel = () => {

    const currentModel = useAppSelector(state => state.autoParameters.model)
    const currentConfiguration = useAppSelector(state => state.autoParameters.configuration)
    const finance = useAppSelector(state => state.financialParameters)

    const data = useAppSelector(state => state.dataAutoParameters)

    // @ts-ignore
    const model: ModelType = data.find(t => t.modelName == currentModel)
    const configuration = model.configuration.find(c => c.nameConfiguration === currentConfiguration)
    console.log(finance)

    const marginKuzov = (parseInt(configuration.retailValue) - parseInt(configuration.entranceCost) - parseInt(finance.discount) - parseInt(configuration.discountTradeIn)).toString()

    const bezDopSkidok = (parseInt(configuration.retailValue) - parseInt(configuration.discountTradeIn)).toString()

    const netPrice = (parseInt(configuration.retailValue) - parseInt(finance.discount) - parseInt(configuration.discountTradeIn)).toString()

    const km = (parseInt(marginKuzov) + parseInt(configuration.refundTradeIn) + parseInt(finance.additionalEquipment)*0.65 + parseInt(finance.tradeIn)*0.1 + parseInt(finance.credit) - parseInt(finance.tires) ).toString()

    const autoCoast = (parseInt(netPrice) + parseInt(finance.additionalEquipment)).toString()


    return <div>
        <div style={{height:"30px", marginTop: "15px"}}>{configuration.retailValue}</div>
        <div style={{height:"30px", marginTop: "15px"}}>{bezDopSkidok}</div>
        <div style={{height:"30px", marginTop: "15px"}}>{marginKuzov}</div>
        <div style={{height:"30px", marginTop: "15px"}}>{netPrice}</div>
        <div style={{height:"30px", marginTop: "15px"}}>{configuration.retailValue}</div>
        <div style={{height:"30px", marginTop: "15px"}}>{km}</div>
        <div style={{height:"30px", marginTop: "15px"}}>{autoCoast}</div>
    </div>
}