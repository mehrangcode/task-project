import React from 'react';
import { useDispatch } from 'react-redux';
import { registerRequest } from "../../Actions/Auth/Actions";
import { FormCreator } from "../../Utils/FormController";
import Select from '../../Utils/FormElements/Select/Select'

const Register = ({
    getFormItem,
    onFormSubmit,
    switchPanel
}) => {

    const dispatch = useDispatch()
    const onOk = (e) => {
        e.preventDefault()
        const values = onFormSubmit();
        if (!values.err) {
            dispatch(registerRequest(values.data))
        }


    }


    return (
        <form onSubmit={onOk} className="register">
            <h3> ثبت نام</h3>
            <div>
                <label htmlFor="userName">نام کاربری</label>
                {getFormItem({
                    name: "userName",
                    rules: [
                        {
                            required: true,
                            msg: "نام کاربری را تعیین نمایید"
                        }
                    ]
                }, <input
                    className="txtInput"
                    id="userName"
                    type="text"
                />)}
                <label htmlFor="role">نقش </label>
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
                                { id: "admin", title: "مدیر" },
                                { id: "employee", title: "کارمند" },
                            ]
                        }
                    />)}
            </div>
            <div className="authFooter">

                <button type="submit" className="btnGold"> ثبت نام </button>
                <button
                onClick={switchPanel}
                 type="button" className="btnLink">پنل ورود</button>
            </div>
        </form>
    )

}

export default FormCreator(Register)