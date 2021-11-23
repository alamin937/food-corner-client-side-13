import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Food from './Food';
import { Typography } from '@mui/material';
import './Food.css'

const Foods = () => {
    const [foods, setFoods] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setFoods(data.slice(1,7)))
    },[])

    return (
        <Box style={{width:'90%', margin:'0 auto', marginTop:'40px'}} sx={{ flexGrow: 1 }}>
            <Typography className='name' variant='h3' style={{textAlign:'left', marginBottom:'20px', fontWeight:'600'}}>
                Popular Dishes
            </Typography>
      <Grid  container spacing={2}>
       {
           foods.map(food => <Food food={food}></Food>)
       }
      </Grid>
    </Box>
    );
};

export default Foods;