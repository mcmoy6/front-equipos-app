import { fetchConToken } from '../helpers/fetch';



export const getTicketsByNumReporte = ( dataTicket ) => {
    return async() => {

        try {

            const resp = await fetchConToken(`ticket/${ dataTicket.numReporte }`);
            const body = await resp.json();

            const ticketsData = body.ticket;

            console.log(ticketsData);
            // dispatch( ticketsLoadedAction( ticketsData ) );
            
        } catch (error) {
            console.log(error);
        }
    }
}
