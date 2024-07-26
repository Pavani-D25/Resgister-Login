// import React from 'react';
// import { Link } from 'react-router-dom';
// import './login.css';
// import {useState} from "react";
// import Axios from "axios";
// import { useNavigate} from "react-router-dom";

// function Login(props) {
//   const navigate=useNavigate();
//     const [email,setEmail]=useState("");
//     const[password,setPassword]=useState("");
//     const [loginStatus,setLoginStatus]=useState("");

// const login =()=>{
//     Axios.post("http://localhost:3001/login",{
//         email:email,
//         password:password
//     }).then((response)=>{
//         console.log(response);
//         if(response.data.message){
//             setLoginStatus(response.data.message);

//         }else {
//             setLoginStatus(response.data[0].email)
//             navigate('/dashboard', { state: { userData: response.data[0] } });
//         }
//     }).catch((error)=>{
//         console.log(error);
//     });
//     };
//     return (
//         <>
//         <div className="login">
//             <h1>Login</h1>
//             <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} /><br/>
//             <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} /><br/>
//             <button onClick={login}>Login</button>
//             <h3><Link to='/register'>Register here!</Link></h3>
//               <h3>{loginStatus}</h3>
//         </div>
//             </>
//     );
// }
// export default Login;







// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './login.css';
// import Axios from 'axios';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginStatus, setLoginStatus] = useState('');

//   const login = async () => {
//     try {
//       const response = await Axios.post('http://localhost:3001/login', {
//         email: email,
//         password: password
//       });
//       console.log(response);
//       if (response.data.message) {
//         setLoginStatus(response.data.message);
//       } else {
//         setLoginStatus('Login successful');
//         navigate('/dashboard', { state: { userData: response.data[0] } });
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setLoginStatus('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={login}>Login</button>
//       <h3>
//         <Link to="/register">Register here!</Link>
//       </h3>
//       <h3>{loginStatus}</h3>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const login = async () => {
    try {
      const response = await Axios.post('http://localhost:3001/login', {
        email: email,
        password: password
      });
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus('Login successful');
        navigate('/dashboard', { state: { userData: response.data[0] } });
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
      <h3>
        <Link to="/register">Register here!</Link>
      </h3>
      <h3>{loginStatus}</h3>
    </div>
  );
}

export default Login;
