import React from 'react';

const Modal = ({
    visible,
    title,
    onOk,
    onCancel,
    children
}) => {

    if(!visible) {
        return null
    }
    return (
        <div className="modalContainer">
            <div className="modalBackBox" onClick={onCancel}></div>
            <div className="modal">
            <div className="modalHeader">
                <div className="Modaltitle"> {title} </div>
                <div className="closeIcon" onClick={onCancel}>X</div>
            </div>
            <div className="modalBody">
                {children}
            </div>
            <div className="ModalFooter">
            <button className="btnGold" onClick={onOk}>ثبت</button>
            <button className="btnGold" onClick={onCancel}>بستن</button>
            </div>
        </div>
        </div>
    )
}

export default Modal