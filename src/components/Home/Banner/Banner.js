import { Button } from '@mui/material';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text' style={{textAlign:'left', marginLeft:'70px'}}>
            <h1>WELCOME TO OUR</h1>
            <h2 >Food Area</h2>
            <p style={{fontSize:'20px', color:'white', marginTop:'-25px'}}>*Additional charge for premium toppings. Minimum of 2 require</p>
            <Button style={{padding:'12px 40px', backgroundColor:'orange', color:'black'}} variant='contained'>order now</Button>
            </div>
        </div>
    );
};

export default Banner;