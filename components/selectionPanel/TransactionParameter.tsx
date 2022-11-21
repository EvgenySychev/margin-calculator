import {ChangeEvent} from "react";

type TransactionParameterPropsType = {
    nameParametr: string
    check: boolean
    valueParameter: string
    onChecked: (check: boolean) => void
    onChangedValue: (value: string) => void
}

export const TransactionParameter = ({
                                         nameParametr,
                                         check,
                                         valueParameter,
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
        <span>{nameParametr}</span>
        <input onChange={onCheckSwitcher} type="checkbox" checked={check}/>
        <input type="text" value={valueParameter} onChange={onChangeValue}/>
    </div>
}