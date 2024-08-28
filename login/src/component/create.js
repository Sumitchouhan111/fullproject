import React, { useState, useRef } from 'react';
import logocha from '../logocha.png'; 
import addimg from '../addimg.png'; 
import { Form } from 'react-router-dom';
import { useContext } from 'react';
import { Usermendata } from './Head';

import './border.css'
import axios from 'axios';


function Create() {
  const contentRef = useRef();
  const [img, setimg] = useState(null);
  const [content,setcontent]=useState('');
  const userdatamain=useContext(Usermendata);
  console.log("sfdsfdsf",userdatamain);
  

  function upload(event) {

    

    const data = new FormData();
    data.append('file',img)
    data.append("upload_preset","mitragram")
    data.append("cloud_name","dswrhjozp")
    fetch("https://api.cloudinary.com/v1_1/dswrhjozp/image/upload",{
      method:"post",
      body:data
    }).then((res)=>res.json()).
    then((data)=>{
        console.log(data.url);
        
        async function createpost(params) {
          console.log(12121);
          
          try {
              let up= await axios.post("http://localhost:4000/post/create",{
               
                imgvideo:data.url, caption:content, mediatype:"img",id:userdatamain.usermen.id

              }, {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
          )
             return alert("post create succesfull");
          } catch (error) {
            return  alert("we have some error pls solve this error ");
          }
      }

      createpost();

        
    }).catch((err)=>{
      console.log("error",err);
      
    })
  }



  return (
    <div className='d-flex justify-content-center align-items-center' style={{  width: "100%",height:"80vh" }}>
  <div className='rounded ' style={{ width: "50vw", backgroundColor: "black", color: "white" }}>
    <div className='d-flex justify-content-center mb-3'>
      <img src={img ? URL.createObjectURL(img) : addimg} alt="Add img" className='card-img-top mt-5' style={{ height: "50%", width: "40%", objectFit: "cover" }} />
    </div>
    <input type='file' className='bg-primary mb-3' style={{ width: "100%" }} onChange={(e) => setimg(e.target.files[0])} />
    <input
      className='mb-3 form-container'
      type='text'
      ref={contentRef}
      placeholder='Enter your post content'
      onChange={(e) => setcontent(e.target.value)}
      style={{ width: "100%" }}
      
    />
    <p className='card-text' style={{ height: "30px",overflow:"scroll", msOverflowY: "scroll", width: "100%", padding: "5px",overflowX:"hidden" }}>
      {content}
    </p>
    <a href="#" className='btn btn-primary mt-2' onClick={upload}>Upload</a>
  </div>
</div>

  );
}

export default Create;
