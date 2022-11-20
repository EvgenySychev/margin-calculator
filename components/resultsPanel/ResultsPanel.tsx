import {ResultPanelItem} from "./ResultPanelItem";
import {useAppSelector} from "../../redux/store";
import {ModelType} from "../../redux/slices/dataAutoParametersSlice";


export const ResultsPanel = () => {

    const currentModel = useAppSelector(state => state.autoParameters.model)
    const currentConfiguration = useAppSelector(state => state.autoParameters.configuration)
    const data = useAppSelector(state => state.dataAutoParameters)
    // @ts-ignore
    const model: ModelType = data.find(t => t.modelName == currentModel)
    const configuration = model.configuration.find(c => c.nameConfiguration === currentConfiguration)

    return <div style={{
        margin: "15px"
    }}>
        панель результатов после расчета
        {configuration
            ?
            (<div>
                    <ResultPanelItem title={"РРЦ"} value={configuration.retailValue}/>
                    <ResultPanelItem title={"Маржа кузов"} value={configuration.retailValue}/>
                    <ResultPanelItem title={"Стоимость доп.оборудования"} value={configuration.retailValue}/>
                    <ResultPanelItem title={"Общая выгода клиента"} value={configuration.retailValue}/>
                    <ResultPanelItem title={"КМ"} value={configuration.retailValue}/>
                    <ResultPanelItem title={"Итоговая стоимость авто"} value={configuration.retailValue}/>
                </div>
            )
            : ''}
    </div>
}