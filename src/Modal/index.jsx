import React, { useEffect, useRef } from "react";
import'./styles.css';

const Modal = ({ children, isOpen, setIsOpen }) => {
    const divModal = useRef();

    useEffect(() => {
        if(!isOpen) {
            divModal.current.style.display = 'none';
            document.getElementById('content').style.overflowY = 'auto'
        } else {
            divModal.current.style.display = 'flex';
            document.getElementById('content').style.overflowY = 'hidden';
        }
    }, [isOpen]);

    return (
        <div ref={divModal} className="backdrop-blur">
            <div className="modal">
                <button className="btn-close" onClick={() => setIsOpen((prev) => !prev)} type="button">X</button>
                { children }
            </div>
        </div>
    )
}

export default Modal;