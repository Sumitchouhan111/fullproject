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
import { useParams } from 'react-router-dom';
 function Anotheruserprofile() {
  const { uid } = useParams();
    const [userdata,setuserdata]=useState(null)
    const [allpost,setallpost]=useState(null);
    const [follow,setfollow]=useState('follow');
   
    console.log("asdf",userdata);
    console.log("jkl;",allpost);
    

    let userdataint = parseInt(uid);
    console.log('check data',typeof userdataint,userdataint ); 
    const data=useContext(Usermendata);
    console.log("sldfjlkdsfjdslfj",data.usermen.id);
    
   
    
    useEffect(() => {
      const fetchdata = async () => {
       let s = await name();
        setuserdata(s);
       let ss= await findfollow(); 
     

        const posts = await userpostdata();
        setallpost(posts);

      };
      fetchdata();
    }, [uid,follow]);
  

    const navigate=useNavigate();
   
        
 
  

    function handleClick(params) {
        navigate('/profile/editprofile');
    }

 
    async function followstar() {
    if (follow=="follow") {
      try {
        console.log("click over id ",data.usermen.id);
        console.log("click another id ",userdataint);
              
        const followdata = await axios.post("http://localhost:4000/follow/followstart",{
          userfollowid:data.usermen.id,
          userfollowingid:userdataint
        })
      
        setfollow("unfollow")
       
      } catch (error) {
       
        console.log(error);
        
        alert("error asdf")
      }
    }
    else{
      try {
        const Unfollow = await axios.delete("http://localhost:4000/follow/deleterelation",{
          data:{
            userfollowid:data.usermen.id,
            userfollowingid:userdataint
          }
         
        })

        setfollow("follow")
      } catch (error) {
        console.log(error);
        
        alert("error jkl;")
      }
    }  
    }
     

      async function name(params) {
        try {
          let sdata = await axios.post("http://localhost:4000/user/findbyid",{
            id:userdataint
          })
           
          console.log("another user data",data);
          
            
           let s=sdata;
           console.log("sumit1",s);
           
            return s;
            
          
        
        } catch (error) {
          console.log( error,"data not going on user ")
          alert('error');
        }
      }
    


   

    async function userpostdata(params) {
        console.log(12121);
        
        try {
            let up= await axios.post("http://localhost:4000/post/findpost",{
                userid:userdataint
            }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
        )

        let s=up.data.ans;
        console.log('sumit',up);
        
    
        
          
           return s;
        } catch (error) {
          return  alert("we have some pls solve this error ");
        }
    }

     
    async function findfollow(params) {
      try {
        let s =await axios.post("http://localhost:4000/follow/findfollow",{
          userfollowid:data.usermen.id,
          userfollowingid:userdataint
        })
        console.log("backendfectdata",s);
        
        if (s) {
          setfollow("Unfollow")
        }
        else{
          console.log("we are not follow this ");
          setfollow("follow")
        }
      } catch (error) {
        console.log("error");
        
      }
    }
      
      

      async function seepost(params) {

      const data = params.postid;
      console.log('dataa check',data);
      navigate(`/singlepost/${data}`);
     
    }
      
     if (allpost==null||userdata==null) {
       return <h1 style={{color:'aqua'}}>Loading...</h1>
     }
   

    return (
           
        <div style={{ height: "100%", overflowY: "auto", padding: "10px",overflowX:"hidden", border: "1px solid #ccc" }}>
        <div className=" rounded " >
             

            <div className="container profilecom p-2 rounded" >
                


             

                <div className="row m-1" >

                <h2 class="text-info " >{userdata.data.ans.username} </h2>
                    <div className="col-md-3 text-center">
                        <div className="rounded-circle bg-info" style={{width:'130px',height:"130px"}}>
                           
                            
                    <img src={userdata.data.ans.profilepic} alt="User Avatar" className="rounded-circle" style={{height:"130px", width:"130px"}}/>
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

<p style={{color:'aqua'}}>{userdata.data.ans.bio}</p>
</div>


                <div  >

            

                   
                      <button class="btn btn-primary form-container m-1" onClick={followstar}  >{follow}</button>
                   

                  

                        <button class="btn btn-primary form-container m-1" href="#">Message</button>
                   
                       
                    

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

export default Anotheruserprofile;