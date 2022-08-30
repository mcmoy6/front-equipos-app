import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { AuthLayout } from '../../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Registrar usuario'>
        <form>
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                        label="Nombre Completo"
                        type="text"
                        placeholder='Tu nombre'
                        fullWidth
                    />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                        label="Correo"
                        type="email"
                        placeholder='correo@google.com'
                        fullWidth
                    />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField 
                        label="Contraseña"
                        type="password"
                        placeholder='Contraseña'
                        fullWidth
                    />
                    </Grid>
                    
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant='contained' fullWidth>
                                Registrar
                            </Button>

                        </Grid>
                       
                    </Grid>

                </Grid>
            </form>
    </AuthLayout>
            
        
  )

}
