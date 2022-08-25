import { types } from '../types/types'

const initialState = {
    inventariosData: [],
    inventarioTargetTypead: [] 
}


export const inventariosReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.inventariosGetLoaded:
            return {
                ...state,
                inventariosData: [ ...action.payload ]
            }

        case types.inventariosClearLoaded:
            return {
                ...state,
                inventariosData: []
            }

        case types.sitioSetTargetActive:
            return {
                ...state,
                sitioTargetTypead: [action.payload]
            }

        case types.sitioClearTargetActive:
            return {
                ...state,
                sitioTargetTypead: []
            }
  
        default:
            return state
    }

}