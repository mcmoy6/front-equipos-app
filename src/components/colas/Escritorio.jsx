import React from 'react';
import { Box, Button, Divider, Fab, Grid, Paper, styled, Typography } from '@mui/material';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RedoIcon from '@mui/icons-material/Redo';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export const Escritorio = () => {

    const salir = () => {
        console.log('salir');
    }

    const siguienteTicket = () => {
        console.log('siguienteTicket');
    }

  return (
    <>
         <Box sx={{ flexGrow: 1, mt: 2 }}>
         <Grid container spacing={6}>
            <Grid item xs={6}>
                <Item>
                    <Typography variant='h6'> J Moisés Serrano </Typography>
                    
                </Item>
            </Grid>

            <Grid item xs={4}>
                <Item>
                    <Typography variant="h6" gutterBottom>
                        Ventanilla: 6
                    </Typography>
                </Item>
            </Grid>

            <Grid item xs={2}>
               
                    <Button 
                        variant="contained" 
                        color="error"
                        onClick={ salir }
                    >
                        Salir
                    </Button>
               
            </Grid>
        </Grid>

        <Divider sx={{ mt: 2, mb: 2 }} />

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Item>
                <Fab 
                    color="success" 
                    aria-label="add"
                    onClick={siguienteTicket}
                >
                    <RedoIcon />
                </Fab>
                </Item>
                <Item>
                    <Typography variant='subtitle2'> Siguiente.. </Typography>
                </Item>
            </Grid>

            <Grid item xs={4}>
                <Item>
                    <Typography variant="subtitle2" gutterBottom>
                        Usted atiende turno:
                    </Typography>
                    <Typography variant='h3'> 63 </Typography>
                </Item>
            </Grid>

           
        </Grid>

         </Box>
    </>
  )
}
