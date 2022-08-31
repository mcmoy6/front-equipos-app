import { fetchConToken } from '../helpers/fetch';
import {types} from '../types/types';
import Swal from 'sweetalert2';
import { empeladosStartLoadingAction } from './empleadosActions';
import { sitiosStartLoadingAction } from './sitiosActions';
import { inventariosStartLoadingAction } from './inventariosActions';


export const uiOpenModalEquAction = () => ({
    type: types.uiOpenModalEquipos
});

export const uiCloseModalEquAction = () => ({
    type: types.uiCloseModalEquipos
});

export const uiOpenModalEditEquAction = () => ({
    type: types.uiOpenModalEditEquipos
});

export const uiCloseModalEditEquAction = () => ({
    type: types.uiCloseModalEditEquipos
});

//************* ABRIR Y CERRAR SIDEBAR ************/

export const uiMovilOpenMenuAction = () => ({
    type: types.uiMovilOpenMenu
});


//*********** MODAL REGISTRAR EMPLEADO ***********/

export const uiOpenModalEmpleadoAction = () => ({
    type: types.uiOpenModalEmpleado
});

export const uiCloseModalEmpleadoAction = () => ({
    type: types.uiCloseModalEmpleado
});

//************************************************/


export const equipoSetActiveAction = ( computer ) => ({
    type: types.equipoSetActive,
    payload: computer
});

export const equipoClearSetActiveAction = () => ({
    type: types.equipoClearSetActive
});

export const equipoSetActiveTempAction = ( computer ) => ({
    type: types.equipoSetActiveTemp,
    payload: computer
});

export const equipoClearSetActiveTempAction = () => ({
    type: types.equipoClearSetActiveTemp
});

export const equipoSetTargetActiveAction = ( targetTypead ) => ({
    type: types.equipoSetTargetActive,
    payload: targetTypead
});

export const equipoClearTargetActiveAction = () => ({
    type: types.equipoClearTargetActive
});

export const equipoClearRowSelectedAction = () => ({
    type: types.equiposClearRowSelected
});

export const equipoNoClearRowSelectedAction = () => ({
    type: types.equiposNoClearRowSelected
});


export const equiposStartAddNewAction = ( computer ) => {  

    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('computer/new', computer, 'POST');
            const body = await resp.json();

            if ( body.ok) {

                dispatch( equiposGoBackAction() );

                computer.id = body.equipo.id
                dispatch( equiposAddNewAction(computer) );
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: body.msg,
                    showConfirmButton: false,
                    timer: 1500
                  });


            }else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: body.msg,
                    showConfirmButton: true,
                  });

                dispatch( empeladosStartLoadingAction() );
                dispatch( sitiosStartLoadingAction() );
                dispatch( inventariosStartLoadingAction() );

            }
            
        } catch (error) {
            
        }

    }
}

const equiposAddNewAction = ( equipos ) => ({
    type: types.equiposAddNew,
    payload: equipos
});

const equiposGoBackAction = () => ({
    type: types.equiposGoBackEquipos
});

export const equiposNoGoBackAction = () => ({
    type: types.equiposNoGoBackEquipos
});

export const equiposStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('computer');
            const body = await resp.json();

            const equiposComp = body.computers;

            //console.log(equiposComp);
            dispatch( equiposLoadedAction( equiposComp ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}

const equiposLoadedAction = ( equipos ) => ({
    type: types.equiposGetLoaded,
    payload: equipos
});

export const equiposStartUpdateAction = ( equipo ) => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchConToken(`computer/${equipo.id}`, equipo, 'PUT');
            const body = await resp.json();

            if (body.ok) {

                dispatch( rowUpdateAction(equipo) );
                // console.log(body.msg);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: body.msg,
                    showConfirmButton: false,
                    timer: 1500
                });

            } else {
                console.log(body.msg);
            }
        } catch (error) {
            console.log(error);
        }

    }
}

const rowUpdateAction = ( equipo ) => ({
    type: types.equiposRowUpdated,
    payload: equipo
});

export const equipoStartDeleteAction = () => {
    return async(dispatch, getState) => {

        const { id } = getState().equipos.activeRowEquipos;

        try {

            const resp = await fetchConToken(`computer/${id}`, {}, 'DELETE');
            const body = await resp.json();

            if ( body.ok) {

                dispatch( equipoRowDeletedAction() );
                console.log(body.msg);
            } else {
                console.log('Algo pasó, algun problema ocurrió...');
            }
            
        } catch (error) {
            console.log(error);
        }

    }
}

const equipoRowDeletedAction = () => ({
    type: types.equipoRowDeleted
});