import react from "react"
import ReactDOM from 'react-dom';
import {v4 as uuidv4} from "uuid"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import React, { Component } from 'react'

const Header = () => {

    return (
    <div className="navbar is-fluid">
    <div className="level is-fluid">
    <div className="level-left">
    <div className="navbar-brand">
        <a className="navbar-item" href="https://pagename.com">
            <img id="logo" src="http://3.23.57.97/static/MTS_logo.png"></img>
        </a>
    </div>
    </div>
    <div className="level-right">
            <div className="navbar-item">
                            <NotificationsIcon/>
            </div>
            <div className="navbar-item">
                            <MoreVertIcon/>
            </div>
            <div className="navbar-item">
                            <AccountCircleIcon/>
            </div>
    </div>
    </div>
    </div>

)
    
}

export default Header;