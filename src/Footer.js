import React from 'react';
// import { Instagram, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Logo from './Images/Cookpal 1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
       
       
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
            <div className="footer-section">
              <img src={Logo} alt="Company Logo" />
              <p fontsize='Poppins' color='#253D4E'text-align='justified' >Cookpal is a recipe website with a wide variety of delicious recipes, easy-to-use search function. Join our community and let's cook together!</p>
              </div>
              </Grid>
              <Grid>
              <div className="footer-content-inner">
                <h3>Company</h3>
                <Button href="#" variant="text" color="inherit">Home</Button>
                <Button href="#" variant="text" color="inherit">Explore</Button>
                <Button href="#" variant="text" color="inherit">Team</Button>
                <Button href="#" variant="text" color="inherit">About Us</Button>
                <Button href="#" variant="text" color="inherit">Activity</Button>
              </div>
            
          </Grid>

          {/* Resources Section */}
          <Grid item xs={3} sm={3} md={3}>
            <div className="footer-section">
              <div className="footer-content-inner">
                <h3>Resources</h3>
                <Button href="#" variant="text" color="inherit">Blog</Button>
                <Button href="#" variant="text" color="inherit">Use Cases</Button>
                <Button href="#" variant="text" color="inherit">Testimonials</Button>
                <Button href="#" variant="text" color="inherit">Insights</Button>
              </div>
            </div>
          </Grid>

          {/* Subscribe Section */}
          <Grid item xs={3} sm={3} md={3}>
            <div className="footer-section">
              <img src={Logo} alt="Company Logo" />
              <div className="footer-content-inner">
                <p>Ut risus mattis interdum faucibus facilisi. Facilisi purus accumsan aliquam.</p>
                <div className="subscribe-form">
                  <input type="email" placeholder="Your email" />
                  <Button variant="contained" color="success">Subscribe</Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        </Box>
      
      {/* Social Icons Section
      <div className="social-icons">
        <a href="#"><Instagram /></a>
        <a href="#"><Facebook /></a>
        <a href="#"><Twitter /></a>
        <a href="#"><LinkedIn /></a>
      </div> */}
    </div>
    </footer>
  );
};

export default Footer;
