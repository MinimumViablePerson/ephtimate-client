import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import {BrowserRouter} from 'react-router-dom'

import reducer from './reducer'
import {setState} from './actions'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import remoteActionMiddleware from './remote_action_middleware'
import './index.css'
import {SERVER} from './settings'

const socket = io(SERVER)

socket.on('state', state => {
    store.dispatch(setState(state))
})

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore)

const store = createStoreWithMiddleware(reducer)

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
