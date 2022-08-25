import { types } from '../types/types';

const initialState = {
    data: [],
    activeRowEquipos: null,
    activeEquiposTemp: null,
    targetTypead: [],
    rowClearSelected: false,
    equiposGoBack: false
}

export const equiposReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.equiposAddNew:
            
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.equipoSetActive:

            return {
                ...state,
                activeRowEquipos: action.payload
            }

        

        case types.equipoClearSetActive:

            return {
                ...state,
                activeRowEquipos: null
            }

        case types.equipoSetTargetActive:
            return {
                ...state,
                targetTypead: [action.payload]
            }

        case types.equipoClearTargetActive:
            return {
                ...state,
                targetTypead: []
            }

        case types.equiposClearRowSelected:
            return {
                ...state,
                rowClearSelected: true
            }

        case types.equiposNoClearRowSelected:
            return {
                ...state,
                rowClearSelected: false
            }

        case types.equipoSetActiveTemp:
            return {
                ...state,
                activeEquiposTemp: action.payload
            }

        case types.equipoClearSetActiveTemp:
            return {
                ...state,
                activeEquiposTemp: null
            }

        case types.equiposGetLoaded:

            return {
                ...state,
                data: [ ...action.payload ]
            }

        case types.equiposRowUpdated:
            return {
                ...state,
                data: state.data.map(
                    dat => ( dat.id === action.payload.id ) ? action.payload : dat
                )
            }

        case types.equipoRowDeleted:
            return {
                ...state,
                data: state.data.filter(
                    dat => ( dat.id !== state.activeRowEquipos.id ) // Filtra o muestra solo los elementos que son diferentes al id que viene en el activeRow
                    //dat => (state.activeRow.indexOf(dat) === -1) // Flitro entre arreglos
                ),
                activeRowEquipos: null,
                targetTypead: []
            }

        case types.equiposGoBackEquipos:
            return {
                ...state,
                equiposGoBack: true
            }

        case types.equiposNoGoBackEquipos:
            return {
                ...state,
                equiposGoBack: false
            }
    
        default:
            return state
    }

}