import React from 'react'

export default function VotingButton({option, handleClick, tally, revealed, active}) {
    return (
        <button
            className={revealed ? 'estimating-btn' : 'voting-btn'}
            style={(active && !revealed) ? {color: '#00ffe0', border: 'solid 2px #00ffe0'} : {}}
            onClick={() => handleClick(option)} >
            <h2>{option}</h2>
            {revealed ? <span>{tally}</span> : null}
        </button>
    )
}
