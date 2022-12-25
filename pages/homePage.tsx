import { PaymentMethod } from "../components/paymentMethod/PaymentMethod"

import { SelectionPanel } from "../components/selectionPanel/SelectionPanel";
import { ResultsPanelCopy } from "../components/resultsPanel/ResultsPanel copy";


const HomePage = () => {

    return (
        <div>
            <PaymentMethod/>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                fontSize: "22px",
                height: "450px"
            }}>
                <SelectionPanel />
                <ResultsPanelCopy />
            </div>
        </div>

    )
}

export default HomePage;