import { toast, Zoom } from 'react-toastify';

import { fetchConToken } from '../helpers/fetch';
import {types} from '../types/types';


export const uiOpenModalUpsAction = () => ({
    type: types.uiOpenModalUps
});

export const uiCloseModalUpsAction = () => ({
    type: types.uiCloseModalUps
});


export const reguladorStartAddNewAction = ( dataRegulador ) => {
    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('regulador/new', dataRegulador, 'POST');
            const body = await resp.json();

            if ( body.ok) {
                
                dispatch( reguladorAddNewAction(dataRegulador) );
                // console.log(body.msg);

                toast.success(body.msg, {
                    autoClose: 1500,
                    position: toast.POSITION.TOP_CENTER,
                    transition: Zoom,
                    theme: "colored"
                });

            }else {
                console.log(body.msg);
            }
            
        } catch (error) {
            
        }

    }
}

const reguladorAddNewAction = ( regulador ) => ({
    type: types.reguladoresAddNew,
    payload: regulador
});

export const reguladorCustOptionAction = ( regulador ) => ({
    type: types.reguladorCustOption,
    payload: regulador
});