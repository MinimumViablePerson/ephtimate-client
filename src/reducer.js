import {Map} from 'immutable'

function setState(state, newState) {
    return state.merge(newState)
}

function vote(state, estimate) {
    const task = state.get('task')
    if (task) {
        return state.set('hasVoted', estimate)
    }
    return state
}

function resetVote(state) {
    const task = state.get('task')
    if (task.isEmpty()) {
        return state.set('hasVoted', false)
    }
    return state
}

function estimate(state) {
    return state.remove('task')
}

export default function reducer(state=Map(), action) {
    switch (action.type) {
    case 'SET_STATE':
        return resetVote(setState(state, action.state))
    case 'VOTE':
        return vote(state, action.estimate)
    case 'ESTIMATE':
        return estimate(state)
    default:
        return state
    }
}