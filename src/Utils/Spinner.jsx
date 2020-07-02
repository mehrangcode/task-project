import React from 'react';
// import loader from "../assets/loading.svg"
// import loaderIcon from "../assets/loaderIcon.svg"
const Spinner = ({
    loading,
    msg,
    icon,
    text
}) => {
    
    if(icon) {
        if(loading) {
            return ( <div class="spIcon">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div> )
        }
        return (
            <span> {text} </span>
        )
    }
    if(loading){
        return <div className="spinner">
            <div className="loader"> {msg} </div>
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