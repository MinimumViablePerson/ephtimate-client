import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions'

let AddTask = ({dispatch, task}) => {
    let input
    const addTaskElement = (
        <div className="add-task">
            <form onSubmit={(e) => {
                e.preventDefault()
                if (input.value.length > 2) {
                    dispatch(addTask(input.value))
                    input.value = ''
                }
            }}>
                <input ref={node => input = node}
                    placeholder="Add a task..." />
                <button className="add-btn">
                    Add
                </button>
            </form>
        </div>
    )

    return task.isEmpty() ? addTaskElement : null
}

const mapStateToProps = (state) => {
    return {
        task: state.get('task')
    }
}

AddTask = connect(mapStateToProps)(AddTask)

export default AddTask
