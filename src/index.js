import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import App from './components/App'
import reducer from './reducer'
import remoteActionMiddleware from './remote_action_middleware'
import {setState} from './actions'
import {SERVER} from './settings'
import './index.css'

const socket = io(SERVER)

socket.on('state', state => {
    store.dispatch(setState(state))
})

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore)

const store = createStoreWithMiddleware(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
