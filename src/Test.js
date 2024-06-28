import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
function Test(){
  return(
    <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2}>
              <Card sx={{ backgroundColor: "#F6784C", borderRadius: 5, boxShadow: 'none', width: '100%',marginLeft: '25px',mb:"6"  }}>
                <Box sx={{ p: 5 }}>
                  
                  
                    <Typography gutterBottom>
                      Category
                    </Typography>
                   
               
                  
                  
                </Box>
              </Card>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ backgroundColor: "#E9F6FC", borderRadius: 5, boxShadow: 'none', width: '100%' }}>
                <Box sx={{ p: 5 }}>
                  <Fab disabled style={fabStyle}>
                    <ArticleIcon />
                  </Fab>
                  <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    <Typography gutterBottom>
                      News
                    </Typography>
                    <InfoIcon sx={{ color: 'black' }} />
                  </Box>
                  <Typography variant="h3" component="div" gutterBottom>
                    {newsCount}
                  </Typography>
                  <Card sx={{ boxShadow: 'none', borderRadius: 1, width: 'fit-content', display: 'flex', flexDirection: 'row', gap: 1, px: 2, flexWrap: 'wrap' }}>
                    <ArrowDownwardIcon sx={{ color: '#FF6A55' }} />
                    <Typography sx={{ color: '#FF6A55' }}>
                      37.5%
                    </Typography>
                    <Typography >
                      this week
                    </Typography>
                  </Card>
                </Box>
              </Card>
            </Grid> */}
            {/* <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ backgroundColor: "#F0ECFD", borderRadius: 5, boxShadow: 'none', width: '100%' }}>
                <Box sx={{ p: 5 }}>
                  <Fab disabled style={fabStyle}>
                    <AdsClickIcon />
                  </Fab>
                  <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    <Typography gutterBottom>
                      Ads
                    </Typography>
                    <InfoIcon sx={{ color: 'black' }} />
                  </Box>
                  <Typography variant="h3" component="div" gutterBottom>
                    {adsCount}
                  </Typography>
                  <Card sx={{ boxShadow: 'none', borderRadius: 1, width: 'fit-content', display: 'flex', flexDirection: 'row', gap: 1, px: 2, flexWrap: 'wrap' }}>
                    <ArrowUpwardIcon sx={{ color: '#83BF6E' }} />
                    <Typography sx={{ color: '#83BF6E' }}>
                      37.5%
                    </Typography>
                    <Typography >
                      this week
                    </Typography>
                  </Card>
                </Box>
              </Card>
            </Grid> */}
          </Grid>
      
  );
};
export default Test;