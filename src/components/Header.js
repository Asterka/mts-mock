import react from "react"
import ReactDOM from 'react-dom';
import {v4 as uuidv4} from "uuid"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import React, { Component } from 'react'

const Header = ({useHistory, useAuth}) => {
    let history = useHistory();
    let auth = useAuth();

    return (

    <div className="container is-fluid header">
        <div className="level is-mobile" style={{width:"100%"}}>
            <div className="level-left">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://pagename.com">
                        <img id="logo" src="http://3.23.57.97/static/MTS_logo.png"></img>
                    </a>
                </div>
            </div>
            <div className="level-right is-mobile">
                    <div className="navbar-item">
                                    <NotificationsIcon/>
                    </div>
                    <div className="navbar-item">
                        
                                    <MoreVertIcon/>
                    </div>
                    <div className="navbar-item ">
                                    <div className="dropdown is-hoverable">
                                        <div className="dropdown-trigger">
                                            <AccountBoxIcon aria-haspopup="true" aria-controls="dropdown-menu4"/>
                                        </div>
                                        <div className="dropdown-menu"  style={{left: "-100px"}} id="dropdown-menu4" role="menu">
                    
                    <div className="dropdown-content">
                      <div className="dropdown-item">
                        <div className="menu">
                          <p className="menu-label" onClick={()=>{ auth.signout(() => history.push("/login"))}}>
                            Log out
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                                    </div>
                    </div>
            </div>
        </div>
    </div>

)
    
}

export default Header;