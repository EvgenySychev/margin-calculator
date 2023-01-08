import React from "react";
import style from "./modal.module.css"

export const Modal = ({activ, setActive}:any) => {
    return (
        <div className={activ ? style.modalActiv : style.modal} onClick={()=> setActive(false)}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}   