import {ResultPanelItem} from "./ResultPanelItem";
import {useAppSelector, useAppDispatch} from "../../redux/store";
import {calculationCore} from "../utils/calculationСore"

import {ModelType} from "../../redux/slices/dataAutoParametersSlice";
import {ensure} from "../utils/ensureFunction"
import {setCalculateResult} from "../../redux/slices/calculationResultSlice";
import { useState } from "react";

export const ResultsPanel = () => {

    //const [calculationResult, setCalculationResult] = useState({})

    //const dispatch = useAppDispatch

    const calculate = useAppSelector(state => state.calculationToggle.toggle)
    
        //setCalculationResult(calculationCore())

    const calculationResult = calculationCore()

    //const calculationResult = useAppSelector(state => state.calculationResult.result)
    const result = Object.entries(calculationResult)
    console.log(calculationResult);
    console.log(result);
    
    

    return <div style={{
        margin: "15px",
        border: "solid 2px grey"
    }}>
        <div style={{margin: "10px", textAlign: "center", height: "30px"}}>
            РАСЧЕТ
        </div>


        <div style={{display: "flex", height: "300px", margin: "15px", width: "400px"}}>
            <div>
{result.map((r,i)=> <ResultPanelItem key={i} title={r[0]} value={r[1]}/> )}
            </div>
        </div>
        {/* {parseInt(km) < minAutoMargin && <div style={{ fontSize: "14px", color: "red", width: "300px", margin: "0 auto", textAlign: "center" }}>
            Внимание! КМ меньше {`${minAutoMargin}`}. Необходимо согласовать с РОП
        </div>} */}
    </div>
}
