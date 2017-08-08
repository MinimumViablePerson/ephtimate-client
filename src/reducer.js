import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
    task: {},
    tasks: []
})

function setState(state, newState) {
    return state.merge(newState)
}

function vote(state, estimate) {
    const task = state.get('task')
    if (task) {
        window.localStorage.hasVoted = estimate
    }
    return state
}

function resetVote(state) {
    const task = state.get('task')
    if (task.isEmpty()) {
        window.localStorage.removeItem('hasVoted')
    }
    return state
}

export default function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
    case 'SET_STATE':
        return resetVote(setState(state, action.state))
    case 'VOTE':
        return vote(state, action.estimate)
    default:
        return state
    }
}
