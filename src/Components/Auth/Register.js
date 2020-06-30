import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerRequest } from "../../Actions/Auth/Actions";

const Register = () => {

    const [userName, setUserName] = useState("")
    const [role, setRole] = useState("admin")
    const dispatch = useDispatch()
    const onOk = (e) => {
        e.preventDefault()
        dispatch(registerRequest({
            userName,
            role
        }))

    }


    return (
        <form onSubmit={onOk} className="register">
                <h3> Register</h3>
                <div>
                    <label htmlFor="userName">userName</label>
                    <input
                        id="userName"
                        type="text"
                        name="userName"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <label htmlFor="role">Role: </label>
                    <select id="role"
                        value={role}
                        onChange={(event) => setRole(event.target.value)}>
                        <option key="admin"> Admin </option>
                        <option key="employee"> Employee </option>
                    </select>
                </div>
            <div className="authFooter">
                
            <button type="submit" className="authBtn"> Register </button>
            </div>
            </form>
    )

}

export default Register