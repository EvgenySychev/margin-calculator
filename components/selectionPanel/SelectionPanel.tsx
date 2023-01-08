import { useState } from "react";
import { useSelector } from "react-redux";
import { CarSelectionPanel } from "./CarSelectionPanel";
import {
    TransactionParametersSelectionPanel
 } from "./TransactionParametersSelectionPanel";
 import {Modal} from "../utils/Modal"

export const SelectionPanel = () => {
    const [modalActiv,setModalActiv] = useState(true)
    return <div style={{
        margin: "15px",
        border: "solid 2px grey"
    }}>
        <CarSelectionPanel/>
        {/*<ReportedCarSelection/>*/}
        <TransactionParametersSelectionPanel/>
        <Modal activ= {modalActiv} setActive={setModalActiv}/>
    </div>
}