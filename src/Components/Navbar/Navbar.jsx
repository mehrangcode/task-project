import React from 'react';
import logout from '../../assets/logout.svg'
import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from '../../Actions/Auth/Actions'
const Navbar = () => {

    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.auth)
    return (
        <div className="navbar">
            <h1>کارتابل</h1>
                {currentUser.isAuth && <img 
                onClick={() => dispatch(logOutRequest())}
                className="logout" src={logout} alt="خروج"/>}
        </div>
    )
}

export default Navbar