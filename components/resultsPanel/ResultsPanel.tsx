// import {ResultPanelItem} from "./ResultPanelItem";
// import {useAppSelector} from "../../redux/store";
// import {AfterCalculationPanel} from "./afterCalculationPanel";
// import {useState} from "react";

// export const ResultsPanel = () => {

//     const minAutoMargin = useAppSelector(state => state.coefficients.minAutoMargin)
//     const toggle = useAppSelector(state => state.calculationToggle.toggle)
//     const paymentMethod = useAppSelector(state=>state.calculationToggle.paymentMethod)

//     const [title,setTitle] = useState([
//         "РРЦ",
//         "Цена без доп.скидок",
//         "Маржа кузов",
//         "Стоимость без доп.оборудования",
//         "Общая выгода клиента",
//         "КМ",
//         "Итоговая стоимость авто"
//     ])
//     const [km,setKm] = useState ('')

//     const callback = (km:string) => {
//         return setKm(km)
//     }

//     return <div style={{
//         margin: "15px",
//         border: "solid 2px grey"
//     }}>
//         <div style={{margin: "10px", textAlign:"center", height: "30px"}}>
//             РАСЧЕТ
//         </div>
//         <div style={{display: "flex", height: "300px", margin: "15px", width: "400px"}}>
//             <div>
//                 {title.map(t => <ResultPanelItem key={t} title={t}/>)}
//             </div>
//             {toggle
//                 ? <AfterCalculationPanel callback = {callback}/>
//                 : ''}
//         </div>
//         {parseInt(km) < minAutoMargin && <div style={{fontSize: "14px", color: "red", width: "300px",margin: "0 auto", textAlign: "center"}}> Внимание! КМ меньше {`${minAutoMargin}`}. Необходимо согласовать с РОП </div>}
//     </div>
// }
