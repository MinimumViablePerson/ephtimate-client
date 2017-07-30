import React from 'react'
import {connect} from 'react-redux'
import {List} from 'immutable'

export default function TaskHistory({tasks}) {
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
            <h2 className="title">Task History</h2>        
            <div className="task-history-items">
                {
                    (taskList === [] || taskList === List()) ?
                    "You don't have any estimated tasks yet." :
                    taskList
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tasks: state.get('tasks')
    }
}

export const TaskHistoryContainer = connect(mapStateToProps)(TaskHistory)
