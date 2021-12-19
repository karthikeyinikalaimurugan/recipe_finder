import React from "react";
import './index.css';

const Modal = ({children,onBack=()=>{}})=>{
    return <div className="overlay">
        <div className="modal">
            <button className="closeBtn" onClick={()=>onBack()}>
                <i className="fa fa-close"/>
            </button>
            {children}
        </div>
    </div>
}

export default Modal;