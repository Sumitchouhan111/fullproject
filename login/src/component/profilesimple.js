import React from 'react'

import {useNavigate} from 'react-router-dom'
import { Usermendata } from './Head';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './border.css'
import png from '../logocha.png'
import gpg from '../gpg.webp'
import axios from 'axios';
function Profilesimple() {

    const data=useContext(Usermendata);
    console.log(data.usermen.id);
    

    const navigate=useNavigate();
    const [allpost,setallpost]=useState([]);
        
 
  

    function handleClick(params) {
        navigate('/profile/editprofile');
    }

    async function userpostdata(params) {
        console.log(12121);
        
        try {
            let up= await axios.post("http://localhost:4000/post/findpost",{
                userid:data.usermen.id
            }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
        )

        let s=up.data.ans;
        console.log(s);
        
    
        
          
           return s;
        } catch (error) {
          return  alert("we have some pls solve this error ");
        }
    }

     
    useEffect(() => {
        const fetchdata = async () => {
          const posts = await userpostdata();
          setallpost(posts);
          
         
          
        };
        fetchdata();
      }, []);


      async function seepost(params) {
       
      
    const data = params.postid;
    console.log('dataa check',data);
    
   

    navigate(`/singlepost/${data}`);
      }
      
     
   

    return (
           
        <div style={{ height: "100%", overflowY: "auto", padding: "10px",overflowX:"hidden", border: "1px solid #ccc" }}>
        <div className=" rounded " >
             

            <div className="container profilecom p-2 rounded" >
                


             

                <div className="row m-1" >

                <h2 class="text-info " >{data.usermen.username} </h2>
                    <div className="col-md-3 text-center">
                        <div className="rounded-circle bg-info" style={{width:'130px',height:"130px"}}>
                           
                            
                    <img src={data.usermen.profilepic} alt="User Avatar" className="rounded-circle" style={{height:"130px", width:"130px"}}/>
                    </div>

                       


                    </div>

                    
                    <div className="col text-info text-center mt-2">
                    <p className='text-info  mb-0'>{allpost.length}</p>
                        <h4 class="fw-normal text-info " >Post</h4>

                    </div>


                    <div className="col text-info text-center mt-2">
                    <p className='text-info  mb-0'>0</p>
                        <h4 class="fw-normal text-info " >followers</h4>

                    </div>

                    <div className="col text-center mt-2">
                    <p className='text-info  mb-0'>0</p>
                        <h4 class="fw-normal text-info ">following</h4>
                    </div>


                </div>
                

                <div className="col ">

<p style={{color:'aqua'}}>{data.usermen.bio}</p>
</div>


                <div  >

            

                   
                        <button class="btn btn-primary form-container m-1" onClick={handleClick} >Edit profile</button>
                   

                  

                        <button class="btn btn-primary form-container m-1" href="#">Share profile</button>
                   
                       
                    

                </div>



            </div>
            <hr className='form-container'/>
          
            <div class="container text-center">
        
      


<div className='row d-flex justify-content-center'>
  {allpost.map((post, index) => (
    <div  className='mt-2 m-1 form-container' style={{width:"28%" }} onClick={()=>seepost(post)}>
      <img src={post.imgvideo} className='img-fluid' style={{ height: "25vw", width: "100%" }} />
    </div>
  ))}
</div>


       

</div>
        </div>
        </div>
    )

}

export default Profilesimple;