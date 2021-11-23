import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';


const SingleFood = ({explore}) => {
    const {_id,foodName, price, img, description} = explore
    return (
        <Grid item xs={12} md={3}>
          <Card sx={{ minWidth: 275 }}>
          <CardMedia
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
      <Link style={{textDecoration:'none'}} to={`/foods/${_id}`}><Button sx={{mb:2}} variant ='contained'>Order Now</Button></Link>
    </Card>
        </Grid>
    
    );
};

export default SingleFood;