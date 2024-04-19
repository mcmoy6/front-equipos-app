import React, { useEffect, useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { ProductDetails } from '../../loaders/ProductDetails';
import { useScreenSize } from '../../hooks/useScreenSize';
// import { ProfileShow } from '../../loaders/ProfileShow';

// import { Typography }  from '@mui/material';

import './home-styles.css';

export const HomeScreen = () => {

  const [ mostrarCardTable, setMostrarCardTable ] = useState(true);

  const { width, height } = useScreenSize();
  

   // BARRA LOADING
   const ref = useRef(null);
   const barLoading = () => ref.current.complete();

   useEffect( () => {
       barLoading();
     }, []);
    
  useEffect( () => {
      // setShow(true);
    //   console.log(`width: ${width}, height: ${height}`);
      setTimeout(() => {
          // setShow(false);
          setMostrarCardTable(false);
      }, 1000);

    }, [width, height]);

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
        <ProductDetails />
        :
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                <div className="col">
                    <div className="card item radius-10 border-0 border-3 item--1">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    {/* <p className="mb-0 text-secondary">Total Computers</p> */}
                                    <h4 className="my-1 text-white">199</h4>
                                    <p className="mb-0 text--1">Total Computers</p>
                                </div>
                                <div className="widgets-icons-2 text-white ms-auto"><i className="fa fa-desktop text--1" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card item radius-10 border-0 border-3 item--2">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div>
                                {/* <p className="mb-0 text-secondary">Total Printers</p> */}
                                <h4 className="my-1 text-white">60</h4>
                                <p className="mb-0 text--2">Total Printers</p>
                            </div>
                            <div className="widgets-icons-2 text-white ms-auto"><i className="fa fa-print text--2" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card item radius-10 border-0 border-3 item--3">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div>
                                <h4 className="my-1 text-white">125</h4>
                                <p className="mb-0 text--3">Tickets</p>
                                {/* <p className="mb-0 font-13">+8.4% from last week</p> */}
                            </div>
                            <div className="widgets-icons-2 text-white ms-auto"><i className="fa fa-check text--3"></i>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card item radius-10 border-0 border-3 item--4">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div>
                                <h4 className="my-1 text-white">8.4K</h4>
                                <p className="mb-0 text--4">Total Users</p>
                                {/* <p className="mb-0 font-13">-4.5% from last week</p> */}
                            </div>
                            <div className="widgets-icons-2 text-white ms-auto"><i className="fa fa-users text--4"></i>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      }

    </>
  );
};
