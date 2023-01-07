export type ResultPanelItemType = {
    title: string
    value:any
}

export const ResultPanelItem = ({title,value}: ResultPanelItemType) => {
    return <div style={{display: "flex", height: "30px", marginTop: "15px"}}>
        <div style={{width: "260px", fontSize: "16px"}}>
            <span style={{width: "150px"}}>{title}</span>
            <span style={{width: "150px"}}>{value}</span>
        </div>
    </div>
}