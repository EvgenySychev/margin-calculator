import { CarSelectionPanel } from "./CarSelectionPanel";
import {
    TransactionParametersSelectionPanel
 } from "./TransactionParametersSelectionPanel";
import {ReportedCarSelection} from "./ReportedCarSelection";

export const SelectionPanel = () => {
    return <div style={{
        margin: "15px",
        border: "solid 2px grey"
    }}>
        <CarSelectionPanel/>
        <ReportedCarSelection/>
        <TransactionParametersSelectionPanel/>
    </div>
}