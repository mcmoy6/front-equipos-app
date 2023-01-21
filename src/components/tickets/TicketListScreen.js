import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'react-overlay-loader';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer  } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import { ticketsStartLoadingAction } from '../../actions/ticketsActions';
import { TicketsAddNewBtn } from '../ui/ui-tickets/TicketsAddNewBtn';
import { TicketsItems } from './TicketsItems';
import { TicketsModalNew } from './TicketsModalNew';

import './tickets_styles.css';


export const TicketListScreen = () => {

    
    const { data } = useSelector( state => state.tickets );

    const dispatch = useDispatch();
        

    const [currentPage, setCurrentPage] = useState(0);

    const [search, setSearch] = useState('');

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
   
    
    // let results = [];

    // if (!searchText) {
    //     results = data;
    // } else {

    //     results = data.filter( elemento => elemento.num_reporte.toLowerCase().includes( searchText.toLocaleLowerCase() ) );
    // }

    const noMoreTickets = () => {

        return data.filter( ticket => ticket.num_reporte.toLowerCase().includes( search.toLocaleLowerCase() ) );
        
    }

    
    const filteredTickets = () => {

        if (search.length === 0)
        return data.slice( currentPage, currentPage + 5 );

        // Si hay algo en la caja de texto
        const filtered = data.filter( ticket => ticket.num_reporte.toLowerCase().includes( search.toLocaleLowerCase() ) );
        return filtered.slice( currentPage, currentPage + 5 );
    }

    const showError  = (search.trim().length > 0) && filteredTickets().length === 0;

    const nextPage = (e) => {
        e.preventDefault();

        if ( noMoreTickets().length > currentPage + 5 )
            setCurrentPage( currentPage + 5 );
    }

    const prevPage = (e) => {
        e.preventDefault();

        if( currentPage > 0 )
        setCurrentPage( currentPage - 5 );

    }

    const onSearchChange = ({ target }) => {
        setCurrentPage(0);
        setSearch( target.value );

    }

    const resetInput = () => {
        setSearch('');
    }

    useEffect( () => {
        dispatch( ticketsStartLoadingAction() );
    }, [dispatch]);

    return (
    <div>

        <Loader 
            fullPage 
            loading={show}
        />

        <LoadingBar 
            color="#f11946" 
            height={3}
            ref={ref} 
            shadow={true} 
            loaderSpeed={700}
        />

        <ToastContainer />

        <Paper
            component="form"
            sx={{ p: '4px 8px', display: 'flex', alignItems: 'center', width: 300 }}
            variant="outlined"
        >

        <IconButton sx={{ p: '4px' }} disabled={true} aria-label="menu">
            <SearchIcon />
        </IconButton>

         <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Ticket"
            inputProps={{ 'aria-label': 'search ticket' }}
            name='search'
            value={ search }
            onChange={ onSearchChange }
        />

       
        {
            search.trim().length > 0

            &&

            <IconButton type="button" sx={{ p: '4px' }} onClick={ resetInput } aria-label="search">
                <CloseIcon />
            </IconButton>

        }
            
        </Paper>

        <Typography variant="h5" sx={{ p: '24px'}} gutterBottom>
            Tickets Soporte
        </Typography>

                
        <div className='tickets-list'>         

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No tickets with <b>{ search }</b>
            </div>

           
            {
                filteredTickets().map( value => (
                    <TicketsItems key={ value.id } { ...value } search={ search } />
                ))

            }


            {
                !showError
                &&
                <Paper
                    component="form"
                    sx={{ p: '4px 8px', textAlign: 'center' }}
                    md={{ p: '4px 8px', textAlign: 'center' }}
                    elevation={0}
                >  
                    <IconButton
                        aria-label="more"
                        aria-haspopup="true"
                        disabled={ currentPage === 0 && true}
                        onClick={ prevPage }
                        sx={{ m: 2 }}
                        >
                        <ArrowBackIosIcon fontSize="small" />
                    </IconButton>
                       
                    <IconButton
                        aria-label="more"
                        aria-haspopup="true"
                        disabled={ noMoreTickets().length < currentPage + 5 && true }
                        onClick={ nextPage }
                        sx={{ m: 1 }}
                        >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Paper>       
            
            }      

            <TicketsAddNewBtn />

            <TicketsModalNew />

        </div>
        
    </div>
      );
  };