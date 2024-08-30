import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import './border.css';
var token = localStorage.getItem("token")
const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function CheckFollowList() {
  const { uid } = useParams();
  const [followUserData, setFollowUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
console.log(1212);


  async function fetchFollowData() {
    try {
      const response = await axios.post("http://localhost:4000/follow/findfollow_withuserdata", {
        userid: parseInt(uid)
      },{
        headers: {
         Authorization: `Bearer ${token}` 
       }
     });
      setFollowUserData(response.data.ans);
      console.log(response);
      
      setLoading(false); 
    } catch (error) {
      alert("Error in fetching follow data");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFollowData();
  }, []);

  
  if (loading) {
    return <div style={{ color: "red" }}>Loading...</div>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }} className='form-container' style={{ height: "90%", overflow: "scroll", width: "100%", padding: "5px", overflowX: "hidden", borderRadius: "0px" }}>
        <List sx={{ mb: 2 }} className='text-white form-container'>
          {followUserData.map((data) => (
            <React.Fragment key={data.id}>
              <ListItemButton onClick={()=>navigate(`/anotheruserprofile/${data.id}`)}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={data.profilepic} />
                </ListItemAvatar>
                <ListItemText primary={data.username} />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
    
  );
}












// import React, { useEffect, useState, useContext } from 'react';
// import { styled } from '@mui/material/styles';
// import {
//   Card, CardHeader, CardMedia, CardContent, CardActions,
//   Collapse, Avatar, IconButton, Typography
// } from '@mui/material';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CommentIcon from '@mui/icons-material/Comment';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Usermendata } from './Head';
// import './border.css';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// function Showsinglepost() {
//   const { postdata } = useParams();
//   const [pdata, setPdata] = useState({});
//   const [postuser, setPostuser] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [color, setColor] = useState("white");
//   const [expanded, setExpanded] = useState(false);

//   const userdata = useContext(Usermendata);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const fetchPostData = async () => {
//     const postidint = parseInt(postdata);
//     try {
//       const { data } = await axios.post("http://localhost:4000/post/findsinglepost", { postid: postidint });
//       setPdata(data.ans);
//     } catch (error) {
//       console.error("Error fetching post data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const checkLikeStatus = async () => {
//     try {
//       const postid = parseInt(postdata);
//       const { data } = await axios.post("http://localhost:4000/postlike/finduserpostlike", {
//         postid: userdata.usermen.id,
//         userid: postid
//       });
//       console.log("Like status:", data);
//     } catch (error) {
//       console.error("Error checking like status", error);
//     }
//   };

//   const fetchUserData = async () => {
//     try {
//       const { data } = await axios.post("http://localhost:4000/user/findbyid", {
//         id: pdata.userId
//       });
//       setPostuser(data.ans);
//     } catch (error) {
//       console.error("Error fetching user data", error);
//     }
//   };

//   useEffect(() => {
//     fetchPostData();
//     checkLikeStatus();
//   }, [postdata]);

//   useEffect(() => {
//     if (pdata.userId) {
//       fetchUserData();
//     }
//   }, [pdata]);

//   if (loading) {
//     return <div style={{ color: "aqua" }}>Loading...</div>;
//   }

//   return (
//     <div className="form-container" style={{ height: '100vh', overflowY: 'auto', borderRadius: "1%" }}>
//       <Card sx={{ maxWidth: 345, margin: 'auto', color: "white" }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }}>
//               <img src={postuser.profilepic} alt="User Avatar" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon style={{ color: "white" }} />
//             </IconButton>
//           }
//           title={postuser.username}
//           subheader={
//             <Typography style={{ color: 'white' }}>
//               {pdata.createdAt}
//             </Typography>
//           }
//         />
//         <CardMedia
//           component="img"
//           height="350"
//           image={pdata.imgvideo}
//           alt="Post Image"
//           style={{ objectFit: 'cover', width: '100%', borderRadius: "0%" }}
//         />
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites" onClick={() => setColor(color === "white" ? "red" : "white")}>
//             <FavoriteIcon style={{ color }} />
//           </IconButton>
//           <IconButton aria-label="add a comment">
//             <CommentIcon style={{ color: "white" }} />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon style={{ color: "white" }} />
//           </IconButton>
//           <ExpandMore
//             expand={expanded}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon style={{ color: "white" }} />
//           </ExpandMore>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent style={{ color: "white" }}>
//             <Typography paragraph>
//               {pdata.caption}
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//     </div>
//   );
// }

// export default Showsinglepost;
