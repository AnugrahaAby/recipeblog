import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Create this file for basic styling
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GradeIcon from '@mui/icons-material/Grade';
import img from './Images/Rectangle 20.png';
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

const Dashboard = () => {
 
  const [Album, setAlbum] = useState([]);

  useEffect(() => {
   

    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => setAlbum(data.recipes))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="dashboard">
     

      <Grid container sx={{ marginTop: 2,marginBottom: 4}}>
        <Grid item xs={12}>
          <Box
            component="img"
            src={img}
            alt="Curved Image"
            sx={{
              width: '100%',              
              height:"100%",
            }}
          />
        </Grid>
      
      </Grid>

      <Grid container spacing={2}sx={{ marginTop: 2,marginBottom: 4}}>
      
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Breakfast</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Dinner</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid> <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Desert</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid> <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paper style={styles.paper} elevation={3}>
            <Typography variant="h6">Snacks</Typography>
            <IconButton style={styles.arrowButton} >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid>
    </Grid>
      <Grid container spacing={4}>
        {Album.slice(0, 8).map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Box mt={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon fontSize="small" />
                      <Typography variant="body2">{item.prepTimeMinutes + item.cookTimeMinutes} mins</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                      <LocalDiningIcon fontSize="small" />
                      <Typography variant="body2">{item.servings} servings</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                      <RestaurantIcon fontSize="small" />
                      <Typography variant="body2">{item.cuisine}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                      <GradeIcon fontSize="small" />
                      <Typography variant="body2">{item.rating} ({item.reviewCount} reviews)</Typography>
                    </Stack>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;

