import React from 'react';

const Login = () => {


    const onOk = (e) => {
        e.preventDefault()
        console.log("Ok")
    }


    return(
        <div className="login">
            <h3> Login</h3>

            <form onSubmit={onOk}>
                <label htmlFor="userName">userName</label>
                <input id="userName" type="text" name="userName" />

                <button type="submit"> Login </button>
            </form>
        </div>
    )

}

export default Login