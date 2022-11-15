import {TransactionParameter} from "./TransactionParameter";
import { useAppSelector } from "../../redux/store";

export const TransactionParametersSelectionPanel = () => {

    const financialParameters = useAppSelector(state => state.financialParameters)

    return <div>
        <TransactionParameter
            name={"Кредит"}
            check={financialParameters.credit}
            value={financialParameters.creditValue}/>
        <TransactionParameter
            name={"Шины"}
            check={financialParameters.tires}
            value={financialParameters.tiresValue}/>
        <TransactionParameter
            name={"Допы"}
            check={financialParameters.additionalEquipment}
            value={financialParameters.additionalEquipmentValue}/>
        <TransactionParameter
            name={"Трейд-ин"}
            check={financialParameters.tradeIn}
            value={financialParameters.tradeInValue}/>
        <TransactionParameter
            name={"Доп.скидка"}
            check={financialParameters.discount}
            value={financialParameters.discountValue}/>
    </div>

}