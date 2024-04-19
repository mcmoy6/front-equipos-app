import { types } from '../types/types';

const initialState = {
    data: [],
    telecomValidaForm: null
}

export const telecomReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.telecomAddNew:
            
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.telecomGetLoaded:

            return {
                ...state,
                data: [ ...action.payload ]
            }

       
        case types.telecomunicacionesValidaForm:

            return {
                ...state,
                telecomValidaForm: action.payload
            }

        case types.telecomunicacionesClearValidaForm:

            return {
                ...state,
                telecomValidaForm: null
            }

        default:
            return state
    }

}