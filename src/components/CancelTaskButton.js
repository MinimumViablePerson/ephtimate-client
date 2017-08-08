import React from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../actions'

let CancelTaskButton = ({task, cancelTask}) => {
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

CancelTaskButton = connect(
    mapStateToProps,
    actionCreators
)(CancelTaskButton)

export default CancelTaskButton
