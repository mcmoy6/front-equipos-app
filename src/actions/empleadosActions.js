import { fetchConToken } from '../helpers/fetch';
import {types} from '../types/types';


export const empleadoStartAddNewAction = ( dataEmpleado ) => {
    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('empleado/new', dataEmpleado, 'POST');
            const body = await resp.json();

            if ( body.ok) {
                
                dispatch( empleadoAddNewAction(dataEmpleado) );
                console.log(body.msg);

            }else {
                console.log(body.msg);
            }
            
        } catch (error) {
            
        }

    }
}

const empleadoAddNewAction = ( empleado ) => ({
    type: types.empleadoAddNew,
    payload: empleado
});

export const empeladosStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('empleado');
            const body = await resp.json();

            const empleadosData = body.empleados;

            dispatch( empleadosLoadedAction( empleadosData ) );
            
        } catch (error) {
            console.log(error);
        }
    }

}

const empleadosLoadedAction = ( empleados ) => ({
    type: types.empleadosGetLoaded,
    payload: empleados
});

export const empleadosClearLoadedAction = () => ({
    type: types.empleadosClearLoaded
});

export const empleadoSetActiveAction = ( empleado ) => ({
    type: types.empleadoSetActive,
    payload: empleado
});

export const empleadoClearSetActiveAction = () => ({
    type: types.empleadoClearSetActie
});

export const empleadoCustOptionAction = ( custOption ) => ({
    type: types.empleadoCustOption,
    payload: custOption
});

export const empleadoClearCustOptionAction = () => ({
    type: types.empleadoClearCustOption
});

export const empleadoOpenModalEditAction = () => ({
    type: types.empleadoOpenModalEdit
});

export const empleadoClearOpenModalEditAction = () => ({
    type: types.empeladoClearOpenModalEdit
});

export const empleadoSetActiveEditAction = (empleado) => ({
    type: types.empleadoSetActiveEdit,
    payload: empleado
});

export const empleadoClearActiveEditAction = () => ({
    type: types.empleadoClearActiveEdit
});