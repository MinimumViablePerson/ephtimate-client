import React from 'react'
import {connect} from 'react-redux'

import {cancelTask} from '../actions'

let CancelTaskButton = ({dispatch}) => {
    return (
        <button className="secondary-btn" onClick={() => dispatch(cancelTask())}>
            Cancel Task
        </button>
    )
}

CancelTaskButton = connect()(CancelTaskButton)

export default CancelTaskButton
