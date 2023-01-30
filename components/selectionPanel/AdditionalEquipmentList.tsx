import {useAppDispatch, useAppSelector} from "../../redux/store";
import setAdditionalEquipmentEntranceCoast from "../../redux/slices/financialParametersSlice"

export const AdditionalEquipmentList = ({setActive}:any) => {

    const dispatch = useAppDispatch()

    const dataAdditionalEquipment = useAppSelector(state => state.dataAdditionalEquipment)

    const addAdditionalEquipment = () => {
        setActive()
        console.log('send');
        
    }

    return (
        <div>
            {dataAdditionalEquipment.map(item => <div key={item.id} style={{fontSize: '14px', paddingTop: '5px'}}>
                <input type="checkbox"/>
                <span>{item.productName}</span>
            </div>)}
            <span style={{fontSize: "15px", border: "1px solid black", }} onClick={addAdditionalEquipment}>Добавить в расчет</span>
        </div>
    )
}