import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleFood from './SingleFood';

const ExploreFoods = () => {
    const [explores, setExplores] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setExplores(data))
    },[])
    return (
        <Box style={{width:'90%', margin:'0 auto', marginTop:'40px'}} sx={{ flexGrow: 1 }}>
        <Typography className='name' variant='h3' style={{textAlign:'left', marginBottom:'20px', fontWeight:'600'}}>
        Foods Corner
        </Typography>
  <Grid  container spacing={2}>
   {
       explores.map(explore => <SingleFood explore={explore}></SingleFood>)
   }
  </Grid>
</Box>
    );
};

export default ExploreFoods;