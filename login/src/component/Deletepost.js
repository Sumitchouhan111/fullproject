// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react';
// import { useContext } from 'react';
// import { Usermendata } from './Head';
// import axios from 'axios';
// function Deletepost() {
//   let token = localStorage.getItem('token');
//   let [allpost,setallpost]=useState([]);
//   let data = useContext(Usermendata)

//   async function deletepost(postid) {
//     try {
//       let con =window.confirm("are you sure delete this post ");
//       if (con) {

//         let deltedata = await axios.delete("http://localhost:4000/post/deletepost",{
//           data:{
//             postid
//           }
//         },{
//           headers:{
//             Authorization: `Bearer ${token}`
//           }
//         })

//        let newdata=allpost;

//       let asdf= newdata.filter(post => post.postid!==postid)
//        console.log(newdata);
       
//        setallpost(asdf);
//        alert("data delete success full")
        
//       console.log(postid);
//     }
//     } catch (error) {
//       console.log(error);
      
//       alert("error in delete data ")
//     }
//   }

//   async function userpostdata(params) {

//     try {
//         let up= await axios.post("http://localhost:4000/post/findpost",{
//             userid:data.usermen.id
//         },{
//           headers: {
//            Authorization: `Bearer ${token}` 
//          }
//        }
//     )


//     let s=up.data.ans;
//     console.log(s);

//        return s;
//     } catch (error) {
//       return  alert("we have some pls solve this error ");
//     }
// }

//    useEffect(() => {
     
//    async function data(params) {
//     let data = await userpostdata();

//     setallpost(data);
//    }
//    data();
//    }, [])
   

//   return (
//     <div style={{ height: "100%", overflowY: "auto", padding: "10px",overflowX:"hidden", border: "1px solid #ccc" }}>
//     <div className='row d-flex justify-content-center'>
//     {allpost.map((post, index) => (
      
//       <div  className='mt-2 m-1 form-container' style={{width:"28%" }}>
//         <img src={post.imgvideo} className='img-fluid' style={{ height: "25vw", width: "100%" }} />
//         <button className='btn btn-primary form-container'  style={{width:"100%"}}
//         onClick={()=>deletepost(post.postid)} >delete</button>
//       </div>
     
//     ))}
//   </div>
//   </div>
//   )
// }


// export default Deletepost