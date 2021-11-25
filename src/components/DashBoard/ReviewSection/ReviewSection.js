import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ShowReviewsection from './ShowReviewsection';


const ReviewSection = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() =>{
        fetch('https://evening-ridge-81485.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <Box style={{width:'90%', margin:'0 auto'}} sx={{ flexGrow: 1 }}>
            <h1 style={{color:'white', textAlign:'left', marginTop:'50px'}}>Review Section</h1>
        <Grid container spacing={2}>
            {
                reviews.map(review => <ShowReviewsection review={review}></ShowReviewsection>)
            }
        </Grid>
      </Box>
    );
};

export default ReviewSection;