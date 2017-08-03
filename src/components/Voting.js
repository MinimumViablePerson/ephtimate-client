import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../actions'

import VotingButton from './VotingButton'
import Waiting from './Waiting'
import RevealButton from './RevealButton'
import CancelTaskButton from './CancelTaskButton'
import {OPTIONS} from '../settings'

export default function Voting({task, vote, revealed, estimate, taskmaster}) {
    const hasVoted = window.localStorage.hasVoted

    window.getVote = () => {console.log(hasVoted)}

    const handleClick = (option) => {
        if (revealed && taskmaster) estimate(task.get('title'), option)
        else if (!revealed) vote(option, hasVoted)
    }

    const votingButtons = OPTIONS.map(option => {
        return <VotingButton
                key={option}
                option={option}
                handleClick={handleClick}
                hasVoted={hasVoted}
                revealed={revealed}
                taskmaster={taskmaster}
                tally={
                    task && task.get('tally') ?
                    task.get('tally').get(option.toString()) :
                    null
                } />
    })

    const taskTitle = (task && !task.isEmpty()) ?
        <div className="now-voting">
            <h2 className={revealed ? 'estimating-title' : 'voting-title'}>
                {revealed ? 'NOW ESTIMATING:' : 'NOW VOTING:'}
            </h2>
            <span className="task-title">{task.get('title')}</span>
        </div> :
        null

    return (
        <div className="voting">
            {taskTitle}
            {
                (task && !task.isEmpty()) ?
                <div>
                    <div className="voting-buttons">
                        {votingButtons}
                    </div>
                    {(taskmaster && task) && <CancelTaskButton />}
                    {(!revealed && taskmaster) && <RevealButton />}
                </div> :
                !taskmaster && <Waiting />
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

export const VotingContainer = connect(
    mapStateToProps,
    actionCreators
)(Voting)