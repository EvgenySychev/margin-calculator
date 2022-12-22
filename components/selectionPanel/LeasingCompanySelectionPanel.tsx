import {useAppDispatch, useAppSelector} from "../../redux/store";
import {ChangeEvent, useState} from "react";

import {setLeasingCompany,setPercent} from "../../redux/slices/laesingCompanyParametrsSlice";
import {
    setLeasingCompanyWasSelected
} from "../../redux/slices/calculationToggleSlice";

export const LeasingCompanySelectionPanel = () => {

    const [checkLeasingCompany, setCheckLeasingCompany] = useState<boolean>(false)

    const leasingCompany = useAppSelector(state=>state.dataLeasingCompanyParameters.leasingCompany)
    const percent = useAppSelector(state=>state.dataLeasingCompanyParameters.percent)

    const dispatch = useAppDispatch()

    const onChangeLeasingCompany = (e: ChangeEvent<HTMLSelectElement>) => {
         dispatch(setLeasingCompany(e.currentTarget.value))
        setCheckLeasingCompany(true)
    }

    const onChangePercent = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPercent(e.currentTarget.value))
        if (checkLeasingCompany) {
            dispatch(setLeasingCompanyWasSelected(true))
        }
    }

    return <div style={{ height:"30px" }}>
        <select style={{textAlign:"center", width: "220px", height:"30px", fontSize: "14px", fontWeight:"600"}}  id="leasingCompany-select"
                onChange={onChangeLeasingCompany}>
            <option value=""> -- Выберите компанию --</option>
            {leasingCompany.slice(1).map(m =>
                <option key={m.id}
                        value={m.nameLeasingCompany}> -- {`${m.nameLeasingCompany}`} --</option>
            )
            }
        </select>
        {checkLeasingCompany && <select style={{marginLeft: "10px", textAlign:"center",width: "220px", height:"30px",fontSize: "14px",fontWeight:"600"}} id="percent-select"
                                        onChange={onChangePercent}>
            <option value=""> -- Выберите размер АВ --</option>
            {
                percent.map((p,i) => <option key={i}
                                             value={p}> {`${p} %`}</option>)
            }
        </select>}

    </div>
}