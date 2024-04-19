import { fetchConToken } from '../helpers/fetch';
import { Slide, toast, Zoom } from 'react-toastify';

import {types} from '../types/types';


//*********** MODAL REGISTRAR EMPLEADO ***********/

export const uiOpenModalCuentaAction = () => ({
    type: types.uiOpenModalCuenta
});

export const uiCloseModalCuentaAction = () => ({
    type: types.uiCloseModalCuenta
});


export const cuentasStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('cuenta');
            const body = await resp.json();

            const cuentasInst = body.cuentas;

            //console.log(equiposComp);
            dispatch( cuentasLoadedAction( cuentasInst ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}

const cuentasLoadedAction = ( cuentas ) => ({
    type: types.cuentasGetLoaded,
    payload: cuentas
});


//*********** REGISTRAR datos Cuenta ***********/

export const cuentasStartAddNewAction = ( cuenta ) => {

    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('cuenta/new', cuenta, 'POST');
            const body = await resp.json();

            if ( body.ok) {
                cuenta.id = body.cuentadom.id

                
                dispatch( cuentasAddNewAction(cuenta) );

                toast.success(body.msg, {
                    autoClose: 5000,
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "anId",
                    transition: Zoom,
                    theme: "colored"
                });

                dispatch( uiCloseModalCuentaAction() );

                dispatch( cuentasClrValidaFormAction() );
                // dispatch( cuentasResetFormAction( initRow ) );

            }else {

                // console.log(body.msg);
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

                    dispatch( cuetasValidaFormAction( parametro ) );
                }


            }
            
        } catch (error) {
            
        }

    }
}

const cuentasAddNewAction = ( cuenta ) => ({
    type: types.cuentasAddNew,
    payload: cuenta
});

const cuetasValidaFormAction = ( param ) => ({
    type: types.cuentasValidaForm,
    payload: param
});

export const cuentasClrValidaFormAction = () => ({
    type: types.cuentasClearValidaForm
});

// const cuentasResetFormAction = ( initRow ) => ({
//     type: types.cuentasResetForm,
//     payload: initRow
// });