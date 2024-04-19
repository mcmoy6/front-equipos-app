import React, { useEffect, useState, useRef } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { useDispatch, useSelector } from 'react-redux';
import { telecomStartLoadingAction } from '../../actions/telecomActions';

import LoadingBar from 'react-top-loading-bar';
import { BootstrapCardDataTable } from '../../loaders/BootstrapCardDataTable';
import { TelecomAddNewBtn } from '../ui/ui-telecomunicaciones/TelecomAddNewBtn';
import { TelecomModalNew } from './TelecomModalNew';
import { ToastContainer } from 'react-toastify';




const columns = [
{
    name: 'Tipo Dispositivo',
    selector: row => row.tipoDispositivo,
    sortable: true,
},
{
    name: 'Marca',
    selector: row => row.marca,
    sortable: true,
},
{
    name: 'Modelo',
    selector: row => row.modelo,
    sortable: true,
},
{
    name: 'Serie',
    selector: row => row.serie,
    sortable: true,
}

];

export const TelecomScreen = () => {

    const dispatch = useDispatch();

    const [ mostrarCardTable, setMostrarCardTable ] = useState(true);

    const { data } = useSelector( state => state.telecom );

    useEffect( () => {
        dispatch( telecomStartLoadingAction() );
    }, [dispatch]);

    useEffect( () => {
        // setShow(true);
        setTimeout(() => {
            // setShow(false);
            setMostrarCardTable(false);
        }, 1000);
  
      }, []);
  
        // BARRA LOADING
    const ref = useRef(null);
    const barLoading = () => ref.current.complete();
  
    useEffect( () => {
        barLoading();
    }, []);

    const tableData = {
        columns,
        data
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

    // const onChangePage = (page, totalRows) => {

    //     console.log(page);
    // }

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

    const customStyles = {
        // headRow: {
        //     style: {
        //         border: 'none',
        //     },
        // },
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
                borderRadius: '10px',
                outline: '1px solid #FFFFFF',
            },
        },
        pagination: {
            style: {
                border: 'none',
            },
        },
    };

    return (
        <div>

        <LoadingBar 
            color="#f11946" 
            ref={ref} 
            height={3}
            shadow={true} 
            loaderSpeed={700}
        />

        <ToastContainer
            enableMultiContainer
            containerId={"anId"}
        />

        {
            mostrarCardTable

            ?

            <BootstrapCardDataTable />

            :

            <DataTableExtensions
                {...tableData}
                export={false}
                print={false}
            >
                <DataTable 
                    title="Equipos Telecomunicaciónes" 
                    columns={columns} 
                    conditionalRowStyles={ conditionalRowStyles }
                    customStyles={customStyles}
                    data={data} 
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    highlightOnHover
                    pagination
                />
            </DataTableExtensions>
        }
            <TelecomAddNewBtn />

            <TelecomModalNew />

        </div>
    )
}
