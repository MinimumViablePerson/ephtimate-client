import React from 'react'
import {connect} from 'react-redux'

export function TaskTitle({title, revealed}) {
    return !title ?
        null :        
        <div className="now-voting">
            <h2 className={revealed ? 'estimating-title' : 'voting-title'}>
                {revealed ? 'NOW ESTIMATING:' : 'NOW VOTING:'}
            </h2>
            <span className="task-title">{title}</span>
        </div>
}

function mapStateToProps(state) {
    return {
        title: state.getIn(['task', 'title']),
        revealed: state.get('revealed'),
    }
}

const TaskTitleContainer = connect(mapStateToProps)(TaskTitle)

export default TaskTitleContainer
