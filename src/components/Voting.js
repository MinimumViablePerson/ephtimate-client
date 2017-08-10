import React from 'react'
import {connect} from 'react-redux'

import Waiting from './Waiting'
import RevealButton from './RevealButton'
import CancelTaskButton from './CancelTaskButton'
import VotingButtons from './VotingButtons'
import TaskTitle from './TaskTitle'

export function Voting({task, revealed, taskmaster}) {

    return (
        <div className="voting">
            <TaskTitle />
            {
                task.isEmpty() ?
                <Waiting /> :                
                <div>
                    <VotingButtons taskmaster={taskmaster}/>
                    {taskmaster && <CancelTaskButton />}
                    {(!revealed && taskmaster) && <RevealButton />}
                </div>
            }
        </div>
    )

}

function mapStateToProps(state) {
    return {
        task: state.get('task'),
        revealed: state.get('revealed'),
    }
}

const VotingContainer = connect(mapStateToProps)(Voting)

export default VotingContainer
