import { types } from '../types/types'

const initialState = {
    reguladoresData: [],
    // activeRow: null,
    // activeRowEdit: null,
    custOptionRegu: null,
    // activeOpenModEdit: false
}

export const reguladoresReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.reguladoresAddNew:
            return {
                ...state,
                reguladoresData: [
                    ...state.reguladoresData,
                    action.payload
                ]
            }

        // case types.empleadoOpenModalEdit:
        //     return {
        //         ...state,
        //         activeOpenModEdit: true
        //     }

        // case types.empeladoClearOpenModalEdit:
        //     return {
        //         ...state,
        //         activeOpenModEdit: false
        //     }

        // case types.empleadoSetActiveEdit:
        //     return {
        //         ...state,
        //         activeRowEdit: action.payload
        //     }

        // case types.empleadoClearActiveEdit:
        //     return {
        //         ...state,
        //         activeRowEdit: null
        //     }

        // case types.empleadoSetActive:
        //     return {
        //         ...state,
        //         activeRow: action.payload
        //     }

        // case types.empleadoClearSetActie:
        //     return {
        //         ...state,
        //         activeRow: null
        //     }

        case types.reguladorCustOption:
            return {
                ...state,
                custOptionRegu: action.payload
            }

        case types.reguladorClearCustOption:
            return {
                ...state,
                custOptionRegu: null
            }

        // case types.empleadosGetLoaded:

        //     return {
        //         ...state,
        //         data: [ ...action.payload ]
        //     }

        // case types.empleadosClearLoaded:
        //     return {
        //         ...state,
        //         data: []
        //     }
    
        default:
            return state
    }

}