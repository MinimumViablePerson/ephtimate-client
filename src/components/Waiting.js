import React from 'react'

import WaitingImg from '../assets/waiting.gif'

export default function Waiting() {
    return (
        <div className="waiting">
            <h1>Waiting for a task...</h1>
            <img src={WaitingImg} alt="floating house and zeppelin" />
        </div>
    )
}
