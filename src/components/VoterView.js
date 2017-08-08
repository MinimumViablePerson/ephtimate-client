import React from 'react'

import Voting from './Voting'
import TaskHistory from './TaskHistory'

function TaskMasterView() {
    return (
        <div className="task-master container">
            <Voting />
            <TaskHistory />
        </div>
    )
}

export default TaskMasterView
