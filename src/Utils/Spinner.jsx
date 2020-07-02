import React from 'react';
import loader from "../assets/loading.svg"
import loaderIcon from "../assets/loaderIcon.svg"
const Spinner = ({
    loading,
    msg,
    icon,
    text
}) => {
    
    if(icon) {
        if(loading) {
            return ( <span className="loader"> <img className="spinnerIcon" src={loaderIcon} alt="بارگذاری"/>  </span> )
        }
        return (
            <span> {text} </span>
        )
    }
    if(loading){
        return <div className="spinner">
            <img src={loader} alt="بارگذاری"/>
            <p>
                {msg}
            </p>
        </div>
    }
    return null
    
}

Spinner.defaultProps = {
    msg: 'در حال دریافت اطلاعات'
  };
export default Spinner