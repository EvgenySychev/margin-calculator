export type ResultPanelItemType = {
    title: string
}

export const ResultPanelItem = ({title}: ResultPanelItemType) => {
    return <div style={{display: "flex", height: "30px", marginTop: "15px"}}>
        <div style={{width: "300px", fontSize: "16px"}}>
            <span>{title}</span>
        </div>
    </div>
}