import React from 'react'

export default function VotingButton({option, hasVoted, handleClick, tally, revealed, taskmaster}) {
    const className = (revealed ? 'estimating-btn' : 'voting-btn') +
                      (taskmaster ? ' taskmaster' : '') +
                      (option.toString() === hasVoted ? ' active' : '')
    return (
        <button
            className={className}
            onClick={() => handleClick(option) } >
            <h2>{option}</h2>
            {revealed ? <span>{tally}</span> : null}
        </button>
    )
}
