import React from 'react'

function Task({title, estimate}) {
    return (
        <div className="task-history-item" key={title}>
                {`${title} (${estimate})`}
        </div>
    )
}

export default Task
