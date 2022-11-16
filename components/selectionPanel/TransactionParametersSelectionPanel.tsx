import {TransactionParameter} from "./TransactionParameter";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useState} from "react";
import {
    setCredit,
    setTires,
    setAdditionalEquipment,
    setTradeIn,
    setDiscount,
    setCreditValue,
    setTiresValue,
    setAdditionalEquipmentValue,
    setTradeInValue, setDiscountValue
} from "../../redux/slices/financialParametersSlice";

export const TransactionParametersSelectionPanel = () => {

    const financialParameters = useAppSelector(state => state.financialParameters)
    const dispatch = useAppDispatch()

    const [financialPrms, setFinancialPrms] = useState(financialParameters)

    const onCreditCheckSwitcher = (ch: boolean) => {
        setFinancialPrms({...financialParameters, credit: ch})
        dispatch(setCredit(ch))
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
    const onCreditValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, creditValue: value})
        dispatch(setCreditValue(value))
    }
    const onTiresValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, tiresValue: value})
        dispatch(setTiresValue(value))
    }
    const onTradeInValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, tradeInValue: value})
        dispatch(setTradeInValue(value))
    }
    const onAdditionalEquipmentValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, additionalEquipmentValue: value})
        dispatch(setAdditionalEquipmentValue(value))
    }
    const onDiscountValueChange = (value:string) => {
        setFinancialPrms({...financialParameters, discountValue: value})
        dispatch(setDiscountValue(value))
    }

    return <div>
        <TransactionParameter
            name={"Кредит"}
            check={financialPrms.credit}
            value={financialPrms.creditValue}
            onChecked={onCreditCheckSwitcher}
            onChangedValue={onCreditValueChange}/>
        <TransactionParameter
            name={"Шины"}
            check={financialPrms.tires}
            value={financialPrms.tiresValue}
            onChecked={onTiresCheckSwitcher}
            onChangedValue={onTiresValueChange}/>
        <TransactionParameter
            name={"Допы"}
            check={financialPrms.additionalEquipment}
            value={financialPrms.additionalEquipmentValue}
            onChecked={onAdditionalEquipmentCheckSwitcher}
            onChangedValue={onAdditionalEquipmentValueChange}/>
        <TransactionParameter
            name={"Трейд-ин"}
            check={financialPrms.tradeIn}
            value={financialPrms.tradeInValue}
            onChecked={onTradeInCheckSwitcher}
            onChangedValue={onTradeInValueChange}/>
        <TransactionParameter
            name={"Доп.скидка"}
            check={financialPrms.discount}
            value={financialPrms.discountValue}
            onChecked={onDiscountCheckSwitcher}
            onChangedValue={onDiscountValueChange}/>
    </div>

}