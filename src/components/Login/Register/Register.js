import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.jpg'
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import UseAuth from '../../../UseHooks/UseAuth';

const Register = () => {
    const {register,user} = UseAuth()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleRegister = e =>{
        e.preventDefault();
        register(email,password,name)
    }



    return (
        <Box style={{ backgroundColor: '', padding: '10px' }} sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                <Grid style={{ marginTop: '120px' }} item xs={12} md={8}>
                    <Typography variant='h3'>
                        Create New User
                    </Typography>
                    <form onSubmit={handleRegister}>
                        <TextField
                            required
                            style={{ width: '300px', marginTop: '20px' }}
                            label="Your Name"
                            onChange={e => setName(e.target.value)}
                            variant="standard"
                            type='name'
                        /> <br />
                        <TextField
                            required
                            style={{ width: '300px', marginTop: '20px' }}
                            label="Your Email"
                            onChange={e => setEmail(e.target.value)}
                            variant="standard"
                            type='email'
                        /> <br />
                        <TextField
                            required
                            style={{ width: '300px', marginTop: '20px' }}
                            label="Your Passowrd"
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                            variant="standard"
                        /> <br />
                        <Button type='submit' style={{ width: '300px', marginTop: '20px' }} variant='contained'>Register</Button>
                    </form>
                    <p>Already Register please <Link to='/login'>Log In</Link> </p>
                    {user?.email && <p>successfully Register</p> }

                </Grid>
                <Grid sx={{ mt: 4 }} item xs={12} md={4}>
                    <img src={login} alt="" />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Register;