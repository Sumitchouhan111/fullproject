import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import './border.css';
import logocha from '../logocha.png';
import gpg from '../gpg.webp';
import { useContext } from 'react';
import { Usermendata } from './Head';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';


var token =localStorage.getItem('token');

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [finalAllPostData, setFinalAllPostData] = useState([]);
  const navigate=useNavigate();
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var userdata = useContext(Usermendata);

  async function dataposts() {
    try {
      let allpostdata = await axios.post('http://localhost:4000/allpost/findpost', {
        userid: userdata.usermen.id
      });
      setFinalAllPostData(allpostdata.data.finalData);
      console.log("jay shree ram",finalAllPostData);
      
      setLoading(true);
    } catch (error) {
      alert("error in posts data fetch");
    }
  }

  useEffect(() => {
    dataposts();
  }, [userdata]);

  if (!loading) {
    return <div style={{ color: "aqua" }}>loading...</div>;
  }

  return (
    <div className='form-container' style={{ height: '100vh', overflowY: 'auto', borderRadius: "1%" }}>
      {finalAllPostData.map((postsdaa, index) => (
       
        <Card key={index} className='bg-white form-container mt-2 mb-2' sx={{ maxWidth: 345, margin: 'auto' }} style={{ color: "white" }}>
          <CardHeader className="form-container" style={{ borderRadius: "1%", color: "white" ,height:"60px"}}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" className='form-container'>
                <img src={postsdaa.user.profilepic||gpg} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="Avatar" />
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon style={{ color: "white" }} />
            //   </IconButton>
            // }
            title={postsdaa.user.username}
            subheader={
              <Typography style={{ color: 'white' }}>
                  <p style={{color:"white"}}>{postsdaa.createdAt}</p>
              </Typography>
            }
          />
          <div style={{ height: '350px', width: '100%' }}>
            <CardMedia
              component="img"
              height="194"
              image={postsdaa.imgvideo||logocha}
              alt="Paella dish"
              style={{ objectFit: 'fill', width: '345px', height: '100%', borderRadius: "0%" }}
            />
          </div>
          <CardActions disableSpacing className="form-container" style={{ borderRadius: "1%" }}>
          <IconButton 
          aria-label="add to favorites" 
          className="form-container" 
          style={{ marginRight: "10px" }} 
          onClick={() => {
            console.log(1212);
            
            let likeicon = document.getElementById(`like${postsdaa.postid}`)
            let color =likeicon.style.color;
            let total = document.getElementById(`totallike${postsdaa.postid}`)
            console.log("hi i am total ",typeof parseInt(total.innerText),total.innerText );
            

            if (color==="white") {
              console.log(color);
             likeicon.style.color="red"
             total.innerText=parseInt(total.innerText)+1;
            
             async function likepostumha(params) {
              
              try {
              let likesucessfull = await axios.post("http://localhost:4000/postlike/likepost",{
              postid:postsdaa.postid,
              userid:userdata.usermen.id
            },{
              headers: {
               Authorization: `Bearer ${token}` 
             }
           })
           console.log("like sussessfully ");
           
              } catch (error) {
                alert("error in like ")
              }
             }
            likepostumha();

            }
            else{
               likeicon.style.color="white"
               total.innerText=parseInt(total.innerText)-1;
               async function unlikeumha(params) {
                
                  try {
                    let unlike =await axios.delete("http://localhost:4000/postlike/delete",{
                      data:{
                        postid:postsdaa.postid,
                        userid:userdata.usermen.id
                      }
                     
                    ,
                      headers: {
                       Authorization: `Bearer ${token}` 
                     }
                   })

                   console.log("unlike sussessfully ");
                   
                } catch (error) {
                  alert("error in unlike");
                }
               }

               unlikeumha();
            }
            
          }}
>
 
         <FavoriteIcon id={`like${postsdaa.postid}`} style={{ color: postsdaa.likedByCurrentUser ? "red" :"white" }}  />;
  
</IconButton>
    <p id={`totallike${postsdaa.postid}`}>{postsdaa.totallike}</p>

            <IconButton aria-label="add to favorites" className="form-container" style={{ marginRight: "10px" }}>
              <CommentIcon style={{ color: "white" }} onClick={()=>navigate(`/commnetbox/${postsdaa.postid}`) }/>
            </IconButton>
            {/* <IconButton aria-label="share" style={{ color: "white", marginRight: "10px" }} className="form-container">
              <ShareIcon />
            </IconButton> */}
            <ExpandMore className="form-container"
              style={{ color: "white" }}
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>

        
            <CardContent style={{ color: "white" }}>
              <Typography paragraph>
               {postsdaa.caption}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}