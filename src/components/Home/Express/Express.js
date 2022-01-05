import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const Express = () => {
    return (
        <div style={{ marginTop: '70px', backgroundColor: '#DFDAA0 ', padding: '40px 0' }}>
            <div style={{ width: '90%', margin: '0 auto' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <h3>Order now for an express delivery in 24h!</h3>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Button style={{padding:'10px 80px', border:'1px solid grey', borderRadius:'40px'}}>Order Now</Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Express;

