import React from "react";
import ReactDOM from "react-dom";
export const EModalHide = () => {
    const mRoot= document.getElementById("modal-root");
    if(mRoot){
        ReactDOM.unmountComponentAtNode(mRoot)
    }
}
export const EModal = (error) => {
    let message = error;
    console.log(message)
    if(error.message){
        message = error.message
    }
    if(error.response){
        message = error.response.data.message
    }
    ReactDOM.render(<div className="emodalcontainer">
        <div className="EModal">
        <p>خطا :{message}</p>
        <button className="btnGold" onClick={EModalHide}>تایید</button>
    </div>
    </div>, document.getElementById('modal-root'))
}