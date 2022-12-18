import { PaymentMethod } from "../components/paymentMethod/PaymentMethod"

import { SelectionPanel } from "../components/selectionPanel/SelectionPanel";
import { ResultsPanel } from "../components/resultsPanel/ResultsPanel";


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
                <ResultsPanel />
            </div>
        </div>

    )
}

export default HomePage;