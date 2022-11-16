import {ChangeEvent} from "react";

type TransactionParameterPropsType = {
    name: string
    check: boolean
    value: string
    onChecked: (check: boolean) => void
    onChangedValue: (value: string) => void
}

export const TransactionParameter = ({
                                         name,
                                         check,
                                         value,
                                         onChecked,
                                         onChangedValue
                                     }: TransactionParameterPropsType) => {

    const onCheckSwitcher = (e: ChangeEvent<HTMLInputElement>) => {
        onChecked(e.currentTarget.checked)
    }

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChangedValue(e.currentTarget.value)
    }

    return <div>
        <span>{name}</span>
        <input onChange={onCheckSwitcher} type="checkbox" checked={check}/>
        <input type="text" value={value} onChange={onChangeValue}/>
    </div>
}