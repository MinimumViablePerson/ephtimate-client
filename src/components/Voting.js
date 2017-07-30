import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../actions'

import VotingButton from './VotingButton'
import Waiting from './Waiting'
import Reveal from './Reveal'
import {OPTIONS} from '../settings'

export default function Voting({task, vote, revealed, hasVoted, estimate, taskmaster}) {

    const handleClick = (option) => {
        if (revealed && taskmaster) estimate(task.get('title'), option)
        else if (!revealed) vote(option, hasVoted)
    }

    const votingButtons = OPTIONS.map(option => {
        return <VotingButton
                key={option}
                option={option}
                handleClick={handleClick}
                active={hasVoted === option}
                revealed={revealed}
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
                    {(!revealed && taskmaster) && <Reveal />}
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
        hasVoted: state.get('hasVoted')
    }
}

export const VotingContainer = connect(
    mapStateToProps,
    actionCreators
)(Voting)