import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

const AuthPanel = () => {

    const [panelName, setPanelName] = useState("register")
    return(
        <div className="auth">
            {panelName === "register" ? (
                <Register switchPanel={() => setPanelName("login")} />
            ) : null}
            {panelName === "login" ? (
                <Login switchPanel={() => setPanelName("register")} />
            ) : null}
        </div>
    )
}

export default AuthPanel