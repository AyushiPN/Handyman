import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
      <Box Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={4} xs={1}>
          <div className='footerHeading'>
            <h1>HANDYMAN</h1>
          </div>
        </Grid>
        <Grid item md={8} xs={1}>
          <Grid container spacing={3} className='footerC1'>
            <Grid item xs={6}>
              <p className='footerContent'>Address</p>
            </Grid>
            <Grid item xs={6}>
              <p className='footerContent'>Mail</p>
            </Grid>
          </Grid>
          <Grid container spacing={2} className='footerC2'>
            <Grid item xs={6}>
              <p className='footerContent'><DateRangeIcon/>Date</p>
            </Grid>
            <Grid item xs={6}>
              <p className='footerContent'><LocalPhoneIcon />Phone</p>
            </Grid>
            </Grid>
            
          
        </Grid>
    </Grid>

    <div className='icons'>
    <Grid container spacing={0}>
              <Grid item xs={3}>
                <TwitterIcon /><p className='iName'>Twitter</p>
              </Grid>
              <Grid item xs={3}>
                <EmailIcon /><p className='iName'>Gmail</p>
              </Grid>
              <Grid item xs={3}>
                <FacebookIcon /><p className='iName'>FaceBook</p>
              </Grid>
              <Grid item xs={3}>
                <InstagramIcon /><p className='iName'>Instagram</p>
              </Grid>
            </Grid>
    </div>
    </Box>
      </div>
    </div>
  )
}

export default Footer