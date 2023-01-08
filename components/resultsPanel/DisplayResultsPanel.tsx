import {ResultPanelItem} from "./ResultPanelItem";
import {useAppSelector} from "../../redux/store";
import {calculationCore} from "../utils/calculationСore"
import { ensure } from "../utils/ensureFunction";

export const DisplayResultsPanel = () => {

    const currentModel = useAppSelector(state => state.autoParameters.model)
    const currentConfiguration = useAppSelector(state => state.autoParameters.configuration)
    const finance = useAppSelector(state => state.financialParameters)
    const dataAutoParameters = useAppSelector(state => state.dataAutoParameters)
    const tiresCheck = useAppSelector(state => state.calculationToggle.tiresCheck)
    const tradeInCheck = useAppSelector(state => state.calculationToggle.tradeInCheck)
    const tiresMarginRatio = useAppSelector(state => state.coefficients.tiresMarginRatio)
    const tradeInMarginRatio = useAppSelector(state => state.coefficients.tradeInMarginRatio)
    const additionalEquipmentMarginRatio = useAppSelector(state => state.coefficients.additionalEquipmentMarginRatio)
    const minAutoMargin = useAppSelector(state => state.coefficients.minAutoMargin)
    const paymentMethod = useAppSelector(state => state.calculationToggle.paymentMethod)
    const percentAB = useAppSelector(state => state.leasingCompanyParameters.percent)

    const calculationResult = calculationCore({
        currentModel,
        currentConfiguration,
        finance,dataAutoParameters,
        tiresCheck,tradeInCheck,
        tiresMarginRatio,
        tradeInMarginRatio,
        additionalEquipmentMarginRatio,
        minAutoMargin,
        paymentMethod,
        percentAB}
        )

    const result = Object.entries(calculationResult)
    const km:number = ensure(result.find(m => m[0] === "КМ"))[1]    
    
    return  <div>
                {result.map((r,i)=> <ResultPanelItem key={i} title={r[0]} value={r[1]}/> )}
                {km < minAutoMargin && <div style={{ fontSize: "14px", color: "red", width: "300px", margin: "0 auto", textAlign: "center" }}>
            Внимание! КМ меньше {`${minAutoMargin}`} ₽. Необходимо согласовать с РОП
        </div>}
            </div>    
}
