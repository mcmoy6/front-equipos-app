import React, { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
// import FeatherIcon from 'feather-icons-react';
// import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer  } from 'react-toastify';
import { CSVLink } from "react-csv";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
// import { EquiposModalNew } from './EquiposModalNew';
import { UpsModalNew } from '../reguladores/UpsModalNew';
import { MonitoresModalNew } from '../monitores/MonitoresModalNew';
import { BootstrapCardDataTable } from '../../loaders/BootstrapCardDataTable';
import { loadingDeactivateAction } from '../../actions/loadingActions';
import { useScreenSize } from '../../hooks/useScreenSize';


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
  const { width } = useScreenSize();

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
  // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const ExpandedComponent = ({ data }) => (

    <Card sx={{ maxWidth: 370, my: 1, mx: 1 }}>
      <CardContent>

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Id Sitio: 
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='body2' align='inherit' gutterBottom>
            {data.sitio}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Sitio: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.denomSitio}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Fuap: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.fuap}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              S/ CPU: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.serieCpu}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              S/ Monitor: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.serieMonitor}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              S/ NoBreak: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.serieNobreak}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              S/ Candado: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.serieCandado}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              IP: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.ip}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Host: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.nombreEquipo}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              C. User: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.cuenta}
            </Typography>
          </Grid>
        </Grid>

        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Aplicativo Inst: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.aplicativoInst}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Nombre: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {`${data.apellidos} ${data.nombreUsuario}`}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Puesto: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.puesto}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Área: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.area}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Extensión: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.extension}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Mail: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' align='left' gutterBottom>
            {data.email}
            </Typography>
          </Grid>
        </Grid>
       
        <Divider />

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant='subtitle2' align='left' gutterBottom>
              Obs: 
            </Typography>
          </Grid>
          <Grid  item xs={8}>
            <Typography variant='body2' color="text.secondary" gutterBottom>
            {data.observaciones}
            </Typography>
          </Grid>
        </Grid>
             
      </CardContent>
      
    </Card>

  );
  
  
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

      {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
        <CSVLink className='btn btn-success btnDownloadCsv' data={data}>CSVDownload</CSVLink>
      </div> */}

      

        <LoadingBar 
            color="#f11946" 
            height={3}
            ref={ref} 
            shadow={true} 
            loaderSpeed={700}
        />

        <ToastContainer />

        {

          mostrarCardTable

          ?

          <BootstrapCardDataTable />

          :
          <>

          <div className="btn-group float-right" role="group" aria-label="Basic mixed styles example">
            <CSVLink className='btn btn-success btn-success-group' data={data} filename={"inventario-equipos.csv"}>CSV</CSVLink>
          </div>
          
          <DataTableExtensions
              {...tableData}
              export={false}
              print={false}
          >
            <DataTable
                // actions={ actionsMemo }
                title="Equipos de Cómputo"
                // onRowClicked={ onRowClicked }
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                // onRowDoubleClicked={ onRowDoubleClicked }
                conditionalRowStyles={conditionalRowStyles}
                // contextActions={contextActions}
                customStyles={customStyles}
                fixedHeader={true}
                fixedHeaderScrollHeight={`${width <= 767 && '450px'}`}
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
          </>
        }



          {activeRowEquipos && <EquiposEditBtn />}
          {activeRowEquipos && <DeleteEquipoBtn />}

          <EquiposAddNewBtn />
          
          {/* <EquiposModalNew /> */}

          <EquiposModalEdit />

          <EmpleadoModalNew />

          <UpsModalNew />

          <MonitoresModalNew />
    </div>

    );
}
