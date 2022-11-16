
export type ResultPanelItemType = {
    value: string
}

export const ResultPanelItem = ({value}:ResultPanelItemType) => {
  return <div>
      {value}
  </div>
}