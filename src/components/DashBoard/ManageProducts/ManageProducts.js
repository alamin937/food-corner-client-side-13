import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ShowManageProducts from './ShowManageProducts';

const ManageProducts = () => {
    const [foods, setFoods] = useState([])

    useEffect(() =>{
        fetch('https://evening-ridge-81485.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <Box style={{width:'90%', margin:'0 auto', marginTop:'40px'}} sx={{ flexGrow: 1 }}>
            <Typography className='name' variant='h3' style={{textAlign:'left', marginBottom:'20px', fontWeight:'600', color:'white'}}>
                Popular Dishes
            </Typography>
      <Grid  container spacing={2}>
       {
           foods.map(food => <ShowManageProducts foods={foods} setFoods={setFoods} food={food}></ShowManageProducts>)
       }
      </Grid>
    </Box>
    );
};

export default ManageProducts;