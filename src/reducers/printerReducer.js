import { types } from '../types/types';


const initialState  = {
    data: [],
    activeRowPrinter: null,
    validaFormPrinter: null
}

export const printerReducer = ( state = initialState, action ) => {
    switch (action.type) {

        case types.printerAddNew:
            
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.printersGetLoaded:

            return {
                ...state,
                data: [ ...action.payload ]
            }

        case types.printerSetActive:

            return {
                ...state,
                activeRowPrinter: action.payload
            }

        case types.printerClearActive:

            return {
                ...state,
                activeRowPrinter: null
            }

        // case types.printerAddNew:

        //    return {
        //         ...state,
        //         data: [
        //             ...state.data,
        //             action.payload
        //         ]
        //     } 

        case types.printerRowUpdated:

            return {
                ...state,
                data: state.data.map(
                    dat => ( dat.id === action.payload.id ) ? action.payload : dat
                )
            }

        case types.printerDeleted:

            return {
                ...state,
                data: state.data.filter(
                dat => ( dat.id !== state.activeRow.id ) // Filtra o muestra solo los elementos que son diferentes al id que viene en el activeRow
                //dat => (state.activeRow.indexOf(dat) === -1) // Flitro entre arreglos
                ),
                activeRow: null
            }

        case types.printerClearLogout:

            return {
                ...initialState
            }

        case types.printerClearPageOut:

            return {
                ...initialState
            }

        case types.printerValidaForm:

            return {
                ...state,
                validaFormPrinter: action.payload
            }

        case types.printerClearValidaForm:

            return {
                ...state,
                validaFormPrinter: null
            }
    
        default:
           return state;
    }

}