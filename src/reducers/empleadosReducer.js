import { types } from '../types/types'

const initialState = {
    data: [],
    activeRow: null,
    activeRowEdit: null,
    custOption: null,
    activeOpenModEdit: false
}

export const empleadosReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.empleadoAddNew:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.empleadoOpenModalEdit:
            return {
                ...state,
                activeOpenModEdit: true
            }

        case types.empeladoClearOpenModalEdit:
            return {
                ...state,
                activeOpenModEdit: false
            }

        case types.empleadoSetActiveEdit:
            return {
                ...state,
                activeRowEdit: action.payload
            }

        case types.empleadoClearActiveEdit:
            return {
                ...state,
                activeRowEdit: null
            }

        case types.empleadoSetActive:
            return {
                ...state,
                activeRow: action.payload
            }

        case types.empleadoClearSetActie:
            return {
                ...state,
                activeRow: null
            }

        case types.empleadoCustOption:
            return {
                ...state,
                custOption: action.payload
            }

        case types.empleadoClearCustOption:
            return {
                ...state,
                custOption: null
            }

        case types.empleadosGetLoaded:

            return {
                ...state,
                data: [ ...action.payload ]
            }

        case types.empleadosClearLoaded:
            return {
                ...state,
                data: []
            }
    
        default:
            return state
    }

}