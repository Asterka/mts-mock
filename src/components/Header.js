import react from "react"
import ReactDOM from 'react-dom';
import {v4 as uuidv4} from "uuid"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import React, { Component } from 'react'

const Header = () => {

    return (
            <div className="header">
                <div className="logo">
                    <img id="logo" src="https://static.ssl.mts.ru/mts_rf/images/MTS_Logo_rus_r.png?_ga=2.28346236.1349828396.1606072244-1796690475.1606072244&_gl=1*1l81xjo*_ga*MTc5NjY5MDQ3NS4xNjA2MDcyMjQ0*_ga_DJC0PYZJHN*MTYwNjA3MjI0NC4xLjAuMTYwNjA3MjI0NC42MA.."></img>
                </div>
                <div className="navbar-items">
                    <NotificationsIcon/>
                    <MoreVertIcon/>
                    <AccountCircleIcon/>
                </div>
                
            </div>
        )
    
}

export default Header;