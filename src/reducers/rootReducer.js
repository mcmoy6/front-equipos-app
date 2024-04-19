import { combineReducers } from 'redux';


import { authReducer } from './authReducer';
import { cuentasReducer } from './cuentasReducer';
import { empleadosReducer } from './empleadosReducer';
import { equiposReducer } from './equiposReucer';
import { equiposMainbitReducer } from './equiposMainbitReducer';
import { inventariosReducer } from './inventariosReducer';
import { imagenologiaReducer } from './imagenReducer';
import { printerReducer } from './printerReducer';
import { sitiosReducer } from './sitiosReducer';
import { telecomReducer } from './telecomReducer'
import { ticketsReducer } from './ticketsReducer';
import { uiReducer } from './uiReducer';
import { reguladoresReducer } from './reguladoresReducer';
import { loadingReducer } from './loadingReducer';
import { carritoReducer } from './carritoReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    equipos: equiposReducer,
    equiposMainBit: equiposMainbitReducer,
    cuentas: cuentasReducer,
    carrito: carritoReducer,
    empleados: empleadosReducer,
    sitios: sitiosReducer,
    telecom: telecomReducer,
    tickets: ticketsReducer,
    printers: printerReducer,
    inventarios: inventariosReducer,
    imagenologias: imagenologiaReducer,
    reguladores: reguladoresReducer,
    loading: loadingReducer
});

