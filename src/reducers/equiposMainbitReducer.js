import { types } from '../types/types';

const initialState = {
    data: [],
    activeRowEquiposMainBit: null,
    activeEquiposTemp: null,
    targetTypead: [],
    rowClearSelected: false,
    equiposGoBack: false,
    equiposMainBitValForm: false,
    onFocusCurrent: null
}

export const equiposMainbitReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.equiposMainBitGetLoaded:

        return {
            ...state,
            data: [ ...action.payload ]
        }

        case types.equipoMainBitSetActive:

            return {
                ...state,
                activeRowEquiposMainBit: action.payload
            }

        case types.equipoClearMainBitSetActive:

            return {
                ...state,
                activeRowEquiposMainBit: null
            }

        case types.equiposMainBitAddNew:

            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.equiposMainBitRowUpdated:

            return {
                ...state,
                data: state.data.map(
                    dat => ( dat.id === action.payload.id ) ? action.payload : dat
                )
            }

        case types.equiposMainBitValidaForm:

            return {
                ...state,
                equiposMainBitValForm: true
            }

        case types.equiposMainBitOnFocus:

            return {
                ...state,
                onFocusCurrent: action.payload
            }
    
        default:
            return state
    }

}