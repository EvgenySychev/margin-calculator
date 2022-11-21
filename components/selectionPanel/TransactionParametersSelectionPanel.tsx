import {TransactionParameter} from "./TransactionParameter";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {ChangeEvent, useState} from "react";
import {
    setCredit,
    setTires,
    setAdditionalEquipment,
    setTradeIn,
    setDiscount,
    setCreditValue,
    setTiresValue,
    setAdditionalEquipmentValue,
    setTradeInValue, setDiscountValue, setParameters
} from "../../redux/slices/financialParametersSlice";
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

export const TransactionParametersSelectionPanel = () => {

    const financialParameters = useAppSelector(state => state.financialParameters)
    const dispatch = useAppDispatch()

    const [financialPrms, setFinancialPrms] = useState(financialParameters)

    const onCreditCheckSwitcher = (e: ChangeEvent<HTMLInputElement>) => {
        setFinancialPrms({...financialParameters, credit: e.currentTarget.checked})
        dispatch(setCredit(e.currentTarget.checked))
    }
    const onTiresCheckSwitcher = (ch: boolean) => {
        setFinancialPrms({...financialParameters, tires: ch})
        dispatch(setTires(ch))
    }
    const onAdditionalEquipmentCheckSwitcher = (ch: boolean) => {
        setFinancialPrms({...financialParameters, additionalEquipment: ch})
        dispatch(setAdditionalEquipment(ch))
    }
    const onTradeInCheckSwitcher = (ch: boolean) => {
        setFinancialPrms({...financialParameters, tradeIn: ch})
        dispatch(setTradeIn(ch))
    }
    const onDiscountCheckSwitcher = (ch: boolean) => {
        setFinancialPrms({...financialParameters, discount: ch})
        dispatch(setDiscount(ch))
    }
    const onCreditValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFinancialPrms({...financialParameters, creditValue: e.currentTarget.value})
        //dispatch(setCreditValue(value))
    }
    const onTiresValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, tiresValue: value})
        //dispatch(setTiresValue(value))
    }
    const onTradeInValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, tradeInValue: value})
       // dispatch(setTradeInValue(value))
    }
    const onAdditionalEquipmentValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, additionalEquipmentValue: value})
        //dispatch(setAdditionalEquipmentValue(value))
    }
    const onDiscountValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, discountValue: value})
        //dispatch(setDiscountValue(value))
    }

    const formik = useFormik({
        initialValues: {
            credit: false,
            creditValue: '',
            tires: false,
            tiresValue: '',
            additionalEquipment: false,
            additionalEquipmentValue: '',
            tradeIn: false,
            tradeInValue: '',
            discount: false,
            discountValue: '',
        },
        onSubmit: values => {
            formik.resetForm()
            setFinancialPrms({...financialParameters,
                credit: values.credit,
                creditValue:values.creditValue,
                tires:values.tires,
                tiresValue:values.tiresValue,
                additionalEquipment:values.additionalEquipment,
                additionalEquipmentValue:values.additionalEquipmentValue,
                tradeIn:values.tradeIn,
                tradeInValue:values.tradeInValue,
                discount:values.discount,
                discountValue: values.discountValue
            })
            //dispatch(setParameters(values))
            console.log(values)
        },
    })

    return <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <span>Кредит</span>
                <input type="checkbox" checked={financialPrms.credit}
                       {...formik.getFieldProps("credit")}/>
                <input type="text"
                       {...formik.getFieldProps("creditValue")}/>
            </div>

            <TransactionParameter
                nameParametr={"Шины"}
                check={financialPrms.tires}
                valueParameter={financialPrms.tiresValue}
                onChecked={onTiresCheckSwitcher}
                onChangedValue={onTiresValueChange}
                {...formik.getFieldProps("tires")}/>
            <TransactionParameter
                nameParametr={"Допы"}
                check={financialPrms.additionalEquipment}
                valueParameter={financialPrms.additionalEquipmentValue}
                onChecked={onAdditionalEquipmentCheckSwitcher}
                onChangedValue={onAdditionalEquipmentValueChange}
                {...formik.getFieldProps("additionalEquipment")}/>
            <TransactionParameter
                nameParametr={"Трейд-ин"}
                check={financialPrms.tradeIn}
                valueParameter={financialPrms.tradeInValue}
                onChecked={onTradeInCheckSwitcher}
                onChangedValue={onTradeInValueChange}
                {...formik.getFieldProps("tradeIn")}/>
            <TransactionParameter
                nameParametr={"Доп.скидка"}
                check={financialPrms.discount}
                valueParameter={financialPrms.discountValue}
                onChecked={onDiscountCheckSwitcher}
                onChangedValue={onDiscountValueChange}
                {...formik.getFieldProps("discount")}/>
            <button type={'submit'}>Рассчитать</button>
        </form>

    </div>

}