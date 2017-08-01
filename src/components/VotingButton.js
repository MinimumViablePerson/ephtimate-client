import React from 'react'

export default function VotingButton({option, handleClick, tally, revealed, active, taskmaster}) {
    const className = (revealed ? 'estimating-btn' : 'voting-btn') + (taskmaster ? ' taskmaster' : '')
    return (
        <button
            className={className}
            style={(active && !revealed) ? {color: '#00c7ff', border: 'solid 2px #00c7ff'} : {}}
            onClick={() => handleClick(option)} >
            <h2>{option}</h2>
            {revealed ? <span>{tally}</span> : null}
        </button>
    )
}
