import React from 'react';

const Register = () => {

    const onOk = (e) => {
        e.preventDefault()
        console.log("Ok")
    }


    return (
        <div className="register">
            <h3> Register</h3>

            <form onSubmit={onOk}>
            <label htmlFor="userName">userName</label>
                <input id="userName" type="text" name="userName" />

                <button type="submit"> Login </button>
            </form>
        </div>
    )

}

export default Register