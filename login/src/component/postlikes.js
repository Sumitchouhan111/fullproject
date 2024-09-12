import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Usermendata } from './Head'
import { useNavigate } from 'react-router'
import axios from 'axios'
function Postlikes() {
    let data = useContext(Usermendata);
    let [posts, setposts] = useState([]);

    const navigate=useNavigate();

    async function histry(params) {
        try {
            let his = await axios.post("http://localhost:4000/postlike/histrylikes", {
                userid: data.usermen.id
            })
            setposts(his.data.postdata)
            console.log(his);

        } catch (error) {
            alert("error in histry")
        }
    }

    useEffect(() => {
        histry();
    }, [data])

  
    async function seepost(postid) {  
        navigate(`/singlepost/${postid}`);
          }


    return (<div style={{ height: "100%", overflowY: "auto", padding: "10px", overflowX: "hidden", border: "1px solid #ccc" }}>
        <div className='row d-flex justify-content-center'>
            {posts.map((post, index) => (
                <div className='mt-2 m-1 form-container' style={{ width: "28%" }} onClick={()=>seepost(post.postid)}>
                    <img src={post.imgvideo} className='img-fluid' style={{ height: "25vw", width: "100%" }} />
                </div>
            ))}
        </div>
    </div>
    )
}

export default Postlikes