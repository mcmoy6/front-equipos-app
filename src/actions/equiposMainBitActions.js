import { fetchConToken } from '../helpers/fetch';
import { Slide, toast, Zoom } from 'react-toastify';
// import Swal from 'sweetalert2';

import {types} from '../types/types';




export const uiOpenModalEquiposMainBitAction = () => ({
    type: types.uiOpenModalEquiposMainBit
});

export const uiCloseModalEquiposMainBitAction = () => ({
    type: types.uiCloseModalEquiposMainBit
});

export const equipoMainBitSetActiveAction = (computer) => ({
    type: types.equipoMainBitSetActive,
    payload: computer
});

export const equipoMainBitClearSetActiveAction = () => ({
    type: types.equipoClearMainBitSetActive
});

export const equiposMainBitOnFocusAction = ( focus ) => ({
    type: types.equiposMainBitOnFocus,
    payload: focus
});

export const equiposMainBitStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('mainbilcomputer');
            const body = await resp.json();

            const equiposMainBitComp = body.computers;

            //console.log(equiposComp);
            dispatch( equiposLoadedAction( equiposMainBitComp ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}

const equiposLoadedAction = ( equipos ) => ({
    type: types.equiposMainBitGetLoaded,
    payload: equipos
});


export const equiposMainBitStartAddNewAction = ( computer ) => {  

    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('mainbilcomputer/new', computer, 'POST');
            const body = await resp.json();

            if ( body.ok) {


                computer.id = body.equipo.id
                dispatch( equiposMainBitAddNewAction(computer) );
                
                toast.success(body.msg, {
                    autoClose: 5000,
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "anId",
                    transition: Zoom,
                    theme: "colored"
                });

                dispatch( uiCloseModalEquiposMainBitAction() );

            }else {
                
                // console.log('e aqui');
                dispatch( equiposMainBitValidaFormAction() );
                
                toast.error(body.msg, {
                    autoClose: 2000,
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

                // dispatch( empeladosStartLoadingAction() );
                // dispatch( sitiosStartLoadingAction() );
                // dispatch( inventariosStartLoadingAction() );

            }
            
        } catch (error) {
            
        }

    }
}

const equiposMainBitValidaFormAction = () => ({
    type: types.equiposMainBitValidaForm,
});

const equiposMainBitAddNewAction = ( equipos ) => ({
    type: types.equiposMainBitAddNew,
    payload: equipos
});

export const equiposMainBitStartUpdateAction = ( equipo ) => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchConToken(`mainbilcomputer/${equipo.id}`, equipo, 'PUT');
            const body = await resp.json();

            if (body.ok) {

                dispatch( rowUpdateAction(equipo) );
                // console.log(body.msg);

                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: body.msg,
                //     showConfirmButton: false,
                //     timer: 1500
                // });
                toast.success(body.msg, {
                    autoClose: 5000,
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "anId",
                    transition: Zoom,
                    theme: "colored"
                });

                dispatch( uiCloseModalEquiposMainBitAction() );


            } else {
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
            }
        } catch (error) {
            console.log(error);
        }

    }
}

const rowUpdateAction = ( equipo ) => ({
    type: types.equiposMainBitRowUpdated,
    payload: equipo
});
