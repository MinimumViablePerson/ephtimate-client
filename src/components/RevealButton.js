import React from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../actions'
import {countVotes} from '../helpers'

export function RevealButton({reveal, revealed, votes}) {
    return (
        <button className="primary-btn"
                onClick={revealed ? null : reveal} >
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

const RevealButtonContainer = connect(
    mapStateToProps,
    actionCreators
)(RevealButton)

export default RevealButtonContainer
