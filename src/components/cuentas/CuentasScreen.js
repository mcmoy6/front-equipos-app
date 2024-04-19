import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer  } from 'react-toastify';

import LoadingBar from 'react-top-loading-bar';
import { BootstrapCardDataTable } from '../../loaders/BootstrapCardDataTable';


import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';

import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { cuentasStartLoadingAction } from '../../actions/cuentasActions';
import { CuentasModalNew } from './CuentasModalNew';
import { CuentasAddNewBtn } from '../ui/ui-cuentas/CuentasAddNewBtn';
import { useScreenSize } from '../../hooks/useScreenSize';


const columns = [
{
    name: 'Nombre',
    selector: row => row.nombre,
    sortable: true,
},
{
    name: 'Primer Ap.',
    selector: row => row.primerApellido,
    sortable: true,
},
{
    name: 'Segundo Ap.',
    selector: row => row.segundoApellido,
    sortable: true,
},
{
    name: 'Tipo Cuenta',
    selector: row => row.tipoCuenta,
    sortable: true,
},
{
    name: 'Host',
    selector: row => row.host,
    sortable: true,
},
{
    name: 'Estado',
    selector: row => {
        if ( row.estatus === 1 ) return 'En proceso'
        if ( row.estatus === 2 ) return  'Completado'
        return 'Registrado'
    },
    sortable: true,
    
}

];

const conditionalRowStyles = [
    {
        when: row => row.estatus === 1,
        style: {
            backgroundColor: '#ffc16f',
            color: 'white'
        }
    },
    {
        when: row => row.estatus === 2,
        style: {
        backgroundColor: 'rgba(86, 204, 145, 0.9)',
        color: 'white'
        }
    }
];

export const CuentasScreen = () => {

  const { width } = useScreenSize();

  const [ mostrarCardTable, setMostrarCardTable ] = useState(true);

    const dispatch = useDispatch();

    const { data } = useSelector( state => state.cuentas );

    useEffect( () => {
        dispatch( cuentasStartLoadingAction() );
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

    const ExpandedComponent = ({ data }) => (

        <Card sx={{ maxWidth: 370, my: 1, mx: 1 }}>
          <CardContent>
    
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={4}>
                <Typography variant='subtitle2' align='left' gutterBottom>
                  Nombre:  
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='body2' align='inherit' gutterBottom>
                {data.nombre + ' ' + data.primerApellido + ' ' + data.segundoApellido}
                </Typography>
              </Grid>
            </Grid>
           
                     
            <Divider />
    
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={4}>
                <Typography variant='subtitle2' align='left' gutterBottom>
                  No. Empleado: 
                </Typography>
              </Grid>
              <Grid  item xs={8}>
                <Typography variant='body2' align='left' gutterBottom>
                {data.noEmpleado}
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
                {data.denomPuesto}
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
                {data.denomArea}
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
                {data.host}
                </Typography>
              </Grid>
            </Grid>
           
            <Divider />
    
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={4}>
                <Typography variant='subtitle2' align='left' gutterBottom>
                  Tipo Cuenta: 
                </Typography>
              </Grid>
              <Grid  item xs={8}>
                <Typography variant='body2' align='left' gutterBottom>
                {data.tipoCuenta}
                </Typography>
              </Grid>
            </Grid>
           
            <Divider />
    
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={4}>
                <Typography variant='subtitle2' align='left' gutterBottom>
                  Estatus: 
                </Typography>
              </Grid>
              <Grid  item xs={8}>
                <Typography variant='body2' align='left' gutterBottom>
                    { data.estatus === 1 && 'En proceso' }
                    { data.estatus === 2 && 'Completado' }
                    { data.estatus === 0 && 'Registrado' }
                </Typography>
              </Grid>
            </Grid>
           
           
            <Divider />
    
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={4}>
                <Typography variant='subtitle2' align='left' gutterBottom>
                  Justificación: 
                </Typography>
              </Grid>
              <Grid  item xs={8}>
                <Typography variant='body2' color="text.secondary" gutterBottom>
                {data.justificacion}
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
                      title="Cuentas Institucionales" 
                      columns={columns} 
                      conditionalRowStyles={ conditionalRowStyles }
                      customStyles={customStyles}
                      data={data} 
                      expandableRows
                      expandableRowsComponent={ExpandedComponent}
                      fixedHeader={true}
                      fixedHeaderScrollHeight={`${width <= 767 && '450px'}`}
                      highlightOnHover
                      pagination
                  />
              </DataTableExtensions>

            }

            <CuentasAddNewBtn />
            <CuentasModalNew />

        </div>
    );
    
}
