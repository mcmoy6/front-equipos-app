import React, { useEffect, useState } from 'react';
import './tickets_styles.css';
import FeatherIcon from 'feather-icons-react';


import moment from 'moment';
import 'moment/locale/es-mx';
import { useDispatch, useSelector } from 'react-redux';

import { ticketSetActiveAction, ticketStartChangeStatusAction } from '../../actions/ticketsActions';


export const TicketsItems = ({ id, equipo, tipo_reporte, descripcion, num_reporte, num_rproveedor, estado, createdAt, updatedAt }) => {
  
  const dispatch = useDispatch();

  const { activeRowTicket } = useSelector( state => state.tickets );

  // const [ rowTicket, setRowTicket ] = useState(null);

  const ticketDate = moment( createdAt );

//   useEffect(() => {
//         setRowTicket(activeRowTicket);
//         console.log(rowTicket);
// }, [dispatch, activeRowTicket]);

  const handleTicketClick = () => {
    dispatch( ticketSetActiveAction({ id, equipo, tipo_reporte, descripcion, num_reporte, num_rproveedor, estado, createdAt, updatedAt }) );
  }

  const handleCloseTicket = () => {
    console.log('Se cambió el estatus');
    dispatch( ticketStartChangeStatusAction({
      ...activeRowTicket,
      estado: 1
    }) );
  }

    return (
      <div 
        className='ticket-item'
        onClick={ handleTicketClick }
      >

          {/* <div 
            className='ticket-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)'
            }}
          ></div> */}

          <div className='ticket-body'>

              <p className='ticket-title'>
                { tipo_reporte }
              </p>

              <p className='ticket-content'>
                { descripcion }
              </p>

              <div className='ticket-date-box'>
                <span>{ ticketDate.startOf('hour').fromNow() }</span>
              </div>

              <div className='ticket-status'>
                { 
                  estado ? <span className="badge badge-bg-close">CERRADO</span> 
                    :
                  <span className="badge badge-bg-open">ABIERTO</span>
                }
              </div>

          </div>

          {/* <div className='ticket-status'>
              <h4>{ ticketDate.format('Do') }</h4>  
             <span class="badge rounded-pill bg-success">Abierto</span>
            
          </div> */}

          <div className='lista'>
            <div className="dropdown">
              <button className="btn btn-default" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <FeatherIcon icon="more-vertical" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><div className={`dropdown-item ${estado && 'disabled'}`} onClick={ handleCloseTicket }
                ><FeatherIcon icon="file-minus" /> Cerrar ticket</div></li>

                {/* { !estado && <li><a className="dropdown-item" href="#" onClick={ handleCloseTicket }
                ><FeatherIcon icon="file-minus" /> Cerrar ticket</a></li> }   
                     */}
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
        </div>
        
      </div>
      );
  };