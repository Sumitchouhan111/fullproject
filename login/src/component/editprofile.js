import React, { useRef, useState } from 'react';
import addimg from '../addimg.png'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './border.css'
import { colors } from '@mui/material';
import axios from 'axios';
import { json } from 'react-router';


console.log(1212121);

function EditProfile() {
    console.log(121);


    const bioref=useRef('');
  
    
    const [img, setimg] = useState(null);

   async function upload(event) {

        console.log(1221233443443);
        
        

        const data = new FormData();
        data.append('file',img)
        data.append("upload_preset","mitragram")
        data.append("cloud_name","dswrhjozp")
        await fetch("https://api.cloudinary.com/v1_1/dswrhjozp/image/upload",{
          method:"post",
          body:data
        }).then((res)=>res.json()).
        then((data)=>{
            console.log(data.url);
            let s=""+data.url;
         
            console.log(s);
            
            

            async function updateprofile(params) {
                console.log(12121);
                
                try {
                    let up= await axios.put("http://localhost:4000/user/updateprofile",{
                        email:localStorage.getItem('email'),
                        profilepic:s

                    }, {
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }
                )
                   return alert("update profile successfully ");
                } catch (error) {
                  return  alert("we have some pls solve this error ");
                }
            }

            updateprofile();
           
            
        }).catch((err)=>{
          console.log("error",err);
          
        })
      }

       async function updatebio(params) {
          let bio=bioref.current.value;
         
          try {
            let upbio=await axios.put("http://localhost:4000/user/updatebio",{
                email:localStorage.getItem('email'),
                bio
            })
            alert("data update");
          } catch (error) {
            alert(error)
          }
       }

       

    return (

        <div className=" text-center " style={{ height: "100%", overflowY: "auto", padding: "10px",overflowX:"hidden", border: "1px solid #ccc" }}>
            <div className="row form-container">
               
                <div className="col-12 mb-4 form-container" style={{  padding: "15px", borderRadius: "5px" }}>

                    <h3 className='text-center text-info'>Update bio</h3>
                    
                    <Form >
                        <Form.Group   controlId="exampleForm.ControlTextarea1">
                           
                            <Form.Control  ref={bioref} className='form-container text-white' as="textarea" rows={2} />
                        </Form.Group>
                    </Form>
                    <button  className='btn btn-primary m-2 form-container' onClick={updatebio}>Update</button>
                </div>
                <div className="col-12 mb-4 form-container" style={{  padding: "15px", borderRadius: "5px" }}>
                    <Card style={{ width: "18rem" }} className="text-white bg-dark mx-auto form-container">
                        <Card.Img 
                            variant="top" 
                            src={img ? URL.createObjectURL(img) : addimg} 
                            style={{ height: "300px", objectFit: "cover" }} 
                        />
                        <Card.Body>
                            <input 
                                type="file" 
                                className="form-control mb-3 form-container text-white" 
                                onChange={(e) => setimg(e.target.files[0])} 
                            />
                            <Button className='form-container' variant="primary" onClick={upload}>Upload</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
