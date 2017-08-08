import React from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../actions'

let VotingButton = ({option, tally, revealed, taskmaster, vote, estimate, task}) => {
    const hasVoted = window.localStorage.hasVoted
    
    const handleClick = (option) => {
        if (revealed && taskmaster) estimate(task.get('title'), option)
        else if (!revealed) vote(option, hasVoted)
    }

    const className = (revealed ? 'estimating-btn' : 'voting-btn') +
                      (taskmaster ? ' taskmaster' : '') +
                      ((option === hasVoted) ? ' active' : '')
    return (
        <button
            className={className}
            onClick={() => handleClick(option)} >
            <h2>{option}</h2>
            {revealed ? <span>{tally.get(option)}</span> : null}
        </button>
    )

}

const mapStateToProps = (state) => {
    return {
        task: state.get('task'),
        revealed: state.get('revealed'),
        tally: state.getIn(['task','tally'])
    }
}

VotingButton = connect(
    mapStateToProps,
    actionCreators
)(VotingButton)

export default VotingButton
