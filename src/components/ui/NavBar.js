import React, { useEffect, useRef } from 'react';
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useSelector, useDispatch } from 'react-redux';
// import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';

import '../router/dashboard.css';
import '../router/sidebar.css'

import { EquiposScreen } from '../equipos/EquiposScreen';
import { HomeScreen } from '../home/HomeScreen';
import { PrinterScreen } from '../impresoras/PrinterScreen';
import { startLooutAction } from '../../actions/authActions';
import { ShoppingCartScreen } from '../shoppingCart/ShoppingCartScreen';
// import { TicketScreen } from '../tickets/TicketScreen';
import { TicketListScreen } from '../tickets/TicketListScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { EquiposRegisterNew } from '../equipos/EquiposRegisterNew';
// import { TicketScreen } from '../tickets/TicketScreen';


export const NavBar = () => {

    // const [show, setShow] = useState(false);
    
    // useEffect( () => {
    //     setShow(true);
        
    //     setTimeout(() => {
    //         setShow(false);
    //     }, 700);

    //   }, []);

    // BARRA LOADING
    const ref = useRef(null);
    const barLoading = () => ref.current.complete();

    useEffect( () => {
        barLoading();
      }, []);

   const dispatch = useDispatch();

   const { name } = useSelector( state => state.auth);

    const handleLogout = () => {

        dispatch( startLooutAction() );
        
    }

    // const lastPath = localStorage.getItem('lastpath');

    return (

        <div>
            
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/home">Company name</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <div className="navbar-nav ml-auto">
                        <div className="nav-item text-nowrap px-3">
                        {/* <Link className="nav-link px-3" to="#"></Link> */}
                        <span className='nav-item nav-link text-info'> { name } </span>
                        </div>
                    </div>
                    
                    <div className="navbar-nav ml-auto">
                        <div className="nav-item text-nowrap px-2">
                            <button 
                                className="btn btn-outline-danger mr-0"
                                onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt"></i>
                                <span> Salir</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* <Loader 
                    fullPage 
                    loading={show}
                /> */}

                <LoadingBar 
                    color="#f11946" 
                    ref={ref} 
                    shadow={true} 
                    loaderSpeed={700}
                />
               
            </nav>

            <div className="container-fluid">
                <div className="row">
                    {/* <div className="flex-shrink-0 p-3 bg-white col-md-3 col-lg-2"> */}
                    {/* <div id="sidebarMenu" className="col-md-3 p-2 col-lg-2 d-md-block bg-white sidebar-sticky sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="list-unstyled ps-0">
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                    Equipos cómputo
                                    </button>
                                    <div className="collapse show" id="home-collapse">
                                    <ul className="nav btn-toggle-nav list-unstyled fw-normal pb-1 medium">
                                        <li>
                                            <NavLink to="/equipos" className="nav-item nav-link rounded">
                                                Eq. Cómputo
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/tickets" className="nav-item nav-link rounded">Tickets de soporte</NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded={`${lastPath === '/impresoras' ? true : false}`}>
                                    Equipos impresión
                                    </button>
                                    <div className={`collapse ${lastPath === '/impresoras' && 'show'}`} id="dashboard-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 medium">
                                        <li>
                                            <NavLink to="/impresoras" className="nav-item nav-link rounded">Impresoras</NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                
                            </ul>
                            </div>
                        </div> */}
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink className="nav-link nav-link" to="/home">
                                    <FeatherIcon icon="home" className="feather-sidebar" />
                                    <span> Dashboard</span>
                                    </NavLink>
                                </li>
                                {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>EQUIPOS DE CÓMPUTO</span>
                                    
                                </h6> */}
                                <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/equipos">
                                    <FeatherIcon icon="monitor" className="feather-sidebar" />
                                    <span> Eq. Cómputo</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/tickets">
                                    <FeatherIcon icon="file-plus" className="feather-sidebar"/>
                                    <span> Tickets de soporte </span>
                                    </NavLink>
                                </li>

                                {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>EQUIPOS IMPRESIÓN</span>
                                </h6> */}
                                <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/impresoras">
                                    <FeatherIcon icon="printer" className="feather-sidebar" />
                                    <span> Impresoras </span>
                                    </NavLink>
                                </li>
                                
                                {/* <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/shoppcart">
                                    <FeatherIcon icon="shopping-cart" />
                                    <span> Shopping Cart </span>
                                    </NavLink>
                                </li>
                                 <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="#">
                                    <FeatherIcon icon="users" />
                                    <span> Customers</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">
                                    <FeatherIcon icon="bar-chart-2" />
                                    <span> Reports</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">
                                    <FeatherIcon icon="layers" />
                                    <span> Integrations</span>
                                    </NavLink>
                                </li> */}
                            <li className="border-top my-3"></li>
                            <li className="mb-1"></li>

                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/register">
                                <FeatherIcon icon="user-plus" className="feather-sidebar" />
                                <span> Registrar usuario </span>
                                </NavLink>
                            </li>

                        </ul>

                            {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved reports</span>
                            <Link className="link-secondary" to="/home" aria-label="Add a new report">
                                <FeatherIcon icon="plus-circle" />
                            </Link>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">
                                    <FeatherIcon icon="file-text" />
                                    <span> Current month</span>
                                    </NavLink>
                                </li>
                            
                                <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/calendar">
                                    <FeatherIcon icon="calendar" />
                                    <span> Events</span>
                                    </NavLink>
                                </li>
                            </ul> */}
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar"></span>
                                    This week
                                </button>
                            </div>
                        </div> */}

                        <div className="container mt-2">

                            <Routes>

                                <Route path="home" element={<HomeScreen />} />
                                <Route path="equipos" element={<EquiposScreen />} />
                                <Route path="impresoras" element={<PrinterScreen />} />
                                <Route path="shoppcart" element={<ShoppingCartScreen />} />
                                {/* <Route path='tickets' element={<TicketScreen />} /> */}
                                <Route path='tickets' element={<TicketListScreen />} />
                                <Route path='register' element={<RegisterScreen />} />
                                <Route path='equiposNew' element={<EquiposRegisterNew />} />

                                <Route path="/" element={<HomeScreen />} />
                                
                            </Routes>
                                            
                        </div> 
                    </main>
                </div>
            </div>
        </div>

  );
};

