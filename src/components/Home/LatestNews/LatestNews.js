import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


const LatestNews = () => {
    return (
        <Box style={{width:'95%', margin:'0 auto'}} sx={{ flexGrow: 1 }}>
            <h1 style={{textAlign:'left', fontSize:'40px', color:'white'}}>Latest News</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
          <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        <Typography variant="h5" component="div">
          10 Reasons to Do A Digital Detox Challenge
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography variant="body2">
        We Supply The Latest Articles On Emerging Science And Technologies In The Science Of Food. We Are Committed To Getting You News On Innovations In The Science Of Food. Read More Now! Feeding Minds. Feeding Tomorrow.
        </Typography>
      </CardContent>
    </Card>
          </Grid>

          <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
          <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
        </Typography>
        <Typography variant="h5" component="div">
        10 Reasons to Do A Digital Detox Challenge
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
        </Typography>
        <Typography variant="body2">
        We Supply The Latest Articles On Emerging Science And Technologies In The Science Of Food. We Are Committed To Getting You News On Innovations In The Science Of Food. Read More Now! Feeding Minds. Feeding Tomorrow.
        </Typography>
      </CardContent>
    </Card>
          </Grid>

          <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
          <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1606222651797-dc3116801261?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        <Typography variant="h5" component="div">
        10 Reasons to Do A Digital Detox Challenge
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography variant="body2">
        We Supply The Latest Articles On Emerging Science And Technologies In The Science Of Food. We Are Committed To Getting You News On Innovations In The Science Of Food. Read More Now! Feeding Minds. Feeding Tomorrow.
        </Typography>
      </CardContent>
    </Card>
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default LatestNews;