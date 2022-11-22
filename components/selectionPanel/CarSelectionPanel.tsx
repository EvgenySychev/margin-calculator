import {useAppDispatch, useAppSelector} from "../../redux/store";
import {ChangeEvent, useState} from "react";
import {setModel, setConfiguration} from "../../redux/slices/autoParametersSlice";
import {
    setCalculate,
    setModelWasSelected
} from "../../redux/slices/calculationToggleSlice";

export const CarSelectionPanel = () => {

    const models = useAppSelector(state => state.dataAutoParameters)
    const dispatch = useAppDispatch()

    const [configurations, setConfigurations] = useState([])

    const onChangeModel = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setModel(e.currentTarget.value))
        dispatch(setCalculate(false))
        dispatch(setModelWasSelected(false))
        setConfigurations([])
        const modelName = e.target.options[e.target.selectedIndex].value;
        const model = models.find(item => item.modelName === modelName);
        if (model) {
            // @ts-ignore
            setConfigurations(model.configuration);
        }
    }

    const onChangeConfiguration = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setConfiguration(e.currentTarget.value))
        dispatch(setCalculate(false))
        if (e.currentTarget.value === '') {
            dispatch(setModelWasSelected(false))
        } else {
            dispatch(setModelWasSelected(true))
        }
    }

    // @ts-ignore
    return <div style={{margin: "10px", height:"30px" }}>
        <select style={{textAlign:"center", width: "220px", height:"30px", fontSize: "14px", fontWeight:"600"}}  id="carModel-select"
                onChange={onChangeModel}>
            <option value=""> -- Выберите модель --</option>
            {models.slice(1).map(m =>
                <option key={m.id}
                        value={m.modelName}> -- {`${m.modelName}`} --</option>
            )
            }
        </select>
        <select style={{marginLeft: "10px", textAlign:"center",width: "220px", height:"30px",fontSize: "14px",fontWeight:"600"}} id="modelConfiguration-select"
                onChange={onChangeConfiguration}>
            <option value=""> -- Выберите комплектацию --</option>
            {// @ts-ignore
                configurations.map(c => <option key={c.id}
                                                value={c.nameConfiguration}> -- {`${c.nameConfiguration}`} --</option>)
            }
        </select>
    </div>
}