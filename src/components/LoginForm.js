import {React, useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';


function handle_name(e, setName){
    setName(e.target.value);
};

function handle_password(e, setPassword){
    setPassword(e.target.value);
};
function handle_submit(e, toDashboard, setToDashboard){
    e.preventDefault();
    setToDashboard(!toDashboard);
}



function LoginForm({login, setName, setPassword, name, password}) {

    const [toDashboard, setToDashboard] = useState(false);
    
    useEffect(() => {
        if(toDashboard === true){
            login();
        }
        
    }, [toDashboard])  
    return (
        <div>
            <form onSubmit={(e)=>{handle_submit(e, toDashboard,setToDashboard)}}>
                <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    name="username"
                    value={name}
                    onChange={(e)=>{handle_name(e, setName)}}
                />
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>{handle_password(e, setPassword)}}
                />
            <input type="submit"/>
        </form>
        </div>
    )
}

export default withRouter(LoginForm);