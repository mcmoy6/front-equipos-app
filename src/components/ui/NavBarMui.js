import { MenuOutlined , LogoutOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLooutAction } from '../../actions/authActions';
import { uiMovilOpenMenuAction } from '../../actions/equiposActions';

export const NavBarMui = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        dispatch( uiMovilOpenMenuAction() );
    };

    const handleLogout = () => {
        dispatch( startLooutAction() );
    }

  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
         }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined  />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> EquiposApp </Typography>

                <IconButton onClick={ handleLogout } color='error'>
                    <LogoutOutlined />
                </IconButton>
                
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
