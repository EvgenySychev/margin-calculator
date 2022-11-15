import { CarSelectionPanel } from "./CarSelectionPanel";
import {
    TransactionParametersSelectionPanel
 } from "./TransactionParametersSelectionPanel";

export const SelectionPanel = () => {
    return <div style={{
        margin: "15px"
    }}>
        <CarSelectionPanel/>
        <TransactionParametersSelectionPanel/>
    </div>
}