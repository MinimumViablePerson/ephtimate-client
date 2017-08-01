import React from 'react'
import {connect} from 'react-redux'

import {reveal} from '../actions'
import {countVotes} from '../helpers'

let RevealButton = ({dispatch, revealed, votes}) => {
    return (
        <button className="primary-btn"
                onClick={revealed ? null : () => dispatch(reveal())}>
            Reveal Votes ({votes})
        </button>
    )
}

const mapStateToProps = (state) => {
    return {
        revealed: state.get('revealed'),
        votes: countVotes(state.getIn(['task', 'tally']))
    }
}

RevealButton = connect(mapStateToProps)(RevealButton)

export default RevealButton