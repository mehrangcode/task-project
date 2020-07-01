import React from 'react';
import Access from './Access';
import listIcon from "../assets/icon.svg"

const StatusBox = ({
    currentStatus,
    accessRole,
    statusChange
}) => {

    return (
        <span className="status"> 
            <Access role={accessRole}>
                <img className="icon" src={listIcon} alt=""/>
                <div className="stausHandler">
                    <p 
                    onClick={() => {statusChange("برای انجام")}}
                    style={{ backgroundColor: "royalblue" }}>برای انجام</p>
                    <p 
                    onClick={() => {statusChange("در حال انجام")}}
                    style={{ backgroundColor: "lightcoral" }}>در حال انجام</p>
                    <p 
                    onClick={() => {statusChange("انجام شد")}}
                    style={{ backgroundColor: "lightseagreen" }}>انجام شد</p>
                </div>
            </Access>
            {currentStatus}
        </span>
    )
}

export default StatusBox