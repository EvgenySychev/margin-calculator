import {ResultPanelItem} from "./ResultPanelItem";
import {useAppSelector} from "../../redux/store";
import {calculationCore} from "../utils/calculationСore"

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

    const calculationResult = calculationCore({currentModel,
        currentConfiguration,
        finance,dataAutoParameters,
        tiresCheck,tradeInCheck,
        tiresMarginRatio,
        tradeInMarginRatio,
        additionalEquipmentMarginRatio,
        minAutoMargin}
        )

    const result = Object.entries(calculationResult)
    
    return  <div>
                {result.map((r,i)=> <ResultPanelItem key={i} title={r[0]} value={r[1]}/> )}
            </div>    
}
