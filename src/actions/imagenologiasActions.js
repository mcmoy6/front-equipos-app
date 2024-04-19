import { fetchConToken } from '../helpers/fetch';
import { Slide, toast, Zoom } from 'react-toastify';


import {types} from '../types/types';


export const uiOpenModalImgAction = () => ({
    type: types.uiOpenModalImagenologia
});

export const uiCloseModalImgAction = () => ({
    type: types.uiCloseModalImagenologia
});

export const imagenologiasStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('imagenologia');
            const body = await resp.json();

            const imagenologiaEq = body.equiposImagen;

            // console.log(imagenologiaEq);
            dispatch( imagenologiasLoadedAction( imagenologiaEq ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}

const imagenologiasLoadedAction = ( imagenEquipos ) => ({
    type: types.imagenologiasGetLoaded,
    payload: imagenEquipos
});


export const imagenologiasStartAddNewAction = ( equImagen ) => {

    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('imagenologia/new', equImagen, 'POST');
            const body = await resp.json();

            if ( body.ok) {

                equImagen.id = body.equipoImagData.id
                
                dispatch( imagenologiasAddNewAction(equImagen) );

                toast.success(body.msg, {
                    autoClose: 5000,
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "anId",
                    transition: Zoom,
                    theme: "colored"
                });

                dispatch( uiCloseModalImgAction() );

                dispatch( imagenClearValidaFormAction() );

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

                    dispatch( imagenValidaFormAction( parametro ) );
                }


            }
            
        } catch (error) {
            
        }

    }
}

const imagenologiasAddNewAction = ( equipoImg ) => ({
    type: types.imagenologiasAddNew,
    payload: equipoImg
});

const imagenValidaFormAction = ( param ) => ({
    type: types.imagenologiasValidaForm,
    payload: param
});

export const imagenClearValidaFormAction = () => ({
    type: types.imagenologiasClearValidaForm
});

