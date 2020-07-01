import React, { useEffect, useState } from 'react';

const Modal = ({
    visible,
    title,
    onOk,
    onCancel,
    children
}) => {

    const [isOpen, openStatus] = useState(false)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {

        if(visible){
            setShowModal(true)
            setTimeout(() => {
                openStatus(true)
            }, 100);
        }

        if(!visible){
            openStatus(false)
            setTimeout(() => {
                setShowModal(false)
            }, 250);
        }
    }, [visible])
    console.log("Modal: ", visible, isOpen)
    if(!showModal) {
        return null
    }
    return (
        <div className="modalContainer">
            <div className="modalBackBox" onClick={onCancel}></div>
            <div className={isOpen ?"modal modalOpen" :"modal"}>
            <div className="modalHeader">
                <div className="Modaltitle"> {title} </div>
                <div className="closeIcon" onClick={onCancel}>X</div>
            </div>
            <div className="modalBody">
                {children}
            </div>
            <div className="ModalFooter">
            <button className="btnGold" onClick={onOk}>ثبت</button>
            <button className="btnCancel" onClick={onCancel}>بستن</button>
            </div>
        </div>
        </div>
    )
}

export default Modal