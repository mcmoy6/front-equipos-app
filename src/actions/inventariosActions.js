import { fetchConToken } from '../helpers/fetch';
import {types} from '../types/types';



export const inventariosStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('inventario');
            const body = await resp.json();

            const inventariosData = body.inventarioLast;

            //console.log(equiposComp);
            dispatch( inventariosLoadedAction( inventariosData ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}

const inventariosLoadedAction = ( inventarios ) => ({
    type: types.inventariosGetLoaded,
    payload: inventarios
});

export const inventariosClearLoadedAction = () => ({
    type: types.inventariosClearLoaded
});

// export const sitioSetTargetActiveAction = ( targetTypead ) => ({
//     type: types.sitioSetTargetActive,
//     payload: targetTypead
// });

// export const sitioClearTargetActiveAction = () => ({
//     type: types.sitioClearTargetActive
// });