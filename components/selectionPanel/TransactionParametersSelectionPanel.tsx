import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    setParameters,
} from "../../redux/slices/financialParametersSlice";
import {
    setCalculate,
    setTiresCheck,
    setTradeInCheck
} from "../../redux/slices/calculationToggleSlice";
import {useFormik} from "formik";
import {ChangeEvent, useState} from "react";

type FormikErrorType = {
    model?: string
    configuration?: string
    credit?: string
    tires?: string
    additionalEquipment?: string
    tradeIn?: string
    discount?: string
}

export const TransactionParametersSelectionPanel = () => {

    const [tiresGiftToggle, setTiresGiftToggle] = useState(false)
    const [tradeInToggle, setTradeInToggle] = useState(false)

    const dispatch = useAppDispatch()
    const modelWasSelected = useAppSelector(state => state.calculationToggle.modelWasSelected)

    const onTiresGiftSwitch = (e: ChangeEvent<HTMLInputElement>) => {
        setTiresGiftToggle(e.currentTarget.checked)
        dispatch(setTiresCheck(e.currentTarget.checked))
    }

    const onTradeInSwitch = (e: ChangeEvent<HTMLInputElement>) => {
        setTradeInToggle(e.currentTarget.checked)
        dispatch(setTradeInCheck(e.currentTarget.checked))
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
            const reg = /^\d+$/;

            if (!reg.test(values.credit)) {
                errors.credit = 'Вводите только цифры';
            } else if (values.credit.length > 6) {
                errors.credit = 'Слишком большое значение';
            }

            if (!reg.test(values.tires)) {
                errors.tires = 'Вводите только цифры';
            } else if (values.tires.length > 6) {
                errors.tires = 'Слишком большое значение';
            }

            if (!reg.test(values.additionalEquipment)) {
                errors.additionalEquipment = 'Вводите только цифры';
            } else if (values.additionalEquipment.length > 6) {
                errors.additionalEquipment = 'Слишком большое значение';
            }

            if (!reg.test(values.tradeIn)) {
                errors.tradeIn = 'Вводите только цифры';
            } else if (values.tradeIn.length > 7) {
                errors.tradeIn = 'Слишком большое значение';
            }

            if (!reg.test(values.discount)) {
                errors.discount = 'Вводите только цифры';
            } else if (values.discount.length > 6) {
                errors.discount = 'Слишком большое значение';
            }
            return errors;

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
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span style={{
                    width: "120px"}}>Кредит</span>
                <span>
                    <input type="text" style={{textAlign: "right",height: "25px"}}
                           {...formik.getFieldProps("credit")}/>
                    <div>
                        {formik.errors.credit ?
                            <div
                                style={{color: 'red', fontSize:'12px'}}>{formik.errors.credit}</div> : null}
                    </div>
                </span>
            </div>
            <div style={{
                height: "30px",
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span style={{
                    width: "120px"}}>Шины</span>
                <span style={{
                    width: "150px"}}>
                    <input onChange={onTiresGiftSwitch} checked={tiresGiftToggle}
                           type="checkbox"/>
                    <span style={{fontSize: "15px"}}>шины в подарок</span>
                </span>
                <span>
                    <input type="text" style={{textAlign: "right",height: "25px"}}
                           {...formik.getFieldProps("tires")}/>
                    <div>
                        {formik.errors.tires ?
                            <div
                                style={{color: 'red', fontSize:'12px'}}>{formik.errors.tires}</div> : null}
                    </div>
                </span>
            </div>
            <div style={{
                height: "30px",
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span style={{
                    width: "120px"}}>Допы</span>
                <span>
                    <input type="text" style={{textAlign: "right",height: "25px"}}
                           {...formik.getFieldProps("additionalEquipment")}/>
                    <div>
                        {formik.errors.additionalEquipment ?
                            <div
                                style={{color: 'red', fontSize:'12px'}}>{formik.errors.additionalEquipment}</div> : null}
                    </div>
                </span>

            </div>
            <div style={{
                height: "30px",
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span style={{
                    width: "120px"}}>Трейд-ин</span>
                <span style={{
                    width: "150px"}}>
                    <input onChange={onTradeInSwitch} checked={tradeInToggle}
                           type="checkbox"/>
                    <span style={{fontSize: "15px"}}>с трейд-ин</span>
                </span>
                <span>
                    <input type="text" style={{textAlign: "right",height: "25px"}}
                           {...formik.getFieldProps("tradeIn")}/>
                    <div>
                        {formik.errors.tradeIn ?
                            <div
                                style={{color: 'red', fontSize:'12px'}}>{formik.errors.tradeIn}</div> : null}
                    </div>
                </span>

            </div>
            <div style={{
                height: "30px",
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <span style={{
                    width: "120px"}}>Доп.скидка</span>
                <span>
                    <input type="text" style={{textAlign: "right",height: "25px"}}
                           {...formik.getFieldProps("discount")}/>
                    <div>
                        {formik.errors.discount ?
                            <div
                                style={{color: 'red', fontSize:'12px'}}>{formik.errors.discount}</div> : null}
                    </div>
                </span>

            </div>
            <button style={{
                height: "30px",
                width: "200px",
                marginTop: "20px",
            }} disabled={!modelWasSelected} type={'submit'}>Рассчитать
            </button>
        </form>

    </div>

}