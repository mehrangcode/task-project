import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from "../../Actions/Auth/Actions";
import { FormCreator } from "../../Utils/FormController";
const Login = ({
    getFormItem,
    onFormSubmit,
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
            <h3> Login</h3>
            <div>
                <label htmlFor="userName">userName</label>
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
                
            <button type="submit" className="btnGold"> Login </button>
            </div>
        </form>
    )

}

export default FormCreator(Login)