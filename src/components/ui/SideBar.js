import React, { useState } from 'react';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material'
import { Computer, Dashboard, PrintRounded, SupportAgentRounded, ContactMailRounded, MonitorHeartRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uiMovilOpenMenuAction } from '../../actions/equiposActions';



export const SideBar = ({ drawerWidth = 240 }) => {

    
    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth);

    const lastPath = localStorage.getItem('lastpath');
    
    const [selectedIndex, setSelectedIndex] = useState(lastPath);

    const handleDrawerToggle = (event, index) => {

        setSelectedIndex(index);

        dispatch( uiMovilOpenMenuAction() );

    };
    

    const { movilOpenMenu } = useSelector( state => state.ui);



    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };

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
            // anchor='right'
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
                        selected={selectedIndex === '/home'}
                        onClick={ (event) => handleDrawerToggle(event, '/home') }
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
                        selected={selectedIndex === '/equipos'}
                        onClick={ (event) => handleDrawerToggle(event, '/equipos') }
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
                        selected={selectedIndex === '/imagenologia'}
                        onClick={ (event) => handleDrawerToggle(event, '/imagenologia') }
                    >
                        <ListItemIcon>
                            <MonitorHeartRounded />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/imagenologia`}>
                                <ListItemText primary='Imagenología' />
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton 
                        selected={selectedIndex === '/impresoras'}
                        onClick={ (event) => handleDrawerToggle(event, '/impresoras') }
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
                        selected={ selectedIndex === '/tickets' }
                        onClick={ (event) => handleDrawerToggle(event, '/tickets') }
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

                <ListItem disablePadding>
                    <ListItemButton 
                        selected={ selectedIndex === '/cuentas' }
                        onClick={ (event) => handleDrawerToggle(event, '/cuentas') }
                    >
                        <ListItemIcon>
                            <ContactMailRounded />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/cuentas`}>
                                <ListItemText primary='Cuentas Inst.' />
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                   
            </List>

        </Drawer>
        <Drawer
          variant="permanent"
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        //   open
        >

        <Toolbar>
            <Typography variant='h6' noWrap component='div'>
                { name }
            </Typography>
        </Toolbar>
        
        <Divider />
         <List>
                <ListItem  disablePadding>
                    <ListItemButton 
                        selected={selectedIndex === '/home'} 
                        onClick={(event) => handleListItemClick(event, '/home')}
                    >
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
                    <ListItemButton 
                            selected={selectedIndex === '/equipos'}
                            onClick={(event) => handleListItemClick(event, '/equipos')}
                        >
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
                    <ListItemButton 
                            selected={selectedIndex === '/imagenologia'}
                            onClick={(event) => handleListItemClick(event, '/imagenologia')}
                        >
                        <ListItemIcon>
                            <MonitorHeartRounded />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/imagenologia`}>
                                Eq. Imagenología
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>

                <ListItem  disablePadding>
                    <ListItemButton 
                        selected={selectedIndex === '/impresoras'} 
                        onClick={(event) => handleListItemClick(event, '/impresoras')}
                    >
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
                    <ListItemButton 
                        selected={selectedIndex === '/tickets'}
                        onClick={(event) => handleListItemClick(event, '/tickets')}
                    >
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
                <ListItem  disablePadding>
                    <ListItemButton 
                        selected={selectedIndex === '/cuentas'}
                        onClick={(event) => handleListItemClick(event, '/cuentas')}
                    >
                        <ListItemIcon>
                            <ContactMailRounded />
                        </ListItemIcon>
                        <Grid container>
                            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/cuentas`}>
                                Cuentas Inst.
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>

                <Divider />

            </List>

        </Drawer>

    </Box>
  )
}
