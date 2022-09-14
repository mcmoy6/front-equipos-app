import React, { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
// import FeatherIcon from 'feather-icons-react';
// import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';

import 'react-data-table-component-extensions/dist/index.css';
import { useDispatch, useSelector } from 'react-redux';
// import { empeladosStartLoadingAction } from '../../actions/empleadosActions';
import { equipoClearRowSelectedAction, equipoClearSetActiveAction, equipoClearTargetActiveAction, equipoNoClearRowSelectedAction, equipoSetActiveAction, equipoSetTargetActiveAction, equiposStartLoadingAction } from '../../actions/equiposActions';
import { sitioClearTargetActiveAction, sitioSetTargetActiveAction } from '../../actions/sitiosActions';
import { EmpleadoModalNew } from '../empleado/EmpleadoModalNew';
import { DeleteEquipoBtn } from '../ui/ui-equipos/DeleteEquipoBtn';


import { EquiposAddNewBtn } from '../ui/ui-equipos/EquiposAddNewBtn';
import { EquiposEditBtn } from '../ui/ui-equipos/EquiposEditBtn';
import { EquiposModalEdit } from './EquiposModalEdit';
import { EquiposModalNew } from './EquiposModalNew';
import { UpsModalNew } from '../reguladores/UpsModalNew';
import { MonitoresModalNew } from '../monitores/MonitoresModalNew';
import { BootstrapCardDataTable } from '../../loaders/BootstrapCardDataTable';
import { loadingDeactivateAction } from '../../actions/loadingActions';


const columns = [
  
  {
      name: 'S/Cpu',
      selector: row => row.serieCpu,
      sortable: true,
  },
  {
      name: 'S/Monitor',
      selector: row => row.serieMonitor,
      sortable: true,
  },
  {
      name: 'S/ NoBreak',
      selector: row => row.serieNobreak,
      sortable: true,
  },
  {
    name: 'Nombre',
    selector: row => row.nombreUsuario,
    sortable: true,
  },
  {
    name: 'Apellidos',
    selector: row => row.apellidos,
    sortable: true,
  },
  {
    name: 'Área / Ub',
    selector: row => row.area,
    sortable: true,
  },
  {
    name: 'Fuap',
    selector: row => row.fuap,
    sortable: true,
  }
];

export const EquiposScreen = () => {

  // const [show, setShow] = useState(false);

  const [ mostrarCardTable, setMostrarCardTable ] = useState(true);

  const { activeLoading } = useSelector( state => state.loading );

  const dispatch = useDispatch();

  useEffect( () => {
    // setShow(true);
    
    setTimeout(() => {
        // setShow(false);
        setMostrarCardTable(false);
    }, 1000);

  }, []);

  useEffect(() => {
    if (activeLoading) {
        setTimeout(() => {
            dispatch( loadingDeactivateAction() );
        }, 1000);
    }
  }, [dispatch, activeLoading])

  // BARRA LOADING
  const ref = useRef(null);
  const barLoading = () => ref.current.complete();

  

  // Cargamos la data del Store para que se muestren en pantalla
  const { data, activeRowEquipos, rowClearSelected } = useSelector( state => state.equipos );

  useEffect( () => {
    barLoading();
  }, []);

  useEffect( () => {
    dispatch( equiposStartLoadingAction() );
  }, [dispatch]);

  useEffect(() => {
    dispatch( equipoClearSetActiveAction() );
  }, [dispatch]);

  useEffect(() => {
    dispatch( equipoNoClearRowSelectedAction() );
  }, [dispatch, rowClearSelected]);

  // useEffect( () => {
  //   dispatch( empeladosStartLoadingAction() );
  // }, [dispatch]);

  // const conditionalRowStyles = [
  //   {
  //     when: row => row.toggleSelected,
  //     style: {
  //       backgroundColor: 'rgba(63, 195, 128, 0.9)',
  //       userSelect: "none"
  //     }
  //   }
  // ];

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

  
  // data provides access to your row data
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
//   const ExpandedComponent = ({ data }) => (<div className='expanded-component_computer'>
        
//     <table className="table table-hover">
       
//         <tbody>
//             <tr>
//               <th scope="row">Fuap:</th>
//                 <td>{data.fuap}</td>
//             </tr>
//             <tr>
//               <th scope="row">Sitio:</th>
//                 <td>{data.sitio}</td>
//             </tr>
//             <tr>
//               <th scope="row">Cuenta usuario:</th>
//                 <td>{data.cuenta}</td>
//             </tr>
//             <tr>
//               <th scope="row">IP:</th>
//                 <td>{data.ip}</td>
//             </tr>
//             <tr>
//               <th scope="row">Área:</th>
//                 <td>{data.area}</td>
//             </tr>
//             <tr>
//               <th scope="row">Observaciones:</th>
//                 <td>{data.observaciones}</td>
//             </tr>
//         </tbody>
//     </table>
// </div>);
  
  
  const tableData = {
    columns,
    data
  }

  const onRowClicked = () => {
    dispatch( equipoClearSetActiveAction() );
    dispatch( equipoClearTargetActiveAction() );
    dispatch( equipoClearRowSelectedAction() );
  }

  
  const handleRowSelected = ({selectedRows}) => {
    // console.log(selectedRows);
    const [elementos] = selectedRows;

    if (elementos) {

      dispatch(equipoSetActiveAction(elementos));

      dispatch( equipoSetTargetActiveAction({
        id: elementos.id,
        label: elementos.numEmpleado
      }) );

      dispatch( sitioSetTargetActiveAction({
        id: elementos.id,
        id_sitio: elementos.sitio
      }));

    } else {

      dispatch( equipoClearSetActiveAction() );
      dispatch( equipoClearTargetActiveAction() );
      dispatch( sitioClearTargetActiveAction() );

    }

  }

  // const contextActions = useMemo(() => {

  //     const handleDelete = () => {
          
  //         // dispatch( uiOpenModalAction() );
  //         console.log('Hola');

  //     };
  //     return (
  //         <div>

  //             <button className="btn btn-default" onClick={handleDelete}>
  //                 <FeatherIcon icon="tool" />
  //             </button>

             
          
  //         </div>
  //     );
  // }, []);

  return (

    <div>

        <LoadingBar 
            color="#f11946" 
            height={3}
            ref={ref} 
            shadow={true} 
            loaderSpeed={700}
        />

            {/* <Loader 
                fullPage 
                loading={activeLoading}
            /> */}

        {/* <Loader 
            fullPage 
            loading={show}
        /> */}
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
                title="Equipos de Cómputo"
                // onRowClicked={ onRowClicked }
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                // onRowDoubleClicked={ onRowDoubleClicked }
                conditionalRowStyles={conditionalRowStyles}
                // contextActions={contextActions}
                customStyles={customStyles}
                fixedHeader={true}
                selectableRows
                selectableRowsHighlight={true}
                selectableRowsSingle
                onRowClicked={ onRowClicked }
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={ rowClearSelected }
                // selectableRowDisabled={rowDisabledCriteria}
                highlightOnHover
                pagination    
            />

          </DataTableExtensions>
        }



          {activeRowEquipos && <EquiposEditBtn />}
          {activeRowEquipos && <DeleteEquipoBtn />}

          <EquiposAddNewBtn />
          
          <EquiposModalNew />

          <EquiposModalEdit />

          <EmpleadoModalNew />

          <UpsModalNew />

          <MonitoresModalNew />
    </div>

    );
}
