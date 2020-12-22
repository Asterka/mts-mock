import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Header from "./Header";
import LoginForm from "./LoginForm";
import Main from "./Main";

export default function AuthExample() {
  const [token, setToken] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  
  //Get documents
    function get_documents(token){
      return fetch(`http://3.23.57.97:8000/documents/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
          }
        })
    }
  return (
    <ProvideAuth userDetails={userDetails} setUserDetails={setUserDetails}>
      <Router basename="mts-mock">
          <AuthButton />
          <Switch>
            <Route path="/login">
              <LoginPage setToken={setToken} userDetails={userDetails} setUserDetails={setUserDetails}/>
            </Route>
            <PrivateRoute path="/main">
              <ProtectedPage get_documents={get_documents} token={token} userDetails={userDetails}/>
            </PrivateRoute>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}

// function cb (){
//   fetch('http://3.23.57.97:8000/users/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({username:"Test", first_name:"Askar", last_name:"Test", password:"12345"})
//     })
//       .then(res => res.json())
//       .then(json => {
//         //save the token
//         //localStorage.setItem('token', json.token);
//         console.log(json);
//       })
//       .catch(
//         (error)=>{
//           console.log(error);
//         }
//       );
// }

//Get token
function get_token (name, password){
  return fetch('http://3.23.57.97:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:name, password:password})
    })
}



function currentUser(token, setUserDetails){
  fetch('http://3.23.57.97:8000/users/current_user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
      .then(res => res.json())
        .then(json => {
          setUserDetails(json);
        })
        .catch(
          (error)=>{
            console.log(error);
          }
        );
}

const authContext = createContext();

function ProvideAuth({ children}) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}


function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (name, password, history, from, setToken, setUserDetails) => {
      get_token(name, password).then(res => res.json())
            .then(json => {
              if('token' in json){
                setToken(json.token);
                setUser('name');
                currentUser(json.token, setUserDetails);
                history.push(from);
                
              }
            })
            .catch(
              (error)=>{
              }
            );
      
  };

  const signout = () => {
      setUser(null);
      //TODO IMPLEMENT SIGN OUT FUNCTIONALITY
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
    </p>
  ) : (
    <div><Link to="/main">Click me</Link></div>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function ProtectedPage({get_documents, token, userDetails}) {
  return (<>
    <Header useHistory={useHistory} useAuth={useAuth}/>
    <Main get_documents={get_documents} token={token} userDetails={userDetails}/>
  </>)
}

function LoginPage({setToken, setUserDetails}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/main" } };
  
  let login = () => {
    auth.signin(name, password, history, from, setToken, setUserDetails);
  };

  return (
    <LoginForm login={login} setPassword={setPassword} setName={setName} name={name} password={password}/>
  );
}
