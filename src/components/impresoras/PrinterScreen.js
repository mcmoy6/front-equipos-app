import React, { useEffect, useMemo, useRef, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { useDispatch, useSelector } from 'react-redux';
import 'react-data-table-component-extensions/dist/index.css'; 
// import FeatherIcon from 'feather-icons-react';
// import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';
// import { Checkbox, withStyles } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import { blue, grey } from '@material-ui/core/colors';
// import AddIcon from '@material-ui/icons/Add';
// import Edit from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

import './printer-styles.css';


import { AddNewPrintBtn } from '../ui/ui-printers/AddNewPrintBtn';
import { PrinterModalNew } from './PrinterModalNew';
import { printerClearActiveAction, printerSetActiveAction, printersStartLoadingAction } from '../../actions/printersActions';
import { BootstrapCardDataTable } from '../../loaders/BootstrapCardDataTable';
import { PrinterModalEdit } from './PrinterModalEdit';

// const StyledCheckbox = withStyles({
//     root: {
//         color: grey[500],
//         '&$checked': {
//           color: blue[600],
//         },
//       },
//       checked: {},
//   })(Checkbox);  


createTheme('solarized', {
    text: {
        primary: '#268bd2',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
}, 'dark');

const columns = [
    {
        name: 'Serie',
        selector: row => row.serie,
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
        name: 'Ubicación',
        selector: row => row.ubicacion,
        sortable: true,
    }
    
];


export const PrinterScreen = () => {
    

    // const [showSubHeader, setSowSubHeader] = useState(false)

    const [ mostrarCardTable, setMostrarCardTable ] = useState(true);
    
    useEffect( () => {
        // setShow(true);
        setTimeout(() => {
            // setShow(false);
            setMostrarCardTable(false);
        }, 1000);

      }, []);


    // useEffect(() => {
    //     dispatch( printerClearActiveAction() );
    // }, []);
    

    // BARRA LOADING
    const ref = useRef(null);
    const barLoading = () => ref.current.complete();

    useEffect( () => {
        barLoading();
      }, []);

    const dispatch = useDispatch();

    //const [toggledClearRows, setToggleClearRows] = useState(false);

    // Cargamos la data del Store para que se muestren en pantalla
    const { data, activeRowPrinter } = useSelector( state => state.printers );
    
    // const [selectedRow, setSelectedRow] = useState(null);

    
    // Limpiar rows seleccionadas y quitar mensaje superior de rows selected
    // const { rowClearSelected } = useSelector(state => state.row);

    useEffect( () => {
        dispatch( printersStartLoadingAction() );
      }, [dispatch]);
    
    useEffect( () => {

        dispatch( printerClearActiveAction() );
        
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch( printerClearPageOutAction() );
    // }, [dispatch])

        
    const customStyles = {
        // headRow: {
        //     style: {
        //         border: 'none',
        //     },
        // },
        headCells: {
            style: {
                color: 'black',
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
    


    // data provides access to your row data
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;
    // const ExpandedComponent = ({ data }) => (<div className='expanded-component_printer'>
        
    //         <table className="table table-hover">
    //             {/* <thead>
    //                 <tr>
    //                     <th scope="col">Tipo Impresora</th>
    //                     <th scope="col">Cont. Color</th>
    //                     <th scope="col">Cont. B&N</th>
    //                 </tr>
    //             </thead> */}
    //             <tbody>
    //                 <tr>
    //                     <th>Tipo Impresora:</th>
    //                     <td>{data.tipo_impresora}</td>
                        
    //                 </tr>
    //                 <tr>
    //                     <th>Contador Color:</th>
    //                     <td>{data.contador_color}</td>
    //                 </tr>
    //                 <tr>
    //                     <th>Contador B&N:</th>
    //                     <td>{data.contador_bn}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>);

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

    

    const onRowClicked = ( row, event ) => {
        
        // dispatch( printerClearPageOutAction() );
        // dispatch( rowClearSelectedAction() );

    }

    const handleRowSelected = ({selectedRows}) => {
        //console.log(e)
        const [elementsRow] = selectedRows;

        if (elementsRow) {

            dispatch( printerSetActiveAction(elementsRow) );

        }else {

            dispatch( printerClearActiveAction() );
        }

    }

    
        
    const contextActions = useMemo(() => {

        // const handleEditprinter = () => {
            
        //     dispatch( uiOpenModalPrinterEditAction() );

        // };

        return (
            <div>

                {/* <div className="btn btn-link btns-edit" onClick={handleEditprinter}>
                    <i className="fas fa-edit"></i>
                </div> */}

                {/* <IconButton color="inherit" onClick={handleEditprinter}>
                    <Edit fontSize='small' />
                </IconButton>

                <IconButton color="inherit">
                    <DeleteIcon fontSize='small' />
                </IconButton>  */}

                    {/* <FeatherIcon icon="trash-2" className="feather-actions"/> */}
                    {/* <i className="fas fa-trash"></i> */}
            
            </div>
        );
    }, []); // Agregar el dispatch al hacer el handleDelete

    // const actions = (
    //     <IconButton color="inherit">
    //         <AddIcon />
    //     </IconButton>
    // );

    
    return (
        <div>

            {/* <Loader 
                fullPage 
                loading={show}
            /> */}

            <LoadingBar 
                color="#f11946" 
                ref={ref} 
                height={3}
                shadow={true} 
                loaderSpeed={700}
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
                        title="Equipos de Impresión"
                        // clearSelectedRows={ rowClearSelected }
                        actions={activeRowPrinter && contextActions}
                        conditionalRowStyles={conditionalRowStyles}
                        contextActions={contextActions}
                        customStyles={customStyles}
                        expandableRows
                        expandableRowsComponent={ExpandedComponent}
                        highlightOnHover
                        noContextMenu
                        onRowClicked={ onRowClicked }
                        onSelectedRowsChange={handleRowSelected}
                        pagination    
                        responsive={ true }
                        selectableRows
                        fixedHeader={true}
                        fixedHeaderScrollHeight='390px'
                        // selectableRowsComponent={StyledCheckbox}
                        selectableRowsHighlight={true}
                        selectableRowsSingle
                        // subHeader={showSubHeader}
                        // subHeaderAlign={'left'}
                        // subHeaderComponent={ activeRowPrinter && contextActions }
                    />

                </DataTableExtensions>
            }


            <AddNewPrintBtn />

            <PrinterModalNew />

            <PrinterModalEdit />

            {/* 
            { activeRow && <UpdatePrintBtn /> }
            { activeRow && <DeletePrinterBtn /> } */}
             
        </div>
    )
}
