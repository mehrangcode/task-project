import React from 'react';
import { useSelector } from 'react-redux';

const Access = ({role, children}) => {

    const currentUser = useSelector(state => state.auth)
    if(!currentUser.data){
        return null
    }
    if(!currentUser.data.role  || currentUser.data.role !== role) {
        return null
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default Access