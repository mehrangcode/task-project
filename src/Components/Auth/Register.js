import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerRequest } from "../../Actions/Auth/Actions";
import { FormCreator } from "../../Utils/FormController";
import Select from '../../Utils/FormElements/Select/Select'

const Register = ({
    getFormItem,
    onFormSubmit,
}) => {
    
    const dispatch = useDispatch()
    const onOk = (e) => {
        e.preventDefault()
        const values = onFormSubmit();
        if(!values.err){
            dispatch(registerRequest(values.data))
        }
        

    }


    return (
        <form onSubmit={onOk} className="register">
                <h3> Register</h3>
                <div>
                    <label htmlFor="userName">userName</label>
                    {getFormItem({
                        name: "userName",
                        rules: [
                            {
                                required: true,
                                msg: "نام کاربری را تعیین نمایید"
                            }
                        ]
                    }, <input
                        id="userName"
                        type="text"
                    />)}
                    <label htmlFor="role">Role: </label>
                    {getFormItem({
                        name: "role",
                        initialvalue: "employee",
                        rules: [
                            {
                                required: true,
                                msg: "نقش را تعیین نمایید"
                            }
                        ]
                    }, 
                    <Select
                    optionList={
                        [
                            {id: "admin", title: "Admin"},
                            {id: "employee", title: "Employee"},
                        ]
                    }
                    />)}
                </div>
            <div className="authFooter">
                
            <button type="submit" className="btnGold"> Register </button>
            </div>
            </form>
    )

}

export default FormCreator(Register)