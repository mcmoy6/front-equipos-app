import React, { useMemo, useState } from 'react';
import './tickets_styles.css';
// import FeatherIcon from 'feather-icons-react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
// import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { green, red } from '@mui/material/colors';
// import LabelIcon from '@mui/icons-material/Label';

import { withStyles } from '@material-ui/core';

import moment from 'moment';
import 'moment/locale/es-mx';
import { useDispatch, useSelector } from 'react-redux';

import { ticketSetActiveAction, ticketStartChangeStatusAction } from '../../actions/ticketsActions';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 800,
  color: theme.palette.text.primary,
}));


export const TicketsItems = ({ id, equipo, tipo_reporte, descripcion, num_reporte, num_rproveedor, estado, createdAt, updatedAt }) => {
  
  const dispatch = useDispatch();

  const { activeRowTicket } = useSelector( state => state.tickets );


  const ticketDate = moment( createdAt );


  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleTicketClick = () => {
    dispatch( ticketSetActiveAction({ id, equipo, tipo_reporte, descripcion, num_reporte, num_rproveedor, estado, createdAt, updatedAt }) );
  }

  const handleCloseTicket = () => {

    dispatch( ticketStartChangeStatusAction({
      ...activeRowTicket,
      estado: 1
    }) );

    handleClose();

  }

  const StyledTypography = useMemo(() => {
      return withStyles({
        root: {
          textDecoration: "line-through",
          letterSpacing: "2px"
        }
      })(Typography);
    }, []);

    return (
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
        onClick={ handleTicketClick }
      >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={ estado ? { bgcolor: red[400] } : { bgcolor: green[400] } }>JM</Avatar>
        </Grid>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>

              {
                estado
                ?
                // <Badge
                //   badgeContent={'Cerrado'} 
                //   color="error"
                //   anchorOrigin={{
                //     vertical: 'top',
                //     horizontal: 'right',
                //   }}
                // >
                  <StyledTypography gutterBottom variant="subtitle1" component="div">
                  { tipo_reporte }
                  </StyledTypography>
                // </Badge>
                :
                // <Badge
                //     badgeContent={'Abierto'} 
                //     color="success"
                //     anchorOrigin={{
                //     vertical: 'top',
                //     horizontal: 'right',
                //   }}
                // >
                  <Typography gutterBottom variant="subtitle1" component="div">
                  { tipo_reporte }
                  </Typography>
                // </Badge>
              }
           
            
              <Typography variant="body2" gutterBottom>
              { descripcion }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                N. Rep: {num_reporte}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prov: { num_rproveedor }
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              { ticketDate.startOf('hour').fromNow() }
              </Typography>
            </Grid>

           

          </Grid>
          <Grid item xs={1}>
            <IconButton
             aria-label="more"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem disabled={!!estado} onClick={handleCloseTicket}>Cerrar Ticket</MenuItem>
              {/* <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
          </Grid>
        </Grid>    
          
        </Grid>
   

      </StyledPaper>
      </Box>

      );
  };