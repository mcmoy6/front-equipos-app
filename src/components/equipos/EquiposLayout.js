import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Toolbar  } from '@mui/material';
import { NavBarMui } from '../ui/NavBarMui';
import { SideBar } from '../ui/SideBar';
import { HomeScreen } from '../home/HomeScreen';
import { EquiposScreen } from './EquiposScreen';
import { PrinterScreen } from '../impresoras/PrinterScreen';
import { ShoppingCartScreen } from '../shoppingCart/ShoppingCartScreen';
import { TicketListScreen } from '../tickets/TicketListScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { EquiposRegisterNew } from './EquiposRegisterNew';

const drawerWidth = 280;

export const EquiposLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

        <NavBarMui drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3, width: { xs: 100, sm: `calc(100% - ${drawerWidth}px)`, md:300, lg:400 } }}
        >
        <Toolbar />

            <Routes>

                <Route path="home" element={<HomeScreen />} />
                <Route path="equipos" element={<EquiposScreen />} />
                <Route path="impresoras" element={<PrinterScreen />} />
                <Route path="shoppcart" element={<ShoppingCartScreen />} />
                {/* <Route path='tickets' element={<TicketScreen />} /> */}
                <Route path='tickets' element={<TicketListScreen />} />
                <Route path='register' element={<RegisterScreen />} />
                <Route path='equiposNew' element={<EquiposRegisterNew />} />
                {/* <Route path='loginPage' element={<LoginPage />} /> */}

                <Route path="/" element={<HomeScreen />} />
                
            </Routes>

        </Box>
    </Box>
  )
}
