import React, { useEffect } from 'react';
import { TicketsAddNewBtn } from '../ui/ui-tickets/TicketsAddNewBtn';

import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
// import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { ticketClearSetActiveAction, ticketSetActiveAction, ticketsStartLoadingAction } from '../../actions/ticketsActions';
import { DeleteTicketBtn } from '../ui/ui-tickets/DeleteTicketBtn';
import { TicketsEditBtn } from '../ui/ui-tickets/TicketsEditBtn';
import { TicketsModalNew } from './TicketsModalNew';


const columns = [
    {
        name: 'No. Reporte',
        selector: row => row.num_reporte,
        sortable: true,
    },
    {
        name: 'N/S. Equipo',
        selector: row => row.equipo,
        sortable: true,
    },
    {
        name: 'Tipo',
        selector: row => row.tipo_reporte,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: row => row.estado,
        sortable: true,
    },
    {
        name: 'Descripcion',
        selector: row => row.descripcion,
        sortable: true,
    }
    
];


export const TicketScreen = () => {

    const dispatch = useDispatch();

    const { data, activeRowTicket } = useSelector( state => state.tickets );

    useEffect( () => {
        dispatch( ticketsStartLoadingAction() );
    }, [dispatch]);

    const handleRowSelected = ({selectedRows}) => {
        const [elementos] = selectedRows;

        if (elementos) {
            dispatch( ticketSetActiveAction(elementos) );
        } else {
            dispatch( ticketClearSetActiveAction() );
        }
    }

    const conditionalRowStyles = [
        {
          when: row => row.toggleSelected,
          style: {
            backgroundColor: 'rgba(63, 195, 128, 0.9)',
            userSelect: "none"
          }
        }
      ];

    const customStyles = {
        headRow: {
            style: {
                border: 'none',
            },
        },
        headCells: {
            style: {
                color: '#202124',
                fontSize: '14px',
            },
        },
        rows: {
            highlightOnHoverStyle: {
                backgroundColor: 'rgb(230, 244, 244)',
                borderBottomColor: '#FFFFFF',
                borderRadius: '25px',
                outline: '1px solid #FFFFFF',
            },
        },
        pagination: {
            style: {
                border: 'none',
            },
        },
    };

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const tableData = {
        columns,
        data
      }

    return (
        <div>
            <DataTableExtensions
                {...tableData}
                export={false}
                print={false}
            >
                <DataTable 
                    title="Tickets list" 
                    conditionalRowStyles={conditionalRowStyles}
                    customStyles={customStyles}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    onSelectedRowsChange={handleRowSelected}
                    highlightOnHover
                    selectableRows
                    selectableRowsHighlight={true}
                    selectableRowsSingle
                    pagination
                    pointerOnHover
                />
            </DataTableExtensions>

            {activeRowTicket && <DeleteTicketBtn />}
            {activeRowTicket && <TicketsEditBtn />}

            <TicketsAddNewBtn />

            <TicketsModalNew />
        </div>
    );

}