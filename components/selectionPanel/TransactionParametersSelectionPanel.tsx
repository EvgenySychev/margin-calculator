import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setParameters} from "../../redux/slices/financialParametersSlice";
import {setCalculate} from "../../redux/slices/calculationToggleSlice";
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

    const dispatch = useAppDispatch()
    const modelWasSelected = useAppSelector(state => state.calculationToggle.modelWasSelected)

    const formik = useFormik({
        initialValues: {
            credit: '0',
            tires: '0',
            additionalEquipment: '0',
            tradeIn: '0',
            discount: '0',
        },
        onSubmit: values => {
            dispatch(setParameters(values))
            dispatch(setCalculate(true))
            console.log(values)
        },
    })

    return <div style={{margin: "10px", marginTop: "30px"}}>
        <form onSubmit={formik.handleSubmit}>

            <div style={{
                height: "30px",
                marginTop: "15px"
            }}>
                <span>Кредит</span>
                <input type="text"
                       {...formik.getFieldProps("credit")}/>
            </div>
            <div style={{
                height: "30px",
                marginTop: "15px"
            }}>
                <span>Шины</span>
                <input type="text"
                       {...formik.getFieldProps("tires")}/>
            </div>
            <div style={{
                height: "30px",
                marginTop: "15px"
            }}>
                <span>Допы</span>
                <input type="text"
                       {...formik.getFieldProps("additionalEquipment")}/>
            </div>
            <div style={{
                height: "30px",
                marginTop: "15px"
            }}>
                <span>Трейд-ин</span>
                <input type="text"
                       {...formik.getFieldProps("tradeIn")}/>
            </div>
            <div style={{
                height: "30px",
                marginTop: "15px"
            }}>
                <span>Доп.скидка</span>
                <input type="text"
                       {...formik.getFieldProps("discount")}/>
            </div>
            <button disabled={!modelWasSelected} type={'submit'}>Рассчитать</button>
        </form>

    </div>

}