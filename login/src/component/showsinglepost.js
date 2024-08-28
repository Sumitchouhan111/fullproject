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
import { useParams } from 'react-router-dom';
import './border.css';
import logocha from '../logocha.png';
import gpg from '../gpg.webp';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Usermendata } from './Head';

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



function Showsinglepost() {
  const { postdata } = useParams();
  const [pdata,setpdata]=useState({});
  const [postuser,setpostuser]=useState({});
  const [loding,setloading]=useState(true);
  const [color,setcolor]=useState("white");
  // var params;

  console.log('asfsdf',postdata);
  


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


   async function postdatafunction(params) {

  
      
   
    let postidint=parseInt(postdata)
    try {
      let finalpostdata=await axios.post("http://localhost:4000/post/findsinglepost",{
        postid:postidint
      })
      console.log("data axios successfully",finalpostdata.data.ans);
      
      setpdata( finalpostdata.data.ans);     
    } catch (error) {
      console.log("postaxios",error);
      
    }
    finally{
      setloading(false)
    }

  }

    async function checklike(params) {
      try {
        let result = await axios.post("http://localhost:4000/user/likepost",{
          
        })
      } catch (error) {
        
      }
    }


    useEffect(() => {
      postdatafunction();
    }, [postdata])

    useEffect(()=>{
      userpostdata();
    },[pdata])
    
   console.log("vikas",pdata);
    
   
    async function userpostdata(params) {
      console.log(12121);
      
      try {
        console.log(pdata.userId);
        
          let up= await axios.post("http://localhost:4000/user/findbyid",{
              id:pdata.userId
          }, {
              headers: {
                'Content-Type': 'application/json'
              }
            }
      )

      let s=up.data.ans;
     
  
         setpostuser(s);
      } catch (error) {
        console.log("dsfjsdljfl",error);
         
        // return  alert("we have  error some pls solve this error ");
      }
      
  }

  console.log("userpostdata",postuser);
  

  if (loding) {
    return <div style={{color:"aqua"}}>loding</div>
  }
  return (
    <div className='form-container ' style={{ height: '100vh', overflowY: 'auto',borderRadius:"1%" }}>
    <Card className='bg-white form-container mt-2 mb-2' sx={{ maxWidth: 345, margin: 'auto' }} style={{color:"white"}}>
      <CardHeader className="form-container" style={{borderRadius:"1%", color:"white"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" className='form-container'>
  
            <img src={postuser.profilepic} style={{objectFit: 'cover', width: '100%', height: '100%'}}  />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" >
            <MoreVertIcon style={{color:"white"}} />
          </IconButton>
        }
       
        title={postuser.username}
        
        subheader={
          <Typography style={{ color: 'white' }}>
         {pdata.createdAt}
          </Typography>
        }
        
      />
      <div style={{ height: '350px', width: '100%' }}>
        <CardMedia
          component="img"
          height="194"
          image={pdata.imgvideo}
          alt="Paella dish"
         
          style={{ objectFit: 'cover', width: '100%', height: '350px',borderRadius:"0%" }}
          
        />
      </div>
     
      <CardActions disableSpacing className="form-container" style={{borderRadius:"1%"}}>
        <IconButton aria-label="add to favorites" className="form-container " style={{marginRight:"10px"}}>
          <FavoriteIcon style={{color:color}}   />
        </IconButton>
        <IconButton aria-label="add to favorites" className="form-container" style={{marginRight:"10px"}}>
          <CommentIcon style={{color:"white"}}  />
        </IconButton>
        <IconButton aria-label="share" style={{color:"white",marginRight:"10px"}} className="form-container">
          <ShareIcon />
        </IconButton>
        <ExpandMore className="form-container"
        style={{color:"white"}}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{color:"white"}}>
         
          <Typography paragraph>
           {pdata.caption}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    </div>
  )
}

export default Showsinglepost;