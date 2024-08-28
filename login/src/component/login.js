import React, { useRef } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {
  const loginRef = useRef();
  const passwordRef = useRef();

  let s = localStorage.getItem('email') !== null;

  if (s) {
    return <Navigate to='/head' />
  }

  async function fetchPosts() {
    console.log(121);
    
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
    
    console.log('Username:', login); 
    console.log('Password:', password); 
    
    try {
      const response = await axios.post('http://localhost:4000/user/login', {
        login,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Login successful", response.data);
      localStorage.setItem("email", response.data.ans.email);
      localStorage.setItem("token",response.data.token)
      window.location.reload();
    } catch (error) {
      console.log("Error:", error.response.data);
      window.alert(error.response.data.msg, "Please try again");
    }
  }

  return (
    <div className="loginpage rounded">
      <div className="container logincom p-2 rounded">
        <p className="h3 text-primary">Log in</p>
        
        <input ref={loginRef} placeholder="Enter your email username" className="form-control" />
        <input ref={passwordRef} type="password" placeholder="Enter your password" className="form-control" />
        
        <div className="row m-1">
          <div className="col-md-6">
            <button className="btn btn-primary opacity-75 text-white" onClick={fetchPosts}>
              Log in
            </button>
          </div>
          <div className="col-md-6 text-primary">
            <a style={{ cursor: "pointer" }}>Forgot password</a>
          </div>
        </div>

        <div className="d-flex justify-content-center text-primary">
          <Link to='/singup' style={{ cursor: "pointer" }}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
