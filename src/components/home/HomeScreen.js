import React, { useEffect, useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { DashboardLoader } from '../../loaders/DashboardLoader';
// import { Typography }  from '@mui/material';

import './home-styles.css';

export const HomeScreen = () => {

  const [ mostrarCardTable, setMostrarCardTable ] = useState(true);

   // BARRA LOADING
   const ref = useRef(null);
   const barLoading = () => ref.current.complete();

   useEffect( () => {
       barLoading();
     }, []);
    
  useEffect( () => {
      // setShow(true);
      setTimeout(() => {
          // setShow(false);
          setMostrarCardTable(false);
      }, 1000);

    }, []);

  return (
    <>
      
      <LoadingBar 
          color="#f11946" 
          height={3}
          loaderSpeed={700}
          ref={ref} 
          shadow={true} 
          
      />

      {
        mostrarCardTable
        ?
        <DashboardLoader />
        :
        <div className="container">
          <div className="row">
              <div className="col-md-4 col-xl-3">
                  <div className="card bg-c-blue order-card">
                      <div className="card-block">
                          <h6 className="m-b-20">Equipos de Cómputo</h6>
                          <h2 className="text-end"><i className="fa fa-desktop f-left"></i><span>196</span></h2>
                          <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 col-xl-3">
                  <div className="card bg-c-green order-card">
                      <div className="card-block">
                          <h6 className="m-b-20">Impresoras</h6>
                          <h2 className="text-end"><i className="fa fa-print f-left"></i><span>60</span></h2>
                          <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 col-xl-3">
                  <div className="card bg-c-yellow order-card">
                      <div className="card-block">
                          <h6 className="m-b-20">Tickets Soporte</h6>
                          <h2 className="text-end"><i className="fa fa-check f-left"></i><span>486</span></h2>
                          <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-4 col-xl-3">
                  <div className="card bg-c-pink order-card">
                      <div className="card-block">
                          <h6 className="m-b-20">Others</h6>
                          <h2 className="text-end"><i className="fa fa-cog f-left"></i><span>486</span></h2>
                          <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                      </div>
                  </div>
              </div>
        </div>
      </div>
      }

    </>
  );
};
