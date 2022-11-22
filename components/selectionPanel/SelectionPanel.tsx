import { CarSelectionPanel } from "./CarSelectionPanel";
import {
    TransactionParametersSelectionPanel
 } from "./TransactionParametersSelectionPanel";

export const SelectionPanel = () => {
    return <div style={{
        margin: "15px",
        border: "solid 2px grey"
    }}>
        <CarSelectionPanel/>
        <TransactionParametersSelectionPanel/>
    </div>
}