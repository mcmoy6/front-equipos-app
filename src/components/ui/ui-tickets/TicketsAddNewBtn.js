import React from 'react'
import { useDispatch } from 'react-redux'

import { uiOpenModalTicketAction } from '../../../actions/ticketsActions';

export const TicketsAddNewBtn = () => {

    const dispatch = useDispatch();

    const handleClickNewTicket = () => {
        
        dispatch( uiOpenModalTicketAction() );
    }

    return (
        <button className="btn btn-primary fab" onClick={handleClickNewTicket}>
            <i className="fas fa-plus"></i>
        </button>
    )
}