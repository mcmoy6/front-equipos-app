import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
import queryString from 'query-string';

import 'react-toastify/dist/ReactToastify.css';


import { ticketsStartLoadingAction, ticketStartSingleLoadingAction } from '../../actions/ticketsActions';
import { TicketsAddNewBtn } from '../ui/ui-tickets/TicketsAddNewBtn';
import { TicketsItems } from './TicketsItems';
import { TicketsModalNew } from './TicketsModalNew';

import './tickets_styles.css';


export const TicketListScreen = () => {

    const { data, dataSingleTicket } = useSelector( state => state.tickets );

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const showSearch = (q.length === 0);
    const showError  = (q.length > 0) && dataSingleTicket.length === 0;

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

    

    const [ formValues, setFormValues ] = useState({
        searchText: ''
    });

    const { 
        searchText
    } = formValues;


    const handleRegisterInputChange = ({ target }) => {
        // console.log(target.value);      

        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });

        // dispatch( ticketStartSingleLoadingAction(formValues) );
        
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();

        dispatch( ticketStartSingleLoadingAction(formValues) );

        navigate(`?q=${ searchText }`);
    }

    // const dataTiclet = {
    //     numReporte: 'INC'
    // }

    useEffect( () => {
        dispatch( ticketsStartLoadingAction() );
        // dispatch( ticketStartSingleLoadingAction() );
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

        <div className="col-6">
           
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search a ticket"
                className="form-control"
                name="searchText"
                value={searchText}
                onChange={handleRegisterInputChange}
                autoComplete="off"
              />
              <button className="btn btn-outline-primary mt-1">
                Search
              </button>
            </form>
          </div>
        
        <div className='tickets-list'>

            {/* <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No tickets with <b>{ q }</b>
            </div> */}

           
            {
                dataSingleTicket.length > 0

                ?

                dataSingleTicket.map( value => (
                    <TicketsItems key={ value.id } { ...value } />
                ))

                :

                data.map( value => (
                    <TicketsItems key={ value.id } { ...value } />
                ))

            }

            <TicketsAddNewBtn />

            <TicketsModalNew />

        </div>
        
    </div>
      );
  };