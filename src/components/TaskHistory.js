import React from 'react'
import {connect} from 'react-redux'
import {List} from 'immutable'

import ClearTasksButton from './ClearTasksButton'

export default function TaskHistory({tasks, clearTasks, taskmaster}) {
    tasks = tasks || []

    const taskList = tasks.map(task => {
        const title = task.get('title')
        const estimate = task.get('estimate')
        return <div className="task-history-item" key={title}>
                {`${title} (${estimate})`}
               </div>
    })

    return (
        <div className="task-history">
            <h2 className="title">Estimated Tasks</h2>        
            <div className="task-history-items">
                {
                    (tasks === [] || tasks === List()) ?
                    "You don't have any estimated tasks yet." :
                    taskList
                }
            </div>
            {
                (tasks === [] || tasks === List()) ?
                null :
                taskmaster && <ClearTasksButton />
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tasks: state.get('tasks')
    }
}

export const TaskHistoryContainer = connect(
    mapStateToProps
)(TaskHistory)
