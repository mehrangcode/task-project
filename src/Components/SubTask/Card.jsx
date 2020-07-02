import React from 'react';
import StatusBox from '../../Utils/StatusBox';
import Spinner from '../../Utils/Spinner';

const SubTaskCard = ({subtask, changeStatus, loading}) => {

    return (
        <div className="subtask">
            <Spinner loading={loading} msg="در حال انجام عملیات" />
            <div className="subTaskactionBar">
            <StatusBox 
                statusChange={(value) => changeStatus(value)}
                currentStatus={subtask.status} 
                accessRole="employee" />
                
            </div>
            <div className="subTaskContent">
                {subtask.description}
            </div>
        </div>
    )

}


export default SubTaskCard