import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';


const ShowManageProducts = ({food, foods, setFoods}) => {
    const {_id,foodName, price, img, description} = food

    const handleDelete = id =>{
       const proccess = window.confirm('are you sure')
       if(proccess){
        fetch( `https://evening-ridge-81485.herokuapp.com/foods/${id}`, {
            method:'delete'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert('Successfully Deleted')
                const remaining = foods.filter(row => row._id !== id)
                setFoods(remaining);
            }
        })
       }
    }



    return (
        <Grid item xs={12} md={4}>
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
      <Button onClick={() => handleDelete(_id)} sx={{mb:2}} variant ='contained'>Delete</Button>
    </Card>
        </Grid>
    
    );
};

export default ShowManageProducts;