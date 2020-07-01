import React from 'react';
import StatusBox from '../../Utils/StatusBox';

const SubTaskCard = ({subtask, changeStatus}) => {

    return (
        <div className="subtask">
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