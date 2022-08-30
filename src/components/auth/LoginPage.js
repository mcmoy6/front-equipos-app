import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { AuthLayout } from '../../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
        <form>
                <Grid container>
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
                                Login
                            </Button>

                        </Grid>
                       
                    </Grid>

                </Grid>
            </form>
    </AuthLayout>
            
        
  )

}
