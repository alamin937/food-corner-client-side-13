import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';


const Food = ({food}) => {
    const {_id,foodName, price, img, description} = food
    return (
        <Grid item xs={12} md={4}>
          <Card style={{borderRadius:'30px'}} sx={{ minWidth: 275 }}>
          <CardMedia style={{width:'70%', margin:'0 auto', marginTop:'10px', borderRadius:'20px'}}
        component="img"
        height="194"
        image={`data:image/*;base64,${img}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        <Typography clas variant="h5" component="div">
         {foodName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price:${price}
        </Typography>
        <Typography variant="body2">
         {description}
        </Typography>
      </CardContent>
      <Link style={{textDecoration:'none'}} to={`/foods/${_id}`}><Button style={{width:'100%', borderRadius:'30px'}} sx={{mb:2}} variant ='contained'>Place Order</Button></Link>
    </Card>
        </Grid>
    
    );
};

export default Food;