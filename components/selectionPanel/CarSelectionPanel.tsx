import {useAppDispatch, useAppSelector} from "../../redux/store";
import {ChangeEvent, useState} from "react";
import {setModel, setConfiguration} from "../../redux/slices/autoParametersSlice";

export const CarSelectionPanel = () => {

    const models = useAppSelector(state => state.dataAutoParameters)
    const dispatch = useAppDispatch()

    const [configurations, setConfigurations] = useState([])

    const onChangeModel = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setModel(e.currentTarget.value))
        const modelName = e.target.options[e.target.selectedIndex].value;
        const model = models.find(item => item.modelName === modelName);
        if (model) {
            // @ts-ignore
            setConfigurations(model.configuration);
        }
    }

    const onChangeConfiguration = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setConfiguration(e.currentTarget.value))
    }

    // @ts-ignore
    return <div>

            <select id="carModel-select"
                    onChange={onChangeModel}>
                <option value=""> -- Выберите модель --</option>
                {models.slice(1).map(m =>
                    <option key={m.id}
                            value={m.modelName}> -- {`${m.modelName}`} --</option>
                )
                }
            </select>

            <select id="modelConfiguration-select"
                    onChange={onChangeConfiguration}>
                <option value=""> -- Выберите комплектацию --</option>
                {// @ts-ignore
                    configurations.map(c => <option key={c.id}
                                                    value={c.nameConfiguration}> -- {`${c.nameConfiguration}`} --</option>)
                }
            </select>
            <ul>
                <li>Желтая</li>
                <li>Серая</li>
                <li>Белая</li>
                <li>Физ.лицо</li>
                <li>Лизинг</li>
            </ul>
    </div>
}