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
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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

        <Grid item  xs={2}>
        <Box sx={{ml:12, mt:4, width:"236.8px", height:"86px",radius:"10px", bgcolor:"#F6784C",color:"#FFFFFF",gap:'20px'}}>
        <Typography variant="h6" textAlign='center'>Breakfast</Typography>
        </Box>
        </Grid>
        <Grid item  xs={2}>
        <Box sx={{ml:12, mt:4, width:"236.8px", height:"86px", radius:"10px", bgcolor:"#C4D600",color:"#FFFFFF",gap:'20px'}}>
        <Typography variant="h6">Dinner</Typography>
        </Box>
        </Grid>
        <Grid item  xs={2}>
        <Box sx={{ml:12, mt:4,width:"236.8px", height:"86px", radius:"10px", bgcolor:"#EAAA00",color:"#FFFFFF",gap:'20px'}}>
        <Typography variant="h6">Desert</Typography>
        </Box>
        </Grid>
        <Grid item  xs={2}>
        <Box sx={{ml:12, mt:4,width:"236.8px", height:"86px", radius:"10px", bgcolor:"#ED8B00",color:"#FFFFFF",gap:'20px'}}>
        <Typography variant="h6">Snacks</Typography>
        </Box>
        </Grid>
        <Grid item  xs={2}>
        <Box sx={{ml:12,mt:4,width:"236.8px", height:"86px", radius:"10px", bgcolor:"#84BD00",color:"#FFFFFF",gap:'20px'}}>
        <Typography variant="h6">Lunch</Typography>
        </Box>
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
}

export default Heroimg;
