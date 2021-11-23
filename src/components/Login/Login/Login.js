import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.jpg'

import React, { useState } from 'react';
import { Link ,useNavigate,useLocation} from 'react-router-dom';
import UseAuth from '../../../UseHooks/UseAuth';

const Login = () => {
    const {loginUser,error} = UseAuth()

    const navigate = useNavigate();
    const location = useLocation();



    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = e =>{
        e.preventDefault();
        loginUser(email,password,navigate,location)
    }



    return (
        <Box style={{backgroundColor:'', padding:'10px'}} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{marginTop:'120px'}} item xs={12} md={8}>
                <Typography variant='h3'>
                        LOG IN
                    </Typography>
                   <form onSubmit={handleSubmit}>
                        <TextField
                        required
                        style={{width:'300px', marginTop:'20px'}}
                            label="Your Email"
                            onChange={e => setEmail(e.target.value)}
                            variant="standard" 
                            type='email'
                            /> <br />
                        <TextField
                        required
                        style={{width:'300px', marginTop:'20px'}}
                            label="Your Passowrd"
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                            variant="standard" 
                            /> <br />
                            <Button  type='submit' style={{width:'300px', marginTop:'20px'}} variant='contained'>Log In</Button>
                    </form>
                    <p>{error}</p>
                    <p>Not Register please <Link to='/register'>Registration</Link> </p>
                  
                </Grid>
                <Grid sx={{mt:4}} item xs={12} md={4}>
                <img  src={login} alt=""/>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Login;

