import { fetchConToken } from '../helpers/fetch';
import {types} from '../types/types';



export const sitiosStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('sitio');
            const body = await resp.json();

            const sitiosData = body.sitios;

            //console.log(equiposComp);
            dispatch( sitiosLoadedAction( sitiosData ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}

const sitiosLoadedAction = ( sitios ) => ({
    type: types.sitiosGetLoaded,
    payload: sitios
});

export const sitiosClearLoadedAction = () => ({
    type: types.sitiosClearLoaded
});

export const sitioSetTargetActiveAction = ( targetTypead ) => ({
    type: types.sitioSetTargetActive,
    payload: targetTypead
});

export const sitioClearTargetActiveAction = () => ({
    type: types.sitioClearTargetActive
});