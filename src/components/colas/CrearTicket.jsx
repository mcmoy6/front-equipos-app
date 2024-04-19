import React from 'react';
import { Box, Card, CardContent, CardActionArea, Typography, CardMedia } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export const CrearTicket = () => {

  // const theme = useTheme();
  
  const nuevoTicket = () => {
    console.log('nuevo ticket');
  }

  return (

    <Card sx={{ display: 'flex', maxWidth: 380 }}>
      <CardActionArea sx={{ display: 'flex' }} onClick={nuevoTicket}>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image={require('/Users/Moisés/Documents/React/ADMIN-EQUIPOS_REACT/07-equipos-app/src/components/colas/consulta-externa_green.png')}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Consulta Externa
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Último turno:
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 11, pb: 1 }}>
          <Typography component="div" variant="h4">
            65
          </Typography>
        </Box>
      </Box>
      </CardActionArea>
    </Card>

    // <Box sx={{ flexGrow: 1, mt: 2 }}>
    //     <Typography gutterBottom variant="h5">
    //       Presione sobre un servicio para generar un nuevo turno.
    //     </Typography>
    //   <Grid container spacing={1}>
    //     <Grid item xs={4}>

    //       <Card sx={{ maxWidth: 180 }}>
    //         <CardHeader
    //           subheader="September 14, 2016"
    //         />
    //         <CardActionArea onClick={nuevoTicket}>
    //           <CardMedia
    //             component="img"
    //             height="160"
    //             image={require('/Users/Moisés/Documents/React/ADMIN-EQUIPOS_REACT/07-equipos-app/src/components/colas/consulta-externa_transparent.png')}
    //             alt="otro"
    //           />
              
    //           <CardContent>
    //             <Typography gutterBottom variant="subtitle1" align='center' component="div">
    //               Consulta Externa
    //             </Typography>
    //             <Typography variant="h5" align='center' color="text.secondary">
    //               65
    //             </Typography>
    //           </CardContent>
    //         </CardActionArea>
    //       </Card>
    //     </Grid>

    //     <Grid item xs={4}>

    //       <Card sx={{ maxWidth: 180 }}>
    //         <CardActionArea>
    //           <CardMedia
    //             component="img"
    //             height="160"
    //             alt="consulta externa"
    //             image={require('/Users/Moisés/Documents/React/ADMIN-EQUIPOS_REACT/07-equipos-app/src/components/colas/diagnostico-e-imagenes-3.png')}
    //           />
    //           <Typography gutterBottom variant="subtitle1" align='center' component="div">
    //               Otro servicio
    //           </Typography>
    //           <CardContent>
    //             <Typography gutterBottom variant="h5" align='center' component="div">
    //               Otro servicio
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //               Lizards are a widespread group of squamate reptiles, with over 6,000
    //               species, ranging across all continents except Antarctica
    //             </Typography>
    //           </CardContent>
    //         </CardActionArea>
    //       </Card>
    //     </Grid>

    //     <Grid item xs={4}>

    //       <Card sx={{ maxWidth: 180 }}>
    //         <CardActionArea>
    //           <CardMedia
    //             component="img"
    //             height="160"
    //             alt="consulta externa"
    //             image={require('/Users/Moisés/Documents/React/ADMIN-EQUIPOS_REACT/07-equipos-app/src/components/colas/coloproctologia-3.png')}
    //           />
    //             <Typography gutterBottom variant="h5" align='center' component="div">
    //               Otro servicio
    //             </Typography>
             
    //         </CardActionArea>
    //       </Card>
    //     </Grid>

    //   </Grid>
    // </Box>

  )
}
