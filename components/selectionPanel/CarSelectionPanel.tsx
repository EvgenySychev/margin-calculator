import {useAppDispatch, useAppSelector} from "../../redux/store";
import {ChangeEvent, useState} from "react";
import { setModel,setConfiguration } from "../../redux/slices/autoParametersSlice";
import {useFormik} from "formik";

type FormikErrorType = {
    model?: string
    configuration?: string
    credit?: string
    tyres?: string
    equipment?: string
    tradeIn?:string
    discountDealer?:string
}

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

    const formik = useFormik({
        initialValues: {
            model: '',
            configuration: '',
            credit: '',
            tyres: '',
            equipment: '',
            tradeIn:'',
            discountDealer:''
        },
        // validate: (values) => {
        //     const errors: FormikErrorType = {};
        //     if (!values.email) {
        //         errors.email = 'Required';
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //     }
        //     if (!values.password) {
        //         errors.password = 'Required';
        //     } else if (values.password.length < 2) {
        //         errors.password = 'Invalid password, should be >2 and <16';
        //     }
        //     return errors;
        // },
        onSubmit: values => {
            formik.resetForm()
        },
    })

    // @ts-ignore
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <select name="carModel" id="carModel-select"
                    onChange={onChangeModel} >
                <option value=""> -- Выберите модель --</option>
                {models.slice(1).map(m =>
                    <option key={m.id} value={m.modelName}> -- {`${m.modelName}`} --</option>
                )
                }
            </select>

            <select name="modelConfiguration" id="modelConfiguration-select" onChange={onChangeConfiguration}>
                <option value=""> -- Выберите комплектацию --</option>
                {// @ts-ignore
                    configurations.map(c => <option key={c.id} value={c.nameConfiguration}> -- {`${c.nameConfiguration}`} --</option> )
                }
            </select>

            <ul>
                <li>Желтая</li>
                <li>Серая</li>
                <li>Белая</li>
                <li>Физ.лицо</li>
                <li>Лизинг</li>
            </ul>
        </form>

    </div>
}