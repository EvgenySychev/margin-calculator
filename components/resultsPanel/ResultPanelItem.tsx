export type ResultPanelItemType = {
    value?: string
    title: string
}

export const ResultPanelItem = ({value, title}: ResultPanelItemType) => {
    return <div style={{display: "flex", height:"30px", marginTop: "15px"}}>
        <div style={{width: "300px", fontSize:"16px" }}>
            <span>{`** ${title} **  `}</span>
        </div>
        <div>
            <span>{value}</span>
        </div>

    </div>
}