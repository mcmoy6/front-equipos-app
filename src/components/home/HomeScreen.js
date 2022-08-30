import React, { useEffect, useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { DashboardLoader } from '../../loaders/DashboardLoader';
import { Typography }  from '@mui/material';

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
        <div>
         
            <Typography variant='h3'>Home Screen</Typography>
            
        </div>
      }

    </>
  );
};
