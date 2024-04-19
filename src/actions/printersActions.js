import { fetchConToken } from '../helpers/fetch';
import { Slide, toast, Zoom } from 'react-toastify';

import { types } from "../types/types";


export const uiOpenModaPrinterlAction = () => ({
    type: types.uiOpenModalPrinter
});

export const uiCloseModalPrinterAction = () => ({
    type: types.uiCloseModalPrinter
});

export const uiOpenModalPrinterEditAction = () => ({
    type: types.uiOpenModalPrinterEdit
});

export const uiCloseModalPrinterEditAction = () => ({
    type: types.uiCloseModalPrinterEdit
});

export const printerSetActiveAction = ( printer ) => ({
    type: types.printerSetActive,
    payload: printer
});

export const printerClearActiveAction = () => ({
    type: types.printerClearActive
});


export const printersStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('impresora');
            const body = await resp.json();

            const equiposImpr = body.impresoras;

            //console.log(equiposComp);
            dispatch( printersLoadedAction( equiposImpr ) );
            
            
        } catch (error) {
            console.log(error);
        }
    }
}

const printersLoadedAction = ( impresoras ) => ({
    type: types.printersGetLoaded,
    payload: impresoras
});


export const printerStartAddNewAction = ( impresora ) => {
    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('impresora/new', impresora, 'POST');
            const body = await resp.json();

            if ( body.ok) {

                impresora.id = body.impresoraData.id
                dispatch( printerAddNewAction(impresora) );

                toast.success(body.msg, {
                    autoClose: 5000,
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "anId",
                    transition: Zoom,
                    theme: "colored"
                });

                dispatch( uiCloseModalPrinterAction() );

                dispatch( printerClrValidaFormAction() );

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

                if ( parametro ) {
                    
                    dispatch( printerValidaFormAction( parametro ) );

                }


            }
            
        } catch (error) {
            
        }

    }
}

const printerAddNewAction = ( impresora ) => ({
    type: types.printerAddNew,
    payload: impresora
});

const printerValidaFormAction = ( param ) => ({
    type: types.printerValidaForm,
    payload: param
});

export const printerClrValidaFormAction = () => ({
    type: types.printerClearValidaForm
});

export const printerStartUpdateAction = ( impresora ) => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchConToken(`impresora/${impresora.id}`, impresora, 'PUT');
            const body = await resp.json();

            if (body.ok) {

                dispatch( printerRowUpdateAction(impresora) );
                console.log(body.msg);

            } else {
                console.log(body.msg);
            }
        } catch (error) {
            console.log(error);
        }

    }
}

const printerRowUpdateAction = ( impresora ) => ({
    type: types.printerRowUpdated,
    payload: impresora
});

