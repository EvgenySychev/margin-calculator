import {TransactionParameter} from "./TransactionParameter";

export const TransactionParametersSelectionPanel = () => {
    return <div>
        <TransactionParameter
            name={"Кредит"}
            check={true}
            value={"130000"}/>
        <TransactionParameter
            name={"Шины"}
            check={true}
            value={"50000"}/>
        <TransactionParameter
            name={"Допы"}
            check={true}
            value={"75000"}/>
        <TransactionParameter
            name={"Трейд-ин"}
            check={true}
            value={"800000"}/>
        <TransactionParameter
            name={"Доп.скидка"}
            check={false}
            value={"100000"}/>
    </div>

}