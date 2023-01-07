import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    setLeasingCompanyWasSelected,
    setPaymentMethod
} from "../../redux/slices/calculationToggleSlice";

export type paymentMethodType = 'leasing' | 'cash'

export const PaymentMethod = () => {

    const paymentMethod = useAppSelector(state => state.calculationToggle.paymentMethod)

    const dispatch = useAppDispatch()

    const chooseMethod = (title: paymentMethodType) => {

        dispatch(setPaymentMethod(title))
        if (title==='leasing') {
            dispatch(setLeasingCompanyWasSelected(false))
        } else {dispatch(setLeasingCompanyWasSelected(true))}

    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            fontSize: "22px",
            height: "50px"
        }}>
            <span style={{
                border: "solid 2px",
                height: "30px",
                width: "120px",
                textAlign: "center",
                background: `${paymentMethod === 'cash' ? "green" : " "}`
            }} onClick={() => chooseMethod('cash')}>Физ.лицо</span>
            <span style={{
                border: "solid 2px",
                height: "30px",
                width: "120px",
                textAlign: "center",
                background: `${paymentMethod === 'leasing' ? "green" : " "}`
            }} onClick={() => chooseMethod('leasing')}>Лизинг</span>
        </div>
    )
}
