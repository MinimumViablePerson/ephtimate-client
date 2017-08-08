import React from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../actions'

let ClearTasksButton = ({tasks, clearTasks}) => {
    return tasks.isEmpty() ?
        null :
        <button className="primary-btn" onClick={clearTasks}>
            Clear Tasks
        </button>
}

const mapStateToProps = (state) => {
    return {
        tasks: state.get('tasks')
    }
}

ClearTasksButton = connect(
    mapStateToProps,
    actionCreators
)(ClearTasksButton)

export default ClearTasksButton
