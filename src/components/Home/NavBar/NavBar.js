import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import UseAuth from '../../../UseHooks/UseAuth';


const NavBar = () => {
    const {user,logOut} = UseAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor:'#464445'}} position="sticky">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       
                    </Typography>
                    <Link style={{textDecoration:'none', color:'white'}} to='/home'><Button color="inherit">Home</Button></Link>
                    <Link style={{textDecoration:'none', color:'white'}} to='/foods'><Button color="inherit">Foods Explore</Button></Link>
                    { user?.email ? <Box>
                        <Link style={{textDecoration:'none', color:'white'}} to='/dashboard'> <Button color="inherit">DashBoard</Button></Link>
                        <Button style={{color:'white', backgroundColor:'orange', marginLeft:'5px', marginRight:'10px'}} onClick={logOut}>Log Out</Button>
                        
                    </Box> :
                    <Link style={{textDecoration:'none', color:'white'}} to='/login'> <Button color="inherit">Login</Button></Link>}
                    <span>{user.displayName}</span>
                    
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;