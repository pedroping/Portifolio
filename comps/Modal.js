import { useState, useEffect } from "react";
import  ReactDOM from "react-dom";
import projeto from "../styles/Projeto.module.css"
import Navifooter from '../comps/Navifooter'
import Router from 'next/router'

export default function Modal({show, onClose, children, title}){
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }
    const modalContent = show ? (
        <div>
            <div className={projeto.overlay}>
                <div className={projeto.modal}>
                    <div className={projeto.header}>
                        <a href="#" onClick={handleClose}>
                            <button className={projeto.button}>Fechar</button>
                        </a>
                    </div>
                    <div className={projeto.body}>{children}</div>
                </div>
            </div>
        </div>
    ) : null ; 

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    }
    else {
        return null;
    }
}