import React from 'react'
import {connect} from 'react-redux'

import {reveal} from '../actions'
import {countVotes} from '../helpers'

let Reveal = ({dispatch, revealed, votes}) => {
    return (
        <button className="reveal-btn"
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

Reveal = connect(mapStateToProps)(Reveal)

export default Reveal