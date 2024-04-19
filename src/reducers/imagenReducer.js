import { types } from '../types/types';

const initialState = {
    data: [],
    imagenValidaForm: null
}

export const imagenologiaReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.imagenologiasAddNew:
            
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.imagenologiasGetLoaded:

            return {
                ...state,
                data: [ ...action.payload ]
            }

        case types.cuentasResetForm:

            return {
                ...state,
                resetForm: action.payload
            }

        case types.imagenologiasValidaForm:

            return {
                ...state,
                imagenValidaForm: action.payload
            }

        case types.imagenologiasClearValidaForm:

            return {
                ...state,
                imagenValidaForm: null
            }

        default:
            return state
    }

}