import { types } from '../types/types'

const initialState = {
    sitiosData: [],
    sitioTargetTypead: [] 
}


export const sitiosReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.empleadoAddNew:
            return {
                ...state,
                sitiosData: [
                    ...state.sitiosData,
                    action.payload
                ]
            }

        case types.sitiosGetLoaded:
            return {
                ...state,
                sitiosData: [ ...action.payload ]
            }

        case types.sitiosClearLoaded:
            return {
                ...state,
                sitiosData: []
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