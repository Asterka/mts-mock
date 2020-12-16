import {React, useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import { Redirect, withRouter } from 'react-router-dom';


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



function LoginFrom({login}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
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

export default withRouter(LoginFrom);

// const SearchForm = () => {
//     const [keywords, setKeywords] = useState('')
//     const [fetchedData, setFetchedData] = useState('')
  
//     async function fetchData() {
//       const { data } = await axios.post(
//         'http://127.0.0.1:8000/api/posts/',
//         keywords
//       )
//       setFetchedData(data)
//     }
  
//     useEffect(() => {
//       fetchData()
//     }, [])
  
//     const handleSubmit = e => {
//       e.preventDefault()
//       fetchData()
//     }
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className="input-field">
//             <input
//               placeholder="Search whatever you wish"
//               type="text"
//               value={keywords}
//               onChange={e => setKeywords(e.target.value)}
//             />
//           </div>
//         </form>
//       </div>
//     )
//   }