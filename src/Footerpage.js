import React from 'react';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Logo from './Images/Cookpal 1.png';
const Footerpage = () => {
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

        <Grid item xs={3}>
        <div className="footer-content-inner">
        <h3>Company</h3>
        <ul className="footer-links">
            <li>Home</li>
            <li>Explore</li>
            <li>Team</li>
            <li>About Us</li>
            <li>Activity</li>
          </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="resources-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li>Blog</li>
            <li>Use Cases</li>
            <li>Testimonials</li>
            <li>Insights</li>
         </ul>
        </div>
        </Grid>

        <Grid item xs={3}>
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
           </div>
           </footer>
            );
        };
        
        export default Footerpage;
        