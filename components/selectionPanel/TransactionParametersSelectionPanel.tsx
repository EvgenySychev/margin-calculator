import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    setParameters,
} from "../../redux/slices/financialParametersSlice";
import {setCalculate, setTiresCheck} from "../../redux/slices/calculationToggleSlice";
import {useFormik} from "formik";
import {ChangeEvent, useState} from "react";

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

    const [tiresGiftToggle, setTiresGiftToggle] = useState(false)

    const dispatch = useAppDispatch()
    const modelWasSelected = useAppSelector(state => state.calculationToggle.modelWasSelected)

    const onTiresGiftSwitch = (e: ChangeEvent<HTMLInputElement>) => {
        setTiresGiftToggle(e.currentTarget.checked)
        dispatch(setTiresCheck(e.currentTarget.checked))
    }

    const formik = useFormik({
        initialValues: {
            credit: '0',
            tires: '0',
            additionalEquipment: '0',
            tradeIn: '0',
            discount: '0',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

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
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span>Кредит</span>
                <input type="text" style={{textAlign: "right"}}
                       {...formik.getFieldProps("credit")}/>
            </div>
            <div style={{
                height: "30px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span>Шины</span>
                <span>
                    <input onChange={onTiresGiftSwitch} checked={tiresGiftToggle}
                           type="checkbox"/>
                    <span style={{fontSize: "15px"}}>шины в подарок</span>
                </span>
                <input type="text" style={{textAlign: "right"}}
                             {...formik.getFieldProps("tires")}/>
            </div>
            <div style={{
                height: "30px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span>Допы</span>
                <input type="text" style={{textAlign: "right"}}
                       {...formik.getFieldProps("additionalEquipment")}/>
            </div>
            <div style={{
                height: "30px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span>Трейд-ин</span>
                <input type="text" style={{textAlign: "right"}}
                       {...formik.getFieldProps("tradeIn")}/>
            </div>
            <div style={{
                height: "30px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span>Доп.скидка</span>
                <input type="text" style={{textAlign: "right"}}
                       {...formik.getFieldProps("discount")}/>
            </div>
            <button style={{
                height: "30px",
                width: "200px",
                marginTop: "50px",
            }} disabled={!modelWasSelected} type={'submit'}>Рассчитать
            </button>
        </form>

    </div>

}