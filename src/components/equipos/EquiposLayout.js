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
import { CuentasScreen } from '../cuentas/CuentasScreen';
import { ImagenologiasScreen } from '../imagenologia/ImagenologiasScreen';
import { TelecomScreen } from '../telecomunicaciones/TelecomScreen';
// import { TurnosScreen } from '../turnos/TurnosScreen';
import { TurnosPage } from '../turnos/TurnosPage';
import { Ingresar } from '../colas/Ingresar';
import { Cola } from '../colas/Cola';
import { CrearTicket } from '../colas/CrearTicket';
import { Escritorio } from '../colas/Escritorio';
import { CarritoApp } from '../carritoCompras/CarritoApp';
import { EquiposMainbitScreen } from '../equiposMainbit/EquiposMainbitScreen';


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
                <Route path="equiposmainbit" element={<EquiposMainbitScreen />} />
                <Route path="impresoras" element={<PrinterScreen />} />
                <Route path="imagenologia" element={<ImagenologiasScreen />} />
                <Route path="cuentas" element={<CuentasScreen />} />
                <Route path="carrito" element={<CarritoApp />} />
                <Route path="shoppcart" element={<ShoppingCartScreen />} />
                {/* <Route path='tickets' element={<TicketScreen />} /> */}
                <Route path='tickets' element={<TicketListScreen />} />
                <Route path='register' element={<RegisterScreen />} />
                <Route path='equiposNew' element={<EquiposRegisterNew />} />
                <Route path='telecom' element={<TelecomScreen />} />
                <Route path='turnos' element={<TurnosPage />} />
                {/* <Route path='loginPage' element={<LoginPage />} /> */}

                <Route path='ingresar' element={<Ingresar />} />
                <Route path='cola' element={<Cola />} />
                <Route path='crear-ticket' element={<CrearTicket />} />
                <Route path='escritorio' element={<Escritorio />} />

                <Route path="/" element={<HomeScreen />} />
                
            </Routes>

        </Box>
    </Box>
  )
}
