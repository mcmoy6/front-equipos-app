import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { ToastContainer  } from 'react-toastify';

import LoadingBar from 'react-top-loading-bar';
import { BootstrapCardDataTable } from '../../loaders/BootstrapCardDataTable';

import { imagenologiasStartLoadingAction } from '../../actions/imagenologiasActions';
import { ImagenologiaAddNewBtn } from '../ui/ui-imagenologias/ImagenologiaAddNewBtn';
import { ImagenModalNew } from './ImagenModalNew';
import { useScreenSize } from '../../hooks/useScreenSize';


const columns = [
    {
        name: 'Descripción',
        selector: row => row.descripcion,
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
    },
    {
        name: 'Ubicación',
        selector: row => row.ubicacion,
        sortable: true,
        
    },
    {
        name: 'Clasificacion',
        selector: row => row.clasificacion,
        sortable: true,
    },
    {
        name: 'Cant.',
        selector: row => row.cantidad,
        sortable: true,
    },

      
];


export const ImagenologiasScreen = () => {

    const { width } = useScreenSize();

    const [ mostrarCardTable, setMostrarCardTable ] = useState(true);

    const dispatch = useDispatch();

    const { data } = useSelector( state => state.imagenologias );

    useEffect( () => {
        dispatch( imagenologiasStartLoadingAction() );
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

    const onChangePage = (page, totalRows) => {

        console.log(totalRows);
    }

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

    <>

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
                    title="Equipos de Imagenología" 
                    columns={columns} 
                    conditionalRowStyles={ conditionalRowStyles }
                    customStyles={customStyles}
                    data={data} 
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    fixedHeader={true}
                    fixedHeaderScrollHeight={`${width <= 767 && '450px'}`}
                    highlightOnHover
                    onChangePage={onChangePage}
                    pagination
                />
            </DataTableExtensions>

        }
    

        <ImagenologiaAddNewBtn />
        <ImagenModalNew />
    </>
  )
}
