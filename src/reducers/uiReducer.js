import {types} from '../types/types';

const initialState = {
    modalOpen: false,
    modalOpenEditEquipos: false,
    modalOpenEmpleado: false,
    modalOpenTicket: false,
    modalOpenPrinter: false,
    modalOpenPrinterEdit: false,
    modalOpenUps: false,
    modalOpenMonitor: false
}


export const uiReducer = ( state = initialState, action ) => {


    switch (action.type) {
        case types.uiOpenModalEquipos:

            return {
                ...state,
                modalOpen: true
            }

        case types.uiCloseModalEquipos:

            return {
                ...state,
                modalOpen: false
            }

        case types.uiOpenModalEmpleado:
            return{
                ...state,
                modalOpenEmpleado: true
            }

        case types.uiCloseModalEmpleado:
            return{
                ...state,
                modalOpenEmpleado: false
            }

        case types.uiOpenModalEditEquipos:
            return {
                ...state,
                modalOpenEditEquipos: true
            }
        
        case types.uiCloseModalEditEquipos:
            return {
                ...state,
                modalOpenEditEquipos: false
            }

        case types.uiOpenModalTicket:
            return {
                ...state,
                modalOpenTicket: true
            }

        case types.uiCloseModalTicket:
            return {
                ...state,
                modalOpenTicket: false
            }

        case types.uiOpenModalPrinter:
            return {
                ...state,
                modalOpenPrinter: true
            }

        case types.uiCloseModalPrinter:
            return {
                ...state,
                modalOpenPrinter: false
            }

        case types.uiOpenModalPrinterEdit:
            return {
                ...state,
                modalOpenPrinterEdit: true
            }

        case types.uiCloseModalPrinterEdit:
            return {
                ...state,
                modalOpenPrinterEdit: false
            }

        case types.uiOpenModalUps:
            return {
                ...state,
                modalOpenUps: true
            }

        case types.uiCloseModalUps:
            return {
                ...state,
                modalOpenUps: false
            }

        case types.uiOpenModalMonitor:
            return {
                ...state,
                modalOpenMonitor: true
            }

        case types.uiCloseModalMonitor:
            return {
                ...state,
                modalOpenMonitor: false
            }

        default:
            return state;
    }

}