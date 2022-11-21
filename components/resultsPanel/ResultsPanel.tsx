import {ResultPanelItem} from "./ResultPanelItem";
import {useAppSelector} from "../../redux/store";
import {AfterCalculationPanel} from "./afterCalculationPanel";


export const ResultsPanel = () => {

    const title = ["РРЦ", "Цена без доп.скидок", "Маржа кузов", "Стоимость без доп.оборудования", "Общая выгода клиента", "КМ", "Итоговая стоимость авто"]
    const toggle = useAppSelector(state => state.calculationToggle.toggle)


    return <div style={{
        margin: "15px"
    }}>
        <div>
            панель результатов после расчета
        </div>
        <div style={{display: "flex", height: "30px", marginTop: "15px"}}>
            <div>
                {title.map(t => <ResultPanelItem key={t} title={t}/>)}
            </div>
            {toggle
                ? <AfterCalculationPanel/>
                : ''}
        </div>
    </div>
}


//: title.map(t => <ResultPanelItem key={t} title={t} value={configuration.retailValue}/>)}