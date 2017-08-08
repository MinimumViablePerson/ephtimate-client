import React from 'react'

import TaskList from './TaskList'
import ClearTasksButton from './ClearTasksButton'

export default function TaskHistory({clearTasks, taskmaster}) {
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
