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
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './border.css'




const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Serch() {

  let navigate=useNavigate();

   const [serchtext,setserchtext]=useState(null);
   const [catchserchdata,setcatchserchdata]=useState([]);

async function serchuserdata(params) {
  if (serchtext=="") {
   return setcatchserchdata([]);
  }
  try {
    let data = await axios.post('http://localhost:4000/user/serchuser',{
      serchdata:serchtext
    })
    setcatchserchdata(data.data.data);
    
  } catch (error) {
    console.log('error');
    
  }
}

useEffect(() => {
  serchuserdata();
}, [serchtext])

  
  return (
    <React.Fragment>
      <CssBaseline  />
      <Paper square sx={{ pb: '50px' }} className=' form-container '  style={{ height: "90%",overflow:"scroll", msOverflowY: "scroll", width: "100%", padding: "5px",overflowX:"hidden",borderRadius:"0px" }}>
        <Typography className='text-white' variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Serch : {serchtext}
        </Typography>
        <List sx={{ mb: 2 }} className='text-white form-container '>
          {console.log("inside div data",catchserchdata)}
          {
          catchserchdata.map((data) => (
            <React.Fragment key={data.id}>
              <ListItemButton  onClick={()=> navigate(`/anotheruserprofile/${data.id}`)}> 
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={data.profilepic} />
                </ListItemAvatar>
                <ListItemText primary={data.username}  />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar className='form-container' position="fixed" color="primary" sx={{ top: 'auto', bottom: 0,borderRadius:"0px" }}>
        <Toolbar  >
          
         
          <Box sx={{ flexGrow: 1 }} className="form-container" />

          <IconButton color="inherit">
          <SearchIcon  />
             <input className='form-control' onChange={  async (e)=>{  await setserchtext(e.target.value)}}/>
          </IconButton>
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}