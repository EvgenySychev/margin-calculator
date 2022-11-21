import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setParameters} from "../../redux/slices/financialParametersSlice";
import {useFormik} from "formik";

type FormikErrorType = {
    model?: string
    configuration?: string
    credit?: string
    tyres?: string
    equipment?: string
    tradeIn?: string
    discountDealer?: string
}

export const TransactionParametersSelectionPanel = () => {

    const financialParameters = useAppSelector(state => state.financialParameters)

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            credit: '',
            tires: '',
            additionalEquipment: '',
            tradeIn: '',
            discount: '',
        },
        onSubmit: values => {
            dispatch(setParameters(values))
            console.log(values)
        },
    })

    return <div>
        <form onSubmit={formik.handleSubmit}>

            <div>
                <span>Кредит</span>
                <input type="text"
                       {...formik.getFieldProps("credit")}/>
            </div>
            <div>
                <span>Шины</span>
                <input type="text"
                       {...formik.getFieldProps("tires")}/>
            </div>
            <div>
                <span>Допы</span>
                <input type="text"
                       {...formik.getFieldProps("additionalEquipment")}/>
            </div>
            <div>
                <span>Трейд-ин</span>
                <input type="text"
                       {...formik.getFieldProps("tradeIn")}/>
            </div>
            <div>
                <span>Доп.скидка</span>
                <input type="text"
                       {...formik.getFieldProps("discount")}/>
            </div>
            <button type={'submit'}>Рассчитать</button>
        </form>

    </div>

}