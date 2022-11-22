import {ResultPanelItem} from "./ResultPanelItem";
import {useAppSelector} from "../../redux/store";
import {AfterCalculationPanel} from "./afterCalculationPanel";


export const ResultsPanel = () => {

    const title = ["РРЦ", "Цена без доп.скидок", "Маржа кузов", "Стоимость без доп.оборудования", "Общая выгода клиента", "КМ", "Итоговая стоимость авто"]
    const toggle = useAppSelector(state => state.calculationToggle.toggle)


    return <div style={{
        margin: "15px",
        border: "solid 2px grey"
    }}>
        <div style={{margin: "10px", textAlign:"center", height: "30px"}}>
            РАСЧЕТ
        </div>
        <div style={{display: "flex", height: "30px", margin: "15px", width: "400px"}}>
            <div>
                {title.map(t => <ResultPanelItem key={t} title={t}/>)}
            </div>
            {toggle
                ? <AfterCalculationPanel/>
                : ''}
        </div>
    </div>
}
