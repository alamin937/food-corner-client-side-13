import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Special.css'
import { Button } from '@mui/material';


const SpecialFoodArea = () => {
    return (
        <Box style={{ marginTop: '100px' }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{textAlign:'left', color:'white'}} className='first' item xs={12} md={4}>
                    <Box style={{marginLeft:'40px'}}>
                    <h1 className='header'>Meals</h1>
                    <p className='pera'>NEW PHENOMENON
                        BURGER TASTE</p>
                        <Button style={{padding:'12px 40px', backgroundColor:'orange', color:'black'}} variant='contained'>order now</Button>
                    </Box>
                </Grid>
                <Grid style={{textAlign:'left', color:'white'}} className='second' item xs={12} md={4}>
                <Box style={{marginLeft:'40px'}}>
                    <h1 className='header'>Burgers</h1>
                    <p className='pera'>NEW PHENOMENON
                        BURGER TASTE</p>
                        <Button style={{padding:'12px 40px', backgroundColor:'orange', color:'black'}} variant='contained'>order now</Button>
                        </Box>
                </Grid>
                <Grid style={{textAlign:'left', color:'white'}} className='third' item xs={12} md={4}>
                <Box style={{marginLeft:'40px'}}>
                    <h1 className='header'>Salats</h1>
                    <p className='pera'>NEW PHENOMENON
                    BURGER TASTE</p>
                    <Button style={{padding:'12px 40px', backgroundColor:'orange', color:'black'}} variant='contained'>order now</Button>
                    </Box>
            </Grid>

        </Grid>
        </Box >
    );
};

export default SpecialFoodArea;