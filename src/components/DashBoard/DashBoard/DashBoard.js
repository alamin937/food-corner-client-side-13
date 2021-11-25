import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import PreviewRoundedIcon from '@mui/icons-material/PreviewRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import {
  Outlet,
  Link
} from "react-router-dom";
import { Button } from '@mui/material';
import UseAuth from '../../../UseHooks/UseAuth';

const drawerWidth = 230;

function DashBoard(props) {
  const { admin , logOut} = UseAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ textAlign: 'justify', backgroundColor: 'black', height: '100%'}}>
      <Toolbar />
      <Divider />

     <Box style={{marginLeft:'30px'}}>
     <Link style={{color:'white', textDecoration:'none'}} to="/home"><Button color="inherit"> <HomeRoundedIcon style={{marginRight:'10px'}} /> Home</Button></Link> <br />
      <Link style={{color:'white', textDecoration:'none'}} to="/dashboard"><Button color="inherit"> <BorderColorRoundedIcon style={{marginRight:'10px'}} /> My order</Button></Link> <br />
      <Link style={{color:'white', textDecoration:'none'}} to={`/dashboard/review`}><Button color="inherit"><PreviewRoundedIcon style={{marginRight:'10px'}} />Review</Button></Link> <br />
      {admin && <Box>
        <Link style={{color:'white', textDecoration:'none'}} to={`/dashboard/makeadmin`}><Button color="inherit"><AdminPanelSettingsRoundedIcon style={{marginRight:'10px'}} />Make admin</Button></Link> <br />
        <Link style={{color:'white', textDecoration:'none'}} to={`/dashboard/addfoods`}><Button color="inherit"><AddCircleOutlineRoundedIcon style={{marginRight:'10px'}} />Add Foods</Button></Link> <br />
        <Link style={{color:'white', textDecoration:'none'}} to={`/dashboard/manageorder`}><Button color="inherit"><BookmarkBorderRoundedIcon style={{marginRight:'10px'}} />Manage ORder</Button></Link> <br />
        <Link style={{color:'white', textDecoration:'none'}} to={`/dashboard/manageproduct`}><Button color="inherit"><ProductionQuantityLimitsRoundedIcon style={{marginRight:'10px'}} />Manage Product</Button></Link> <br />
      </Box>}
      <Button style={{marginTop:'30px'}} onClick={logOut} variant='contained'> <LogoutRoundedIcon /> Log Out</Button>

     </Box>








      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: 'black' }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


        <Outlet></Outlet>




      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
