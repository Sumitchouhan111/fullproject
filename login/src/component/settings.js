import React from 'react';
import { useNavigate } from 'react-router';
import  './border.css'; 


function Settings() {
  let navigate=useNavigate();
  function logout(params) {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
    window.location.reload();
  }

  function deletepost(params) {
    navigate('/deletepost')
  }

  async function likeposts(params) {
    navigate('/checkpostslikes');
  }

  return (
    <div style={{height:"100vh"}}>
      <h1 className='text-info settings d-flex justify-content-center'>Settings Page</h1>
       <div style={{height:"100%"}} className='d-flex justify-content-center align-items-center text-white'>
        
        <div className=' d-flex align-items-center justify-content-center  form-container p-3' style={{width:"60%",height:"60%"}}>
          
          <div className='d-flex row' style={{height:"100%"}}>
            <button style={{width:"80%",height:"40px"}} className=' btn btn-primary form-container' onClick={()=>logout()}>logout</button>
            <button  style={{width:"80%",height:"40px"}} className=' btn btn-primary form-container' onClick={()=> likeposts()}>like post</button>
            {/* <button  style={{width:"80%",height:"40px"}} className=' btn btn-primary form-container' onClick={()=>deletepost()}>delete post</button> */}
          </div>

        </div>

       </div>
    </div>
  );
}

export default Settings;
