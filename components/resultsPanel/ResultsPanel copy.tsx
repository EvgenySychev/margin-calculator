import {ResultPanelItem} from "./ResultPanelItem";
import {useAppSelector} from "../../redux/store";
import {calculationCore} from "../utils/calculationСore"

import {ModelType} from "../../redux/slices/dataAutoParametersSlice";
import {ensure} from "../utils/ensureFunction"

export const ResultsPanelCopy = () => {

    // const minAutoMargin = useAppSelector(state => state.coefficients.minAutoMargin)
    // const toggle = useAppSelector(state => state.calculationToggle.toggle)

    // const [km,setKm] = useState ('')

    // const callback = (km:string) => {
    //     return setKm(km)
    // }

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

    const model = ensure<ModelType>(data.find(t => t.modelName === currentModel))

    const calculateResult = useAppSelector(state => state.calculationResult)
    console.log(calculateResult)

    //const configuration =ensure(model.configuration.find(c => c.nameConfiguration === currentConfiguration))
    // const retailValue = configuration.retailValue
    // const entranceCost = configuration.entranceCost
    // const discount = finance.discount
    // const discountTradeIn = configuration.discountTradeIn
    // const importerDiscount = configuration.importerDiscount
    // const refundTradeIn = configuration.refundTradeIn
    // const additionalEquipment = finance.additionalEquipment
    // const tradeIn = finance.tradeIn
    // const credit = finance.credit
    // const tires = finance.tires
    // const refundDealer = configuration.refundDealer


    // const calculationResult = calculationCore({
    //     tiresMarginRatio,
    //     tradeInMarginRatio,
    //     retailValue,
    //     entranceCost,
    //     discount,
    //     tradeInCheck,
    //     tiresCheck,
    //     discountTradeIn,
    //     importerDiscount,
    //     refundTradeIn,
    //     additionalEquipment,
    //     tradeIn,
    //     credit,
    //     tires,
    //     refundDealer,
    //     additionalEquipmentMarginRatio
    // })

    //const calculationResultItem = Object.entries(calculationResult)

    return <div style={{
        margin: "15px",
        border: "solid 2px grey"
    }}>
        <div style={{margin: "10px", textAlign: "center", height: "30px"}}>
            РАСЧЕТ
        </div>


        <div style={{display: "flex", height: "300px", margin: "15px", width: "400px"}}>
            <div>

            </div>
        </div>
        {/* {parseInt(km) < minAutoMargin && <div style={{ fontSize: "14px", color: "red", width: "300px", margin: "0 auto", textAlign: "center" }}>
            Внимание! КМ меньше {`${minAutoMargin}`}. Необходимо согласовать с РОП
        </div>} */}
    </div>
}
