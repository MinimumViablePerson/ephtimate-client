import React from 'react'

import TaskList from './TaskList'
import ClearTasksButton from './ClearTasksButton'

function TaskHistory({taskmaster}) {
    return (
        <div className="task-history">
            <h2 className="title">Estimated Tasks</h2>        
            <div className="task-history-items">
                <TaskList />
            </div>
                {taskmaster && <ClearTasksButton/>}
        </div>
    )
}

export default TaskHistory
