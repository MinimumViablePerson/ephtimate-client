import React from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../actions'

export function CancelTaskButton({task, cancelTask}) {
    return task.isEmpty() ?
        null :
        <button className="secondary-btn" onClick={cancelTask}>
            Cancel Task
        </button>
}

const mapStateToProps = (state) => {
    return {
        task: state.get('task')
    }
}

const CancelTaskButtonContainer = connect(
    mapStateToProps,
    actionCreators
)(CancelTaskButton)

export default CancelTaskButtonContainer
