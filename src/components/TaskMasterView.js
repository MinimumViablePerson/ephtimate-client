import React from 'react'

import AddTask from './AddTask'
import Voting from './Voting'
import TaskHistory from './TaskHistory'

function TaskMasterView() {
    return (
        <div className="task-master container">
            <AddTask />
            <Voting taskmaster />
            <TaskHistory taskmaster />
        </div>
    )
}

export default TaskMasterView
