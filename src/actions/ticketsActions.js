import { fetchConToken } from '../helpers/fetch';
import {types} from '../types/types';



export const ticketsStartAddNewAction = ( ticket ) => {
    return async( dispatch ) => {


        try {

            const resp = await fetchConToken('ticket/new', ticket, 'POST');
            const body = await resp.json();

            if ( body.ok) {
                ticket.id = body.ticketData.id
                dispatch( ticketsAddNewAction(ticket) );
                console.log(body.msg);
            }else {
                console.log(body.msg);
            }
            
        } catch (error) {
            
        }

    }
}

const ticketsAddNewAction = ( ticket ) => ({
    type: types.ticketsAddNew,
    payload: ticket
});

export const ticketsStartLoadingAction = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchConToken('ticket');
            const body = await resp.json();

            const ticketsData = body.tickets;

            //console.log(equiposComp);
            dispatch( ticketsLoadedAction( ticketsData ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}

const ticketsLoadedAction = ( tickets ) => ({
    type: types.ticketsGetLoaded,
    payload: tickets
});

export const ticketStartChangeStatusAction = ( ticket ) => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchConToken(`ticket/${ticket.id}`, ticket, 'PUT');
            const body = await resp.json();

            if (body.ok) {

                dispatch( ticketChangeStatus(ticket) );
                console.log(body.msg);

            } else {
                console.log(body.msg);
            }
        } catch (error) {
            console.log(error);
        }

    }
}

const ticketChangeStatus = ( rowTicket ) => ({
    type: types.ticketChangeStatus,
    payload: rowTicket
});

export const ticketSetActiveAction = ( ticket ) => ({
    type: types.ticketSetActive,
    payload: ticket
});

export const ticketClearSetActiveAction = () => ({
    type: types.ticketClearActive
});

export const uiOpenModalTicketAction = () => ({
    type: types.uiOpenModalTicket
});

export const uiCloseModalTicketAction = () => ({
    type: types.uiCloseModalTicket
});