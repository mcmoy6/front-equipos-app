import { types } from '../types/types';

const initialState = {
       activeLoading: false
}

export const loadingReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.loadingActivate:
            return {
                ...state,
                activeLoading: true
            }

        case types.loadingDeactivate:
            return {
                ...state,
                activeLoading: false
            }
            
        default:
            return state
    }

}