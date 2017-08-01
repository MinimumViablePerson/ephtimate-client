import React from 'react'
import {connect} from 'react-redux'
import {clearTasks} from '../actions'

let ClearTasksButton = ({dispatch}) => {
    return (
        <button className="primary-btn" onClick={() => dispatch(clearTasks())}>
            Clear Tasks
        </button>
    )
}

ClearTasksButton = connect()(ClearTasksButton)

export default ClearTasksButton
