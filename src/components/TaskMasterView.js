import React from 'react'

import AddTask from './AddTask'
import {VotingContainer} from './Voting'
import {TaskHistoryContainer} from './TaskHistory'

function TaskMasterView() {
    return (
        <div className="task-master container">
            <AddTask />
            <VotingContainer taskmaster />
            <TaskHistoryContainer taskmaster />
        </div>
    )
}

export default TaskMasterView
