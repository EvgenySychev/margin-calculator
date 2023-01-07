import {useAppSelector} from "../../redux/store";
import {DisplayResultsPanel} from './DisplayResultsPanel'

export const ResultsPanel = () => {

    const calculate = useAppSelector(state => state.calculationToggle.toggle)
    
    return (

<div style={{
        margin: "15px",
        border: "solid 2px grey"
    }}>
        <div style={{margin: "10px", textAlign: "center", height: "30px"}}>
            РАСЧЕТ
        </div>
        <div style={{height: "300px", margin: "15px", width: "400px"}}>
            <div>
                {calculate
                    ? <DisplayResultsPanel/>
                    : <span>Введите данные для расчета</span>
                }
            </div>
        </div>
    </div>
)
    }
