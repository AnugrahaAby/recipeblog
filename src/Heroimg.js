import React from 'react';
import pic from './Images/Rectangle 20.png';
import image from './Images/rounded 1.png';
import image2 from './Images/rounded 2.jpg';
import image3 from './Images/rounded 3.png';
import image4 from './Images/rounded 4.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { styled } from '@mui/material/styles';
import { Paper, IconButton, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const styles = {
  paper: {
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#C4D600',
    borderRadius: '10px',
    position: 'relative',
  },
  arrowButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'white'
  }
};

const Heroimg = () => {
 
  const [Album, setAlbum] = useState([]);

  useEffect(() => {
   

    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => setAlbum(data.recipes))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="Heroimg">
     

      <Grid container sx={{ marginTop: 2,marginBottom: 4}}>
        <Grid item xs={12}>
          <Box
            component="img"
            src={pic}
            alt="Curved Image"
            sx={{
              width: '100%',              
              height:"100%",
            }}
          />
        </Grid>
      
      </Grid>



function Heroimg() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>

        <Box
         sx={{ml:12, mt:6, width:"1264px", height:"355px", radius:"30px"}}
  
        >
        <img
            src={pic} 
            alt="Placeholder"
            sx={{width: '100%', height: 'auto', display: 'block' }}
        />
    
        <Typography
            variant="h2"
            sx={{
            top: '190px',
            left:'120px',
            position: 'absolute',
            color: '#DC582A',
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '30.48px',
            }}
            >
              Trending now
            </Typography>
            <Typography
              variant="h3"
              sx={{
                position: 'absolute',
                top: '220px', // Adjust positioning based on your design
                left: '120px', // Adjust positioning based on your design
                color: '#FFFFFF',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '50.8px',
              }}
            >
              Milk's famous salad
            </Typography>
            <Typography
              variant="h3"
              sx={{
                position: 'absolute',
                top: '260px', // Adjust positioning based on your design
                left: '120px', // Adjust positioning based on your design
                color: '#FFFFFF',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '50.8px',
              }}
            >
              with cheese
            </Typography>
            <Typography
              variant="h3"
              sx={{
                position: 'absolute',
                top: '310px', // Adjust positioning based on your design
                left: '120px', // Adjust positioning based on your design
                color: '#FFFFFF',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '25.4px',
              }}
            >
              Italian
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2} ml={12} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Breakfast</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid>
      
        <Grid item xs={12} sm={6} md={4} lg={2} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Dinner</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Desert</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Snacks</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Lunch</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ ml:12,mt:4,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ mt:4,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image2}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
        </Grid>

        <Grid item xs={3}>
        <Card sx={{ mt:4,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image3}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
        </Grid>

        <Grid item xs={3}>
      <Card sx={{  mt:4,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image4}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>

       <Grid item xs={3}>
       <Card sx={{  ml:12,mt:4,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
       src={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>

       <Grid item xs={3}>
       <Card sx={{  mt:4,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
       src={image2}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>

       <Grid item xs={3}>
       <Card sx={{ mt:4, maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image3}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>

       <Grid item xs={3}>
       <Card sx={{  mt:4,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image4}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>
      </Grid>
    </Box><br></br>

    <Typography gutterBottom variant="h5"  component="div" color="#000000" textAlign='left' fontStyle='inter' fontWeight='600px' fontSize='36px' lineHeight='24px'>
      Top Rated Recipes
    </Typography><br></br>

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>

    <Grid item xs={3}>
    <Card sx={{ ml:12,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>

       <Grid item xs={3}>
       <Card sx={{ maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image2}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>

       <Grid item xs={3}>
       <Card sx={{ maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image3}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>

       <Grid item xs={3}>
       <Card sx={{ maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image4}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
       </Grid>

       <Grid item xs={3}>
       <Card sx={{ ml:12,maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
      </Grid>

      <Grid item xs={3}>
      <Card sx={{ maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
       src={image2}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
      </Grid>

      <Grid item xs={3}>
      <Card sx={{ maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image3}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
      </Grid>

      <Grid item xs={3}>
      <Card sx={{ maxWidth: 305,height:315,top:661,left:408,radius:16 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        src={image4}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Daily Free
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Russian Salad
        <StarIcon style={{ color: '#FFD700' }} />
        <span style={{color: '#ADADAD'}}>4.5</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <span  style={{color: '#DC582A'}}>40 min</span>
        <FavoriteBorderIcon />
        <ChatBubbleOutlineOutlinedIcon />
        </Typography>
       </CardContent>
       </Card>
      </Grid>
      <Grid item xs={12}>
      <Button variant="contained" color="success">Loadmore</Button>
      </Grid>
     
    </Grid>
    </Box>

 

    </div>
  );
};

export default Heroimg;
