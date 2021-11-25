import { Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Rating from 'react-rating';



const ShowReviewsection = ({ review }) => {
    const { reviewWrite, rating } = review
    return (
        <Grid item xs={12} md={4}>
            <Paper style={{padding:'50px'}} elevation={3}>
                
                <Rating  readonly
                initialRating={rating}
                style={{fontSize:'30px', color:'gold'}}
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star"
                
                >
                </Rating>
                
                <Typography style={{fontWeight:'700', marginTop:'20px'}} variant="body2" gutterBottom>
                   {reviewWrite}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default ShowReviewsection;