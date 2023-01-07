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
        <div style={{display: "flex", height: "300px", margin: "15px", width: "400px"}}>
            <div>

                {calculate
                    ? <DisplayResultsPanel/>
                    : <span>Введите данные для расчета</span>
                }

            </div>
        </div>
        {/* {parseInt(km) < minAutoMargin && <div style={{ fontSize: "14px", color: "red", width: "300px", margin: "0 auto", textAlign: "center" }}>
            Внимание! КМ меньше {`${minAutoMargin}`}. Необходимо согласовать с РОП
        </div>} */}
    </div>
)
    }
