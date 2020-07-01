import React from 'react';
import TaskList from '../Tasks/List';

const Panel = () => {

    return (
        <div className="Panel">
            <TaskList />
            
            <div className="fab">+ </div>
        </div>
    )
}

export default Panel