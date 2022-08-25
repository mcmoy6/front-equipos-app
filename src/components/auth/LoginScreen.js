import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';


import { startLoginAction, startRegisterAction } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';
import './login.css';



export const LoginScreen = () => {

    const dispatch = useDispatch();


// ******* LOGIN *******

    const [ formLoginValues, handLoginInputChange ] = useForm({
        logEmail: 'mcmoy6@gmail.com',
        logPassword: '1234567'
    });

    const { logEmail, logPassword } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();

        // console.log(formLoginValues);

        dispatch( startLoginAction( logEmail, logPassword ) );
        
    }

// ******* REGISTRO DE USUARIO *******

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        regNombre: 'JJ Macías',
        regEmail: 'macias9@gmail.com',
        regPassword: '1234567',
        regPassword2: '1234567'
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
    
    <div className="container login-container">
            <div className="row">
                <div className="offset-3 col-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin } >
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="logEmail"
                                value={logEmail}
                                onChange={ handLoginInputChange }
                            />
                            <label className="for" htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="logPassword"
                                value={logPassword}
                                onChange={ handLoginInputChange } 
                            />
                            <label className="for" htmlFor="floatingInput">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <button 
                                className="btnSubmit"
                                
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>                          

                {/* <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleRegister }>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="regNombre"
                                value={ regNombre }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="regEmail"
                                value={ regEmail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="regPassword"
                                value={ regPassword }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="regPassword2"
                                value={ regPassword2 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div> */}
            </div>
        </div>

  );
};
