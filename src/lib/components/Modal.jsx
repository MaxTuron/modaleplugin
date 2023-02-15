import React from "react";
import "./modal.css"
export default function Modal({ closeModal, children }){
    return <div className="modalBackground">
        <div className="modalContainer">
            <div>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    </div>
}