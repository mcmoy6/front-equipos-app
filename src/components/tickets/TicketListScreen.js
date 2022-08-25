import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';


import { ticketsStartLoadingAction } from '../../actions/ticketsActions';
import { TicketsAddNewBtn } from '../ui/ui-tickets/TicketsAddNewBtn';
import { TicketsItems } from './TicketsItems';
import { TicketsModalNew } from './TicketsModalNew';

import './tickets_styles.css';


export const TicketListScreen = () => {

    // const [show, setShow] = useState(false);
    
    // useEffect( () => {
    //     setShow(true);
        
    //     setTimeout(() => {
    //         setShow(false);
    //     }, 700);

    //   }, []);

    // BARRA LOADING
    const ref = useRef(null);
    const barLoading = () => ref.current.complete();

    useEffect( () => {
        barLoading();
      }, []);

    const { data } = useSelector( state => state.tickets );

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( ticketsStartLoadingAction() );
    }, [dispatch]);

    return (
    <div>

        {/* <Loader 
            fullPage 
            loading={show}
        /> */}

        <LoadingBar 
            color="#f11946" 
            ref={ref} 
            shadow={true} 
            loaderSpeed={700}
        />

        <div className='tickets-list'>
            {
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