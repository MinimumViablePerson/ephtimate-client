import React from 'react'

import {VotingContainer} from './Voting'
import {TaskHistoryContainer} from './TaskHistory'

function TaskMasterView() {
    return (
        <div className="task-master container">
            <VotingContainer />
            <TaskHistoryContainer />
        </div>
    )
}

export default TaskMasterView