import React from 'react'
import {connect} from 'react-redux'

import Task from './Task'

export function TaskList({tasks}) {
    const taskList = tasks.isEmpty() ?
        'There are currently no estimated tasks.' :
        tasks.map(task => {
            const title = task.get('title')
            const estimate = task.get('estimate')
            return <Task key={title} title={title} estimate={estimate}/>
        })

    return <div className="task-list">{taskList}</div>
}

const mapStateToProps = (state) => {
    return {
        tasks: state.get('tasks')
    }
}

const TaskListContainer = connect(mapStateToProps)(TaskList)

export default TaskListContainer
