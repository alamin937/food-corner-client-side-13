import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box style={{backgroundColor:'blue', marginTop:'100px'}} sx={{ flexGrow: 1 }}>
             <Typography style={{color:'white'}} variant='h4'>
             -------------FOOD CORNER------------
             </Typography>
            <Grid style={{color:'white', padding:'70px', lineHeight:'30px'}} container spacing={2}>
               
                <Grid item xs={12} md={3}>
                   <h1 style={{margin:'0'}}>ADDRESS</h1> <br />
                    <p style={{marginTop:'-15px',marginBottom:'0'}}>New York, NY 10018</p> <br />
                   <p style={{marginTop:'-20px',marginBottom:'0'}}> United States</p> <br />
                </Grid>
                <Grid item xs={12} md={3}>
                    <h1 style={{margin:'0'}}>BOOK A TABLE</h1> <br />
                    Dogfood och Sliders foodtruck. <br />
                    Under Om oss kan ni läsa <br />
                    (850) 435-4155 <br />
                </Grid>
                <Grid item xs={12} md={3}>
                    <h1 style={{margin:'0'}}>OPENING HOURS </h1><br />
                    Monday – Friday: 8am – 4pm <br />
                    Saturday: 9am – 5pm
                </Grid>
                <Grid item xs={12} md={3}>
                    <h1 style={{margin:'0'}}>NEWSLETTER</h1> <br />
                    Subscribe to the weekly newsletter for all <br />
                    the latest updates <br />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;