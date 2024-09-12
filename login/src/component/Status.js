import React, { useEffect } from 'react';
import gpg from '../gpg.webp';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
function Status() {
  const navigate = useNavigate();
  const [allpost,setallpost]=useState([]);
   
  async function postdataalluser(params) {
    try {
      let data = await axios.get('http://localhost:4000/post/postalluser')
      console.log(data.data.data);
      
      setallpost(data.data.data)
   } catch (error) {
     alert("error in  side fetch post data ");
   }
  }
   
  useEffect(() => {
   postdataalluser();
  }, [])
  
 
  
  async function seepost(params) {  
    const data = params.postid;
    console.log('dataa check',data);
    navigate(`/singlepost/${data}`);
  }
  return (
    <div className="bg-black d-flex justify-content-center row overflow-auto" style={{ height: "100%" }}>
          {allpost.map((post, index) => {
            return(
    <div  className='mt-2 m-1 form-container' style={{width:"28%" }} onClick={()=>seepost(post)}>
      <img src={post.imgvideo} className='img-fluid' style={{ height: "25vw", width: "100%" }} />
    </div>
            )
})}

    </div>

  );
}

export default Status;


// {Array.from({ length: 36 }).map((_, index) => (
//   <div className="cardd form-container m-3" style={{ width: "400px", padding: "10px", backgroundColor: "#333", borderRadius: "8px" }} key={index}>
//     <div className="d-flex align-items-center">
//       {/* Image on the left */}
//       <div  className='form-container' style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "50%" }}>
//         <img src={gpg} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover" }}  />
//       </div>
//       {/* Text on the right */}
//       <div className="ms-3" style={{ color: "white" }}>
//         <p style={{ color: "red", marginBottom: "0" }}>Your paragraph text here</p>
//         <p style={{ fontSize: "0.9em" }}>Additional details or text can go here.</p>
//       </div>
//     </div>
//   </div>
// ))}