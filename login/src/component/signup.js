import React from 'react'


import {useNavigate} from 'react-router-dom'
import { useRef } from 'react';
import  axios from 'axios';


function Signup() {
    const navigate=useNavigate();

  
    

  

   
    const handleClick=()=>{
        navigate('/')
    }

    const eref=useRef();
    const usernameref=useRef();
    const passref=useRef();


    async function sinupfunction() {
       
        console.log(12);
        

      let username =usernameref.current.value;
      let email=eref.current.value;
      let password=passref.current.value;
        try {
            const response = await axios.post('http://localhost:4000/user/create', {
              username,
              email,
              password,
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            window.alert(response.data.msg,'singup succefully')
            navigate('/');
            window.location.reload();
          } catch (error) {
            console.log("Error:", error.response.data);
            window.alert(error.response.data.msg, "Please try again");
          }
    }

    return (
        <div className="signuppage rounded" >

            <div className="container singupcom " >
                <p class="h3 text-primary text-center">sing up</p>

                <input ref={usernameref} placeholder="enter your username" className="form-control" />
                <input ref={eref} placeholder="enter your email" className="form-control" />
                <input ref={passref} placeholder="enter your password" className="form-control" />


                <div className="row m-1">
                    <div className="col-md-6"> <button className="btn btn-primary opacity-75 text-white" onClick={sinupfunction}>Singup</button></div>
                    <div className="col-md-6"> <a onClick={handleClick} className=" text-primary   ">  Login </a></div>
                 


                </div>


            </div>






        </div>


    )
}

export default Signup