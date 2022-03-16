import React, {Component} from 'react'
import {useHistory} from 'react-router-dom'

function Welcome() {
    let history = useHistory();
    return(
        <div>
            <h1>
                In between Game
            </h1>
            <button
            onClick={() =>
            history.push('/Game')
            }>
                Play
            </button>
        </div>
    )
}

export default Welcome;