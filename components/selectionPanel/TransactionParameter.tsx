type TransactionParameterPropsType = {
    name: string
    check: boolean
    value: string
}

export const TransactionParameter = ({name,check,value}:TransactionParameterPropsType) => {
  return <div>
      <span>{name}</span>
      <input type="checkbox" checked={check}/>
      <input type="text" value={value}/>
  </div>
}