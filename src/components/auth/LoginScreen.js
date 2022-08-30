import React from 'react';
import { useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';
import { Grid, TextField, Button } from '@mui/material';
import { AuthLayout } from '../../layout/AuthLayout';
// import { useNavigate } from 'react-router-dom';


import { startLoginAction } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';
import './login.css';



export const LoginScreen = () => {

    const dispatch = useDispatch();


// ******* LOGIN *******

    const [ formLoginValues, handLoginInputChange ] = useForm({
        logEmail: '',
        logPassword: ''
    });

    const { logEmail, logPassword } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();

        // console.log(formLoginValues);

        dispatch( startLoginAction( logEmail, logPassword ) );
        
    }

// ******* REGISTRO DE USUARIO *******

    // const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    //     regNombre: 'JJ Macías',
    //     regEmail: 'macias9@gmail.com',
    //     regPassword: '1234567',
    //     regPassword2: '1234567'
    // });

    // const { regNombre, regEmail, regPassword, regPassword2 } = formRegisterValues;

    // const handleRegister = ( e ) => {
    //     e.preventDefault();

    //     // console.log(regNombre);

    //     if ( regPassword !== regPassword2 ) {

    //         return Swal.fire( 'Error', 'Las contraseñas no coinciden', 'error' );

    //     }

    //     dispatch( startRegisterAction( regNombre, regEmail, regPassword )  );
    // }

  
  return (
   <>

    <AuthLayout title='Login'>
        <form onSubmit={handleLogin} >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                        label="Correo"
                        type="text"
                        placeholder='correo@google.com'
                        name="logEmail"
                        value={logEmail}
                        onChange={ handLoginInputChange }
                        fullWidth
                    />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                        label="Contraseña"
                        type="password"
                        placeholder='Contraseña'
                        name="logPassword"
                        value={logPassword}
                        onChange={ handLoginInputChange } 
                        fullWidth
                    />
                    </Grid>
                    
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button type='submit' variant='contained' fullWidth>
                                Login
                            </Button>

                        </Grid>
                       
                    </Grid>

                </Grid>
            </form>
    </AuthLayout> 

    {/* <div className="container login-container">
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
            </div>
        </div> */}
   </>
    

  );
};
