import React from 'react'

import {OPTIONS} from '../settings'
import VotingButton from './VotingButton'

function VotingButtons({taskmaster}) {

    const votingButtons = OPTIONS.map(option => {
        return <VotingButton
                key={option}
                option={option.toString()}
                taskmaster={taskmaster} />
    })

    return <div className="voting-buttons">{votingButtons}</div>

}

export default VotingButtons
