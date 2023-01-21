import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { startCheckingTkAction } from '../../actions/authActions';
import { LoginScreen } from '../auth/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import './loader.css';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking } = useSelector( state => state.auth );

    // Verificamos que el token exista y que sea valido
    useEffect( () => {
        dispatch( startCheckingTkAction() );
    }, [dispatch]);

    if (checking) {
        return (
            <div className="contenedor">

                <div className="loader"></div>
            </div>
        );
    }

  return (
        <BrowserRouter>

            <Routes>

                <Route path="/login" element={ 
                        <PublicRoute> 
                            <LoginScreen /> 
                        </PublicRoute> 
                    } 
                />
                {/* <Route path="/login" element={<LoginScreen />} /> */}


                {/* <DashboardRoutes /> Se convierte en componente hijo (children), y pasan automaticamente como propiedad de <PrivateRoute>*/}
                <Route path="/*" element={ 
                        <PrivateRoute> 
                            <DashboardRoutes /> 
                        </PrivateRoute> 
                    } 
                />

                {/* <Route path="/*" element={<DashboardRoutes />} /> */}

            </Routes>
            
        </BrowserRouter>
    );
};
