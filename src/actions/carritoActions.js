// import { fetchConToken } from '../helpers/fetch';
import {types} from '../types/types';


export const startItemAddNewAction = ( item ) => ({
    type: types.carritoAddItem,
    payload: item

});