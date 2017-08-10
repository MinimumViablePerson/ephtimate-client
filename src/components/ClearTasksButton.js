import React from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../actions'

export function ClearTasksButton({tasks, clearTasks}) {
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

const ClearTasksButtonContainer = connect(
    mapStateToProps,
    actionCreators
)(ClearTasksButton)

export default ClearTasksButtonContainer
