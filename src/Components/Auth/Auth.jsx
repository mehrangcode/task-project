import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Spinner from '../../Utils/Spinner';
import { useSelector } from 'react-redux';

const AuthPanel = () => {

    const [panelName, setPanelName] = useState("login")
    const auth = useSelector(state => state.auth)
    return(
        <div className="auth">
            <Spinner loading={auth.loading} />
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