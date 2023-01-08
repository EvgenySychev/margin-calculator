export type ResultPanelItemType = {
    title: string
    value:string | number
}

export const ResultPanelItem = ({title,value}: ResultPanelItemType) => {
    return <div style={{display:"flex", height: "30px", marginTop: "10px", fontSize: "16px"}}>
            <span style={{width: "300px"}}>{title}</span>
            {value>0 
                ?<span style={{width: "80px", textAlign: "right", marginRight: "10px"}}>{value}</span>
                :<span style={{width: "80px", textAlign: "right", marginRight: "10px", color: "red"}}>{value}</span>}
            <span style={{width: "15px", float: "right"}}>₽</span>
    </div>
}