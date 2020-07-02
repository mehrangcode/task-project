import React from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from "../../Actions/Auth/Actions";
import { FormCreator } from "../../Utils/FormController";
const Login = ({
    getFormItem,
    onFormSubmit,
    switchPanel
}) => {

    const dispatch = useDispatch()
    const onOk = (e) => {
        e.preventDefault();
        const values = onFormSubmit();
        if(!values.err){
            dispatch(loginRequest(values.data ))
        }
    }


    return (
        <form onSubmit={onOk} className="login">
            <h3> ورود</h3>
            <div>
                <label htmlFor="userName">نام کاربری</label>
                {getFormItem({
                    name:"userName",
                    rules: [
                        {
                            required: true,
                            msg: "نام کاربری را وارد نمایید"
                        }
                    ]
                },
                    <input
                    className="txtInput"
                    id="userName"
                    type="text"
                />)}
            </div>
            <div className="authFooter">
                
            <button type="submit" className="btnGold"> ورود </button>
                <button 
                onClick={switchPanel}
                type="button" 
                className="btnLink">پنل ثبت نام </button>
            </div>
        </form>
    )

}

export default FormCreator(Login)