import React from 'react';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material'
import { Computer, Dashboard, PrintRounded, SupportAgentRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uiMovilOpenMenuAction } from '../../actions/equiposActions';



export const SideBar = ({ drawerWidth = 240 }) => {

    
    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth);

    // const [selectedIndex, setSelectedIndex] = useState(1);

    const handleDrawerToggle = () => {

        // setSelectedIndex(index);

        dispatch( uiMovilOpenMenuAction() );

    };
    

    const { movilOpenMenu } = useSelector( state => state.ui);

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="temporary"
            open={movilOpenMenu}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    { name }
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                
                <ListItem disablePadding>
                    <ListItemButton 
                        onClick={ handleDrawerToggle }
                        // selected={selectedIndex === 0}
                    >
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/home`}>
                                <ListItemText primary='Home' />
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton 
                        onClick={ handleDrawerToggle }
                        // selected={selectedIndex === 1}
                    >
                        <ListItemIcon>
                            <Computer />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/equipos`}>
                                <ListItemText primary='Equipos' />
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton 
                        onClick={ handleDrawerToggle }
                        // selected={selectedIndex === 2}
                    >
                        <ListItemIcon>
                            <PrintRounded />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/impresoras`}>
                                <ListItemText primary='Impresoras' />
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton 
                        onClick={ handleDrawerToggle }
                        
                    >
                        <ListItemIcon>
                            <SupportAgentRounded />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/tickets`}>
                                <ListItemText primary='Tickets' />
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                   
            </List>

        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >

        <Toolbar>
            <Typography variant='h6' noWrap component='div'>
                { name }
            </Typography>
        </Toolbar>
        
        <Divider />
         <List>
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/home`}>
                                Home
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>

                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Computer />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/equipos`}>
                                Equipos
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PrintRounded />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/impresoras`}>
                                Impresoras
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SupportAgentRounded />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/tickets`}>
                                Tickets soporte
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>

            </List>

        </Drawer>

    </Box>
  )
}
