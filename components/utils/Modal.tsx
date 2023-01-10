import React from "react";
import style from "./modal.module.css"

export const Modal = ({active, setActive, children}:any) => {
    return (
        <div className={active ? style.modalActive : style.modal} onClick={()=> setActive(false)}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}   