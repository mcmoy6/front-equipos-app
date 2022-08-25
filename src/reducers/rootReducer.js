import { combineReducers } from 'redux';


import { authReducer } from './authReducer';
import { empleadosReducer } from './empleadosReducer';
import { equiposReducer } from './equiposReucer';
import { inventariosReducer } from './inventariosReducer';
import { printerReducer } from './printerReducer';
import { sitiosReducer } from './sitiosReducer';
import { ticketsReducer } from './ticketsReducer';
import { uiReducer } from './uiReducer';
import { reguladoresReducer } from './reguladoresReducer';
import { loadingReducer } from './loadingReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    equipos: equiposReducer,
    empleados: empleadosReducer,
    sitios: sitiosReducer,
    tickets: ticketsReducer,
    printers: printerReducer,
    inventarios: inventariosReducer,
    reguladores: reguladoresReducer,
    loading: loadingReducer
});

