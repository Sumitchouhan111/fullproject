import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MovieIcon from '@mui/icons-material/Movie';
import MailIcon from '@mui/icons-material/Mail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import { Routes, Route, Navigate } from 'react-router';
import Home from './home';
import Profile from './profile';
import Notification from './notification';
import Settings from './settings';
import Create from './create';
import Msgbox from './msgbox';
import Reel from './reel';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { useNavigate } from 'react-router-dom';
import './border.css';
import Status from './Status';
import axios from 'axios';
import Showsinglepost from './showsinglepost';
import SearchIcon from '@mui/icons-material/Search';
import Serch from './Serch';
import Anotheruserprofile from './Anotheruserprofile';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'aqua',
});

const closedMixin  = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  backgroundColor: 'aqua',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
      },
    }),
  }),
);

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
  {text:'Serch',icon:<SearchIcon/>,path:'/serch'},
  { text: 'Reel', icon: <MovieIcon />, path: '/reel' },
  { text: 'Message', icon: <MailIcon />, path: '/inbox' },
  {text:"Status",icon:<AllInclusiveIcon/>,path:"/status"},
  { text: 'Create', icon: <AddCircleIcon />, path: '/create' },
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' }
  
  
];

var usermen='';

try {
  let data = await axios.post("http://localhost:4000/user/data",{
    email:localStorage.getItem('email')
  })
    usermen =data.data.ans;
    console.log(usermen);
    
  

} catch (error) {
  console.log( error,"data not going on user ")
}

export const Usermendata =React.createContext();

export default function Head() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <Box className='form-container' sx={{ display: 'flex', height: '100vh' }}  >
      <Drawer  variant="permanent" open={open} style={{backgroundColor:"white"}} >
        <Divider />
        <List >
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' } } >
              <Tooltip  title={item.text} placement="right" arrow>
                <ListItemButton  
                  onClick={() => navigate(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'black',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText  primary={item.text}  sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, padding: 0 }}>

      <Usermendata.Provider value={{usermen}}>
        <Routes>
         
          <Route path='/*' element={<Home />} />
          <Route path='/profile/*' element={<Profile />} />
          <Route path='/notifications' element={<Notification />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/create' element={<Create />} />
          <Route path="/inbox" element={<Msgbox />} />
          <Route path="/reel" element={<Reel />} />
          <Route path="/status" element={<Status/>}/>
          <Route path="/singlepost/:postdata" element={<Showsinglepost/>}/>
          <Route path="/serch" element={<Serch/>}/>
          <Route path='/anotheruserprofile/:uid' element={<Anotheruserprofile/>}/>
          
        </Routes>
        </Usermendata.Provider>

      </Box>
    </Box>
  );
}








{/* <div className='row'>
<div className='col-md-3 m-0 p-0' style={{ height: "100vh", backgroundColor: "#222831" }}>
   <Sidebar/>
</div>
<div className='col-md-9 m-0 p-0' style={{ height: "100vh", backgroundColor: "#222831" }}>
   <div style={{height:'100%'}}>
     
   </div>
</div>
</div> */}




