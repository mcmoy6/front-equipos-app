import { types } from '../types/types'

const initialState = {
    data: [],
    dataSingleTicket: [],
    activeRowTicket: null,
    dataToHighlight: ''
    // sitioTargetTypead: [] 
}


export const ticketsReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.ticketsAddNew:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.ticketsGetLoaded:
            return {
                ...state,
                data: [ ...action.payload ]
            }

        case types.ticketSingleGetLoaded:
            return {
                ...state,
                dataSingleTicket: [ ...action.payload ]
            }

        case types.ticketToHighlight:
            return {
                ...state,
                dataToHighlight: [ ...action.payload ]
            }

        case types.ticketSetActive:

            return {
                ...state,
                activeRowTicket: action.payload
            }

        case types.ticketClearActive:

            return {
                ...state,
                activeRowTicket: null
            }

        case types.ticketChangeStatus:
            return {
                ...state,
                data: state.data.map(
                    dat => ( dat.id === action.payload.id ) ? action.payload : dat
                )
            }

          
        default:
            return state
    }

}