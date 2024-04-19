import React from 'react';
import { TextField, Box, Stack, Button, FormControl, Typography } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';



export const Ingresar = () => {

    const [ formValues, handLoginInputChange ] = useForm({
        agente: '',
        ventanilla: ''
    });

    const { agente, ventanilla } = formValues;

    const navigate = useNavigate();

    const handleSubmit = ( e ) => {
        e.preventDefault();

        navigate('/escritorio');

        console.log(formValues);
    }
    

  return (
    <Box sx={{
        width: 500,
        maxWidth: '100%',
        mt: 2,
        ml: 1
      }}>
            <Typography variant="h5" align='left' gutterBottom>
                Ingresar
            </Typography>
            <form onSubmit={ handleSubmit } >

                <FormControl fullWidth sx={{ m: 1, mt: 2 }}>
                    <TextField 
                        id="nombre-agente" 
                        label="Nombre del agente" 
                        name='agente'
                        value={agente}
                        onChange={ handLoginInputChange }
                        variant="outlined" 
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, mt: 2 }}>

                    <TextField 
                        id="ventanilla-escritorio" 
                        label="Ventanilla / Escritorio" 
                        name='ventanilla'
                        value={ ventanilla }
                        onChange={ handLoginInputChange }
                        variant="outlined" 
                    />
                </FormControl>
                
                <FormControl fullWidth sx={{ m: 1, mt: 2 }}>

                    <Stack spacing={2} direction="row">
                        <Button type='submit' variant="outlined">Ingresar</Button>
                    </Stack>
                </FormControl>

            </form>
    </Box>
  
  )
}
