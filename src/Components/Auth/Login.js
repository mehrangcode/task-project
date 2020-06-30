import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from "../../Actions/Auth/Actions"
const Login = () => {
    const [userName, setUserName] = useState("")

    const dispatch = useDispatch()
    const onOk = (e) => {
        e.preventDefault()
        dispatch(loginRequest({ userName }))
    }


    return (
        <form onSubmit={onOk} className="login">
            <h3> Login</h3>
            <div>
                <label htmlFor="userName">userName</label>
                <input
                    value={userName}
                    id="userName"
                    type="text"
                    name="userName"
                    onChange={(event) => setUserName(event.target.value)}
                />
            </div>
            <div className="authFooter">
                
            <button type="submit" className="authBtn"> Login </button>
            </div>
        </form>
    )

}

export default Login