import { Button } from '@mui/material';
import React from 'react';
import './HotDog.css'

const HotDog = () => {
    return (
        <div className='hot-dog'>
            <div className='fresh'>
                <h1>Hot Fresh</h1>
                <h2>HOT DOG</h2>
                <Button style={{padding:'12px 40px', backgroundColor:'orange', color:'black'}} variant='contained'>order now</Button>
            </div>
           
        </div>
    );
};

export default HotDog;