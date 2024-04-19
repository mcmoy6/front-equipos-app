import { fetchConToken } from '../helpers/fetch';
import { Slide, toast, Zoom } from 'react-toastify';


import {types} from '../types/types';



export const uiOpenModalTelecomAction = () => ({
    type: types.uiOpenModalTelecomunicacion
});

export const uiCloseModalTelecomAction = () => ({
    type: types.uiCLoseModalTelecomunicacion
});


export const telecomStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('telecom');
            const body = await resp.json();

            const telecomData = body.equiposTelecom;

            // console.log(imagenologiaEq);
            dispatch( telecomLoadedAction( telecomData ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}

const telecomLoadedAction = ( telecomEquipos ) => ({
    type: types.telecomGetLoaded,
    payload: telecomEquipos
});


export const TelecomStartAddNewAction = ( equTelecom ) => {

    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('telecom/new', equTelecom, 'POST');
            const body = await resp.json();

            if ( body.ok) {

                equTelecom.id = body.eqTelecom.id
                
                dispatch( tecnologiasAddNewAction(equTelecom) );

                toast.success(body.msg, {
                    autoClose: 5000,
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "anId",
                    transition: Zoom,
                    theme: "colored"
                });

                dispatch( uiCloseModalTelecomAction() );

                dispatch( telecomClrValidaFormAction() );

            }else {

                // console.log(body.msg);
                // console.log(body.errors[0].msg);

                toast.error(body.msg, {
                    autoClose: 5000,
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "anId2",
                    transition: Slide,
                    theme: "dark"
                });

                toast.error(body.errors[0].msg, {
                    autoClose: 3000,
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "anId2",
                    transition: Slide,
                    theme: "dark",
                    // onClose: () => {
                    //     dispatch( uiCloseModalCuentaAction() );
                    // }
                });

                const parametro = body.errors[0].param;

                if (parametro) {

                    dispatch( telecomValidaFormAction( parametro ) );
                }


            }
            
        } catch (error) {
            
        }

    }
}

const tecnologiasAddNewAction = ( equipoTelecom ) => ({
    type: types.telecomAddNew,
    payload: equipoTelecom
});

const telecomValidaFormAction = ( param ) => ({
    type: types.telecomunicacionesValidaForm,
    payload: param
});

export const telecomClrValidaFormAction = () => ({
    type: types.telecomunicacionesClearValidaForm
});