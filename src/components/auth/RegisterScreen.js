import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';


import { startRegisterAction } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';


export const RegisterScreen = () => {

    const [show, setShow] = useState(false);

    useEffect( () => {
        setShow(true);
        
        setTimeout(() => {
            setShow(false);
        }, 700);

      }, []);

    // BARRA LOADING
    const ref = useRef(null);
    const barLoading = () => ref.current.complete();

    useEffect( () => {
        barLoading();
      }, []);


    const dispatch = useDispatch();

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        regNombre: '',
        regEmail: '',
        regPassword: '',
        regPassword2: ''
    });

    const { regNombre, regEmail, regPassword, regPassword2 } = formRegisterValues;

    const handleRegister = ( e ) => {
        e.preventDefault();

        // console.log(regNombre);

        if ( regPassword !== regPassword2 ) {

            return Swal.fire( 'Error', 'Las contraseñas no coinciden', 'error' );

        }

        dispatch( startRegisterAction( regNombre, regEmail, regPassword )  );
    }


  return (

    <div className="container register-container">

        <Loader 
            fullPage 
            loading={show}
        />

        <LoadingBar 
            color="#f11946" 
            ref={ref} 
            shadow={true} 
            loaderSpeed={700}
        />
    
        <div className="offset-2 col-8 login-form-2">
            <h3>Registro</h3>
            <form onSubmit={ handleRegister }>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="regNombre"
                        value={ regNombre }
                        onChange={ handleRegisterInputChange }
                    />
                    <label className="for" htmlFor="floatingInput">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo"
                        name="regEmail"
                        value={ regEmail }
                        onChange={ handleRegisterInputChange }
                    />
                    <label className="for" htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña" 
                        name="regPassword"
                        value={ regPassword }
                        onChange={ handleRegisterInputChange }
                    />
                    <label className="for" htmlFor="floatingInput">Contraseña</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Repita la contraseña" 
                        name="regPassword2"
                        value={ regPassword2 }
                        onChange={ handleRegisterInputChange }
                    />
                    <label className="for" htmlFor="floatingInput">Repita la contraseña</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                        type="submit" 
                        className="btnSubmit" 
                        value="Crear cuenta" />
                </div>
            </form>
        </div>
    </div>
  )
}
