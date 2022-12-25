export type ResultPanelItemType = {
    title: string
    value:string
}

export const ResultPanelItem = ({title,value}: ResultPanelItemType) => {
    return <div style={{display: "flex", height: "30px", marginTop: "15px"}}>
        <div style={{width: "260px", fontSize: "16px"}}>
            <span>{title}</span>
            <span>{value}</span>
        </div>
    </div>
}