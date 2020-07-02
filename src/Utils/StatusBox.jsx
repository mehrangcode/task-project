import React from 'react';
import Access from './Access';
import listIcon from "../assets/icon.svg";
import loadingIcon from "../assets/loading.svg";

const StatusBox = ({
    currentStatus,
    accessRole,
    statusChange,
    loading
}) => {

    return (
        <span className="status"> 
            <Access role={accessRole}>
                {loading ? (
                    <img className="icon" src={loadingIcon} alt=""/>
                ) : (
                    <img className="icon" src={listIcon} alt=""/>
                )}
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