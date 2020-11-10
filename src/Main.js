import react from "react"
import ReactDOM from 'react-dom';
import {v4 as uuidv4} from "uuid"

import React, { Component } from 'react'

export default class Main extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{uuidv4()}</h1>
            </div>
        )
    }
}