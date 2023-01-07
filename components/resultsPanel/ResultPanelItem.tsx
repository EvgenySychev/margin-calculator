export type ResultPanelItemType = {
    title: string
    value:any
}

export const ResultPanelItem = ({title,value}: ResultPanelItemType) => {
    return <div style={{display:"flex", height: "30px", marginTop: "15px", fontSize: "16px"}}>
            <span style={{width: "300px"}}>{title}</span>
            <span style={{width: "80px"}}>{value}</span>
            <span style={{width: "15px", float: "right"}}>₽</span>
    </div>
}