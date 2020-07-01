import React from 'react';

const SubTaskCard = ({subtask}) => {

    return (
        <div className="subtask">
            <div className="subTaskactionBar">
                {subtask.status}
            </div>
            <div className="subTaskContent">
                {subtask.description}
            </div>
        </div>
    )

}


export default SubTaskCard