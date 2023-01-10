import {useAppSelector} from "../../redux/store";

export const AdditionalEquipmentList = ({setActive}:any) => {

    const dataAdditionalEquipment = useAppSelector(state => state.dataAdditionalEquipment)

    return (
        <div>
            {dataAdditionalEquipment.map(item => <div key={item.id} style={{fontSize: '14px', paddingTop: '5px'}}>
                <input type="checkbox"/>
                <span>{item.productName}</span>
            </div>)}
            <span style={{fontSize: "15px", border: "1px solid black", }} onClick={setActive}>Добавить в расчет</span>
        </div>
    )
}