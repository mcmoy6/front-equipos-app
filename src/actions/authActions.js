import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import Swal from 'sweetalert2';

import { types } from '../types/types';


export const startLoginAction = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken('auth', { email, password }, 'POST');
        const body = await resp.json();

        // console.log(body.nombre);

        if ( body.ok ) {

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            // console.log(body);

            dispatch( login({
                uid: body.id,
                name: body.nombre,
                idSitio: body.id_sitio,
                role: body.role
            }) );

        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startRegisterAction = ( nombre, email, password  ) => {
    return async ( dispatch ) => {

        const resp = await fetchSinToken('auth/new', { email, password, nombre }, 'POST');
        const body = await resp.json();

        //  console.loKUg(body);

        if ( body.ok ) {

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            console.log(body.msg);

            dispatch( login({
                uid: body.id,
                name: body.nombre,
                idSitio: body.id_sitio
            }) );

        } else {
            const { errors } = body;

            if ( errors ) {

                return Swal.fire('Error', {errors}, 'error');
            }

            Swal.fire('Error', body.msg, 'error');
        }

    }
}

export const startCheckingTkAction = () => {
    return async( dispatch ) => {

        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();

        //  console.log(body);

        if ( body.ok ) {

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            // console.log(body);

            dispatch( login({
                uid: body.uid,
                name: body.name,
                idSitio: body.idSitio,
                role: body.role
            }) );

        } else {
            // Swal.fire('Error', body.msg, 'error');
            dispatch( checkingFinich() );
        }

    }

}

const checkingFinich = () => ({
    type: types.authCheckingFinish
});

const login = ( user ) => ({
    type: types.authLogin,
    payload: user

});

export const startLooutAction = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );

    }
}

const logout = () => ( { type: types.authLogout } );