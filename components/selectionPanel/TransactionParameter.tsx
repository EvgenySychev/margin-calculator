
type TransactionParameterPropsType = {
    nameParameter: string
    valueParameter: string
    onChangedValue: (value: string) => void
}

export const TransactionParameter = ({
                                         nameParameter,
                                         onChangedValue
                                     }: TransactionParameterPropsType) => {

    return <div>
        <span>{nameParameter}</span>
        <input type="text" />
    </div>
}