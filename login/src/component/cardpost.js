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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='form-container ' style={{ height: '100vh', overflowY: 'auto',borderRadius:"1%" }}>
      <Card className='bg-white form-container mt-2 mb-2' sx={{ maxWidth: 345, margin: 'auto' }} style={{color:"white"}}>
        <CardHeader className="form-container" style={{borderRadius:"1%", color:"white"}}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" className='form-container'>
              <img src={gpg} style={{objectFit: 'cover', width: '100%', height: '100%'}}  />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" >
              <MoreVertIcon style={{color:"white"}} />
            </IconButton>
          }
         
          title="Shrimp and Chorizo Paella"
          
          subheader={
            <Typography style={{ color: 'white' }}>
              September 14, 2016
            </Typography>
          }
          
        />
        <div style={{ height: '350px', width: '100%' }}>
          <CardMedia
            component="img"
            height="194"
            image={logocha}
            alt="Paella dish"
           
            style={{ objectFit: 'cover', width: '100%', height: '350px',borderRadius:"0%" }}
            
          />
        </div>
       
        <CardActions disableSpacing className="form-container" style={{borderRadius:"1%"}}>
          <IconButton aria-label="add to favorites" className="form-container " style={{marginRight:"10px"}}>
            <FavoriteIcon style={{color:"white"}}   />
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
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
           
          </CardContent>
        </Collapse>
      </Card>



      <Card className='bg-white form-container mt-2 mb-2' sx={{ maxWidth: 345, margin: 'auto' }} style={{color:"white"}}>
        <CardHeader className="form-container" style={{borderRadius:"1%", color:"white"}}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" className='form-container'>
              <img src={gpg} style={{objectFit: 'cover', width: '100%', height: '100%'}}  />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" >
              <MoreVertIcon style={{color:"white"}} />
            </IconButton>
          }
         
          title="Shrimp and Chorizo Paella"
          
          subheader={
            <Typography style={{ color: 'white' }}>
              September 14, 2016
            </Typography>
          }
          
        />
        <div style={{ height: '350px', width: '100%' }}>
          <CardMedia
            component="img"
            height="194"
            image={logocha}
            alt="Paella dish"
           
            style={{ objectFit: 'cover', width: '100%', height: '350px',borderRadius:"0%" }}
            
          />
        </div>
       
        <CardActions disableSpacing className="form-container" style={{borderRadius:"1%"}}>
          <IconButton aria-label="add to favorites" className="form-container " style={{marginRight:"10px"}}>
            <FavoriteIcon style={{color:"white"}}   />
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
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
           
          </CardContent>
        </Collapse>
      </Card>



    </div>
  );
}
