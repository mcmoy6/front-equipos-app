import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { Highlighter, Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer  } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
 
// import 'react-overlay-loader/styles.css';

import { equipoClearSetActiveTempAction, equipoSetActiveTempAction, equiposNoGoBackAction, equiposStartAddNewAction, uiOpenModalEmpleadoAction } from '../../actions/equiposActions';


import './equipos-styles.css';
import { empeladosStartLoadingAction, empleadoClearSetActiveAction, empleadoCustOptionAction, empleadosClearLoadedAction } from '../../actions/empleadosActions';
import { sitiosClearLoadedAction, sitiosStartLoadingAction } from '../../actions/sitiosActions';
import { inventariosClearLoadedAction, inventariosStartLoadingAction } from '../../actions/inventariosActions';
import { reguladorCustOptionAction, uiOpenModalUpsAction } from '../../actions/reguladoresActions';
// import { uiOpenModalMonitorAction } from '../../actions/monitoresActions';
import { loadingActivateAction } from '../../actions/loadingActions';
import { EquiposModalEdit } from './EquiposModalEdit';
import { EmpleadoModalNew } from '../empleado/EmpleadoModalNew';
import { UpsModalNew } from '../reguladores/UpsModalNew';
import { EquiposBackBtn } from '../ui/ui-equipos/EquiposBackBtn';
import { useNavigate } from 'react-router-dom';


// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };

Modal.setAppElement('#root');


  const initRow = {

    fuap: '',
    sitio: '',
    denomSitio: '',
    serieCpu: '',
    serieMonitor: '',
    serieNobreakAnt: '',
    serieNobreak: '',
    serieCandado: '',
    ip: '',
    nombreEquipo: '',
    cuenta: '',
    aplicativoInst: '',
    nombreUsuario: '',
    apellidos: '',
    puesto: '',
    area: '',
    extension: '',
    email: '',
    observaciones: ''
}


export const EquiposRegisterNew = () => {

    const navigate = useNavigate();

    // const refSerieCpu = useRef();

    const refCuenta = useRef();

    const inputNameRef = useRef();
    const inputObservRef = useRef();

    const refAutoComplete = useRef();

    // BARRA LOADING
    const ref = useRef(null);

    const dispatch = useDispatch();

    const { uid } = useSelector( state => state.auth);

    const { data, activeRow } = useSelector( state => state.empleados );

    const { sitiosData } = useSelector( state => state.sitios );

    const { inventariosData } = useSelector( state => state.inventarios );

    const { activeEquiposTemp, equiposGoBack } = useSelector( state => state.equipos );

    // const { modalOpen } = useSelector( state => state.ui);

    const [ formValues, setFormValues ] = useState(initRow);

    // const [ empleadoValues, setEmpleadoValues ] = useState({});

    const { 
                fuap,
                denomSitio,
                serieMonitor,
                serieNobreakAnt,
                serieCandado,
                ip,
                nombreEquipo,
                cuenta,
                aplicativoInst,
                nombreUsuario,
                apellidos,
                puesto,
                area,
                extension,
                email,
                observaciones

            } = formValues;

    const [singleSelections, setSingleSelections] = useState([]);

    const [sitioSingleSeletions, setSitioSingleSelections] = useState([]);

    const [inventarioSingleSelections, setInventarioSingleSelectios] = useState([]);

    const [upsSingleSeletions, setUpsSingleSelections] = useState([]);

    // const [ monitorSingleSelections, setMonitorSingleSelections ] = useState([]);

    const [show, setShow] = useState(false);

    const [validarArea, setValidarArea] = useState(true);

    const [disabledForm, setDisabledForm] = useState(false);


    useEffect( () => {
        if (activeRow) {

    // 👇 React Hook useEffect has a missing dependency: 'formValues'. 
    // Either include it or remove the dependency array.
            
        const focusFormValues = setInterval( () => {

            setDisabledForm(true);
            
            setFormValues({
                ...formValues,
                nombreUsuario: activeRow.nombre,
                apellidos: activeRow.apellido_pat+' '+activeRow.apellido_mat,
                puesto: activeRow.denom_puesto,
                area: activeRow.denom_servicio,
                extension: activeRow.extension,
                email: activeRow.email,

            }, 3000);

         });   

        //  refAutoComplete.current.blur();
        //  inputObservRef.current.focus();

         return () => clearInterval( focusFormValues );

            // setTimeout(() => {

            //     setFormValues({
            //         ...formValues,
            //         nombreUsuario: activeRow.nombre,
            //         apellidos: activeRow.apellido_pat+' '+activeRow.apellido_mat,
            //         puesto: activeRow.denom_puesto,
            //         area: activeRow.denom_servicio,
            //         extension: activeRow.extension,
            //         email: activeRow.email,
    
            //     });

            //     refAutoComplete.current.blur();
            //     inputObservRef.current.focus();
            // }, 500);

        }
      }, [activeRow, formValues]);

      useEffect(() => {
        if ( equiposGoBack ) {
            navigate("/equipos");

            return () => {
                dispatch( equiposNoGoBackAction() );
            }
        }
      }, [equiposGoBack, dispatch, navigate]);
      

      useEffect(() => {

        dispatch( empeladosStartLoadingAction() );
        dispatch(sitiosStartLoadingAction());
        dispatch(inventariosStartLoadingAction());

        // notify();

        return () => {

            setFormValues(initRow);
            setSingleSelections([]);
            // setMonitorSingleSelections([]);
            setUpsSingleSelections([]);
            setSitioSingleSelections([]);
            dispatch( empleadoClearSetActiveAction() );
            dispatch( empleadosClearLoadedAction() );
            dispatch( sitiosClearLoadedAction() );
            dispatch( inventariosClearLoadedAction() );
            dispatch( equipoClearSetActiveTempAction() );
    
            setInventarioSingleSelectios([]);
        //  setValidarCuenta(true);

        }
        
      }, [dispatch]);
      

    //   useEffect( () => {
    //         setTimeout(() => {
    //             refSerieCpu.current.focus();
    //          }, 200);
    //   }, []);

      
      

    //   useEffect( () => {
    //     if (activeEquiposTemp) {
    //         if (!activeEquiposTemp.cuenta_user) {
                
    //             refCuenta.current.focus();
               
    //         } else {
    //             console.log('nada perro');
    //         }
    //     }
    //   }, [activeEquiposTemp]);

    //console.log(singleSelections)   

    const handleRegisterInputChange = ({ target }) => {

            setFormValues({
                ...formValues,
                [target.name]: target.value,
            });
            
    }

    const handleKeyPresChange = ({target}) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value.toUpperCase()
        });
    }

    const handleSitioSelected = (event) => {

        setSitioSingleSelections(event);

        // setShow(true);

        const [idSitio] = event.map(datosSitio =>(datosSitio.id_sitio) );
        const [denominacionSitio] = event.map(datosSitio => (datosSitio.denominacion_sitio) );

        setFormValues({
            ...formValues,
            sitio: !!idSitio ? idSitio : '',
            denomSitio: !!denominacionSitio ? denominacionSitio : ''

        });
    }


    const [validarCuenta, setValidarCuenta] = useState(false);
    // console.log(validarCuenta);

    const barLoading = () => ref.current.complete();

    const handleInventarioSelected = (event) => {
        // console.log(event.length);
        const [elementos] = event;
        // console.log(elementos);
        dispatch( equipoSetActiveTempAction(!!elementos ? elementos : null) );
        setShow(true);
        barLoading();
        setInventarioSingleSelectios(event);
        
        // const sNbk = event.map( datosInventario =>(datosInventario.nobreak));
        // const sMonitor = event.map( datosInventario =>(datosInventario.serie_monitor));
        
        const [snCpu] = event.map( datosInventario =>(datosInventario.serie_cpu));
        const [snMonitor] = event.map( datosInventario =>(datosInventario.serie_monitor));
        const [noBreakAnt] = event.map( datosInventario =>(datosInventario.nobreak));
        // const [snNobreak] = event.map( datosInventario =>(datosInventario.nobreak));
        // const [assignedIp] = event.map( datosInventario =>(datosInventario.ip));
        const [equipoName] = event.map( datosInventario =>(datosInventario.hostname));
        const [fuapActual] = event.map( datosInventario =>(datosInventario.fuap_actual));
        const [ctaUser] = event.map( datosInventario =>(datosInventario.cuenta_user));
        // const [nombre_usu] = event.map( datosInventario =>(datosInventario.nombre_usuario));
        // const [apellido_p] = event.map( datosInventario =>(datosInventario.paterno));
        // const [apellido_m] = event.map( datosInventario =>(datosInventario.materno));
        // const [correo] = event.map( datosInventario =>(datosInventario.correo));
        
        
        
        setTimeout(() => {
            setShow(false);
            //  console.log(!!ctaUser);
            
            // Validamos si el usuario tiene cuenta de usuario o no
            if ( !!ctaUser ) {
                setValidarCuenta(true);
            } else {
                setValidarCuenta(false);
            }
            
            setUpsSingleSelections([]);
            // setUpsSingleSelections(sNbk);
            // setMonitorSingleSelections(sMonitor);
            setFormValues({
                ...formValues,
                serieCpu: !!snCpu ? snCpu : '',
                serieMonitor: !!snMonitor ? snMonitor : '',
                serieNobreakAnt: !!noBreakAnt ? noBreakAnt : '',
                // serieNobreak: !!snNobreak ? snNobreak : '',
                // ip: !!assignedIp ? assignedIp : '',
                nombreEquipo: !!equipoName ? equipoName : '',
                fuap: !!fuapActual ? fuapActual : '',
                cuenta: !!ctaUser ? ctaUser : '',
                // nombreUsuario: !!nombre_usu ? nombre_usu : '',
                // apellidos: !!apellido_p ? apellido_p+' '+apellido_m : '',
                // email: !!correo ? correo : '',
            });

            // Volvemos el formulario al color normal
            // if(event.length === 0) {
            //     return setValidarCuenta(true);
            // }
            
        }, 1000);
        
    }

    useEffect(() => {
        if (activeEquiposTemp) {
            !validarCuenta && refCuenta.current.focus();
        }
       
    }, [validarCuenta, activeEquiposTemp])
    

    const handleSelected = (event) => {
        // console.log(event);
        //  const [elementos] = event;
        
        // setShow(true);
        const [nombUsuario] = event.map(datosEmpl =>(datosEmpl.nombre));
        const [apPaterno] = event.map(datosEmpl =>(datosEmpl.apellido_pat));
        const [apMaterno] = event.map(datosEmpl =>(datosEmpl.apellido_mat));
        const [denPuesto] = event.map(datosEmpl =>(datosEmpl.denom_puesto));
        const [label] = event.map(datosEmpl =>(datosEmpl.label));

        const [custOption] = event.map(datosEmpl =>(datosEmpl.customOption));
        const [custLabel] = event.map(datosEmpl =>(datosEmpl.label));

        
        setSingleSelections(event);

        setFormValues({
            ...formValues,
           
         //TODO: Aqui se dispara la accion para completar los demas campos en base al no. Empleado  
             numEmpleado: !!label ? label : '',
             nombreUsuario: !!nombUsuario ? nombUsuario : '',
             apellidos: !!apPaterno ? apPaterno+' '+apMaterno : '',
             puesto: !!denPuesto ? denPuesto : '',
            
             custOption: custOption,
             
        });
        
       if (custOption) {
            dispatch( uiOpenModalEmpleadoAction() ); 
            dispatch( empleadoCustOptionAction(custLabel) );
        } else {
            dispatch( empleadoClearSetActiveAction() );
        }
              
    }

    const handleUpsSelected = (event) => {
        //  console.log(event);
        setUpsSingleSelections(event);

        const [snUps] = event.map(datosUps =>(datosUps.serie_ups));
        const [custOption] = event.map(datosUps =>(datosUps.customOption));

        setFormValues({
            ...formValues,
            serieNobreak: !!snUps ? snUps : ''
        });


        if ( custOption && activeEquiposTemp ) {
            // console.log('abrir modal para ingresar datos del Ups');
            dispatch( uiOpenModalUpsAction() ); 
            dispatch( reguladorCustOptionAction(snUps) );
        }

    }

    // const handleMonitorSelected = (event) => {

    //     setMonitorSingleSelections(event);

    //     const [snMonitor] = event.map( datosMonitor =>(datosMonitor.serie_monitor) );
    //     const [custOption] = event.map( datosMonitor =>(datosMonitor.customOption) );

    //     setFormValues({
    //         ...formValues,
    //         serieMonitor: !!snMonitor ? snMonitor : ''
    //     });

    //     if ( custOption && activeEquiposTemp ) {
    //         // console.log('Disparar accion para abrir modal');
    //         dispatch( uiOpenModalMonitorAction() );
    //     }

    // }

const handleSubmitForm = (e) => {
        e.preventDefault();

    //  // Validar que el titulo del evento no esté vacío y que al menos tenga 2 caracteres
    //  if( regFuap.trim().length < 2 ){
    //     // En caso de que el titulo tenga menos de 2 caracteres se manda llamar el estado "setValidarTitulo" y se cambia a false.
    //     return setValidarFuap(false);
    // }

    // if( area.trim().length < 2){
    //     // En caso de que el titulo tenga menos de 2 caracteres se manda llamar el estado "setValidarTitulo" y se cambia a false.
               
    //     return toast.error('Ingresa el área del usuario', {
    //             autoClose: false,
    //             position: toast.POSITION.TOP_CENTER,
    //             transition: Zoom,
    //             theme: "colored"
    //         });

    // }

    if (activeRow) {
        setValidarArea(true);
    }

    if ( activeRow ) {
        
        dispatch( equiposStartAddNewAction( {
            ...formValues,
            idUser: uid,
            nombreUsuario: activeRow.nombre,
            apellidos: activeRow.apellido_pat+' '+activeRow.apellido_mat,
            puesto: activeRow.denom_puesto,
            area: activeRow.denom_servicio,
            extension: activeRow.extension,
            email: activeRow.email
        } ) );
    } else {

        dispatch( equiposStartAddNewAction( {
            ...formValues,
            idUser: uid,
        } ) );
        
    }

    dispatch( loadingActivateAction() );

    setValidarArea(true);
    // closeModal();
    
    

}

// const closeModal = () => {

//         dispatch( uiCloseModalEquAction() );
//         // setSingleSelections([]); // Limpiamos el numero de empleado
//         // setInventarioSingleSelectios([]); // Limpiamos Serie cpu
//         // setMonitorSingleSelections([]); // Limpiamos Serie Monitor
//         // setUpsSingleSelections([]); // Limpiamos Serie UPS
//         // setSitioSingleSelections([]); // Limpiamos id Sitio
//         // setFormValues(initRow); // Limpiamos formulario restante
//         dispatch( empleadoClearSetActiveAction() );
//         dispatch( empleadosClearLoadedAction() );
//         dispatch( sitiosClearLoadedAction() );
//         dispatch( inventariosClearLoadedAction() );
//         dispatch( equipoClearSetActiveTempAction() );


        
//     //  setValidarCuenta(true);

// }

  return (

    <div className='register-container'>

            <Loader 
                fullPage 
                loading={show}
            />

            <LoadingBar 
                color="#f11946" 
                ref={ref} 
                shadow={true} 
                loaderSpeed={700}
            />

<ToastContainer
            enableMultiContainer
            containerId={"anId2"}
        /> 

            {/* <button onClick={() => ref.current.complete()}>Complete</button> */}

        <h5> NUEVO REGISTRO </h5>
        <hr />
        <ToastContainer />
        {/* { show && <img className='img-loading' alt='My loading' src="http://rpg.drivethrustuff.com/shared_images/ajax-loader.gif"/> } */}
        <form className="container" onSubmit={ handleSubmitForm } id="formModal" >

            <label className="form-label">Datos del Sitio</label>
                <div className="row g-3 mb-3">
                    <div className="col-sm-4">
                        <div className="input-group">
                            <div className="input-group-text">ID. SITIO</div>
                            <Typeahead
                                id="basic-typeahead-sitio"
                                // className='form-control'
                                // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                                labelKey="id_sitio"
                                // newSelectionPrefix="Agregar nvo: "
                                onChange={handleSitioSelected}
                                options={sitiosData}
                                selected={sitioSingleSeletions}
                                // allowNew
                                minLength={2}
                                disabled={disabledForm}
                                renderMenuItemChildren={(option, props, idx) => (
                                    <div>
                                        <Highlighter search={props.text}>
                                            {option.id_sitio}
                                        </Highlighter> 
                                        <div>
                                            <small>
                                                Sitio: {option.denominacion_sitio}
                                            </small>
                                        </div>
                                    </div>
                                    )}
                                ref={refAutoComplete}
                            />
                            {/* <input 
                                type="text" 
                                autoFocus
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="ID del sitio" 
                                name="sitio"
                                value={sitio}
                                onChange={ handleRegisterInputChange }
                            /> */}
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="input-group">
                            <div className="input-group-text">DENOM. SITIO</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupDenomSitio" 
                                placeholder="Denominación del Sitio" 
                                name="denomSitio"
                                value={denomSitio}
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                    </div>
                </div>

            <hr />

            <label className="form-label">Datos del Empleado</label>

            <div className="row g-3 mb-4">
                    <div className="input-group">
                    {/* <span className="input-group-text">Nombre Empleado:</span> */}
                        <Typeahead
                            id="basic-typeahead-single-nombreEmpleado"
                            // className='form-control'
                            labelKey={(data) => `${data.label} ${data.nombre}`}
                            // labelKey="apellido_pat"
                            onChange={handleSelected}
                            options={data}
                            selected={singleSelections}
                            // allowNew
                            minLength={2}
                            placeholder="Buscar por nombre o num empleado.."
                            renderMenuItemChildren={(option, props, idx) => (
                                <div>
                                    <Highlighter search={props.text}>
                                        {option.label+' - '+option.nombre}
                                    </Highlighter>
                                    <div>
                                        <small>
                                            RFC: {option.rfc}
                                        </small>
                                    </div>
                                    <div>
                                        <small>
                                            Puesto: {option.denom_puesto}
                                        </small>
                                    </div>
                                </div>
                                )}
                            ref={refAutoComplete}
                        />
                    </div>
                </div>                

                <div className="row g-3 mb-4">
                    <div className="input-group">
                    <span className="input-group-text">Num. Empleado:</span>
                        <Typeahead
                            id="basic-typeahead-single-numEmpleado"
                            // className='form-control'
                            // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                            labelKey="label"
                            newSelectionPrefix="Agregar nvo: "
                            onChange={handleSelected}
                            options={data}
                            selected={singleSelections}
                            allowNew
                            minLength={2}
                            renderMenuItemChildren={(option, props, idx) => (
                                <div>
                                    <Highlighter search={props.text}>
                                        {option.label}
                                    </Highlighter>
                                    <div>
                                        <small>
                                            {option.nombre+' '+option.apellido_pat} - Puesto: {option.denom_puesto}
                                        </small>
                                    </div>
                                </div>
                                )}
                            ref={refAutoComplete}
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">

                    <div className="col-sm-6">
                        <div className="input-group">
                            <span className="input-group-text">Nombre</span>
                            <input 
                                type="text" 
                                aria-label="First name" 
                                className="form-control" 
                                placeholder="Nombre(s)" 
                                name="nombreUsuario"
                                value={ nombreUsuario }
                                onChange={ handleRegisterInputChange }
                                ref={inputNameRef}
                                disabled={disabledForm}
                            />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="input-group">
                        <span className="input-group-text">Apellidos</span>
                        <input 
                            type="text" 
                            aria-label="Last name" 
                            className="form-control" 
                            placeholder="Apellidos"
                            name="apellidos"
                            value={ apellidos }
                            onChange={ handleRegisterInputChange }
                            disabled={disabledForm}
                        />
                        </div>
                    </div>
                    
                </div>


                

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Puesto</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupPuesto" 
                            name="puesto"
                            value={ puesto }
                            onChange={ handleRegisterInputChange }
                            disabled={disabledForm}
                        />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Área</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarArea && 'is-invalid' }`} 
                            id="specificSizeInputGroupArea"
                            name="area"
                            value={ area }
                            onChange={ handleRegisterInputChange }
                            onKeyUp={ handleKeyPresChange }
                            disabled={disabledForm}
                        />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Extensión</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupExtension" 
                            name="extension"
                            value={ extension }
                            onChange={ handleRegisterInputChange }
                            disabled={disabledForm}
                        />
                        </div>
                    </div>

                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input 
                        id='specificSizeInputGroupMail'
                        type="email" 
                        className="form-control" 
                        placeholder="email" 
                        name="email"
                        value={ email }
                        onChange={ handleRegisterInputChange }
                        disabled={disabledForm}
                    />
                </div>

                <hr />

                <label className="form-label">Datos del Equipo</label>
                
                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-4">
                        <div className="input-group">
                            <div className="input-group-text">S. CPU</div>
                            <Typeahead
                                id="basic-typeahead-sitios"
                                // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                                labelKey="serie_cpu"
                                // newSelectionPrefix="Agregar nvo: "
                                onChange={handleInventarioSelected}
                                options={inventariosData}
                                selected={inventarioSingleSelections}
                                // allowNew
                                minLength={2}
                                renderMenuItemChildren={(option, props, idx) => (
                                        <div className='inventory-autocompelte'>
                                            <Highlighter search={props.text}>
                                                {option.serie_cpu}
                                            </Highlighter>
                                            <div>
                                                <small>
                                                    Monitor: {option.serie_monitor}
                                                </small>
                                            </div>
                                            <div className='invent-nobreake'>
                                                <small>
                                                    No-Break: {option.nobreak}
                                                </small>
                                            </div>
                                        </div>
                                    )}
                                // ref={refSerieCpu}
                            />
                            
                            {/* <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Serie del CPU" 
                                name="serieCpu"
                                value={serieCpu}
                                onChange={ handleRegisterInputChange }
                            /> */}
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Monitor</div>

                            {/* <Typeahead
                                allowNew
                                id="basic-typeahead-multiple"
                                // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                                labelKey="serie_monitor"
                                // multiple
                                newSelectionPrefix="Nvo monitor: "
                                onChange={ handleMonitorSelected }
                                options={[]}
                                selected={ monitorSingleSelections }
                                minLength={2}
                            /> */}

                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Serie del monitor" 
                                name="serieMonitor"
                                value={serieMonitor}
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Ups</div>

                            <Typeahead
                                allowNew
                                id="basic-typeahead-multiple-ups"
                                // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                                labelKey="serie_ups"
                                multiple
                                newSelectionPrefix="Nvo Ups: "
                                onChange={handleUpsSelected}
                                options={[]}
                                selected={upsSingleSeletions}
                                minLength={2}
                            />

                            {/* <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Serie del UPS" 
                                name="serieNobreak"
                                value={serieNobreak}
                                onChange={ handleRegisterInputChange }
                            /> */}

                        <input 
                            type="hidden" 
                            className="form-control" 
                            id="specificSizeInputGroupSerieNobreak" 
                            name="serieNobreakAnt"
                            value={serieNobreakAnt}
                            onChange={ handleRegisterInputChange }
                        />
                    
                        </div>
                    </div>

                </div>

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">IP</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupIp" 
                            placeholder="Ej 192.160.206.109" 
                            name="ip"
                            value={ip}
                            onChange={ handleRegisterInputChange }
                        />
                    
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Nom. Eq.</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupNomEquipo" 
                            placeholder="Nombre del equipo" 
                            name="nombreEquipo"
                            value={nombreEquipo}
                            onChange={ handleRegisterInputChange }
                            onKeyUp={ handleKeyPresChange }
                        />
                    
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Cuenta</div>
                        <input 
                            type="text" 
                            // className={`form-control ${ !validarCuenta && 'is-invalid'}`} 
                            className="form-control"
                            id="specificSizeInputGroupCuenta" 
                            placeholder="Cuenta de usuario" 
                            name="cuenta"
                            value={cuenta}
                            onChange={ handleRegisterInputChange }
                            ref={ refCuenta }
                        />
                        
                        </div>
                    </div>

                </div>

                <div className="row g-3 mb-3">
                    <div className="col-sm-8">
                        <div className="input-group">
                            <div className="input-group-text">FUAP</div>
                            <input 
                                id='elementFuap'
                                type="text" 
                                className="form-control" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                name="fuap"
                                value={ fuap }
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                        
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="input-group">
                            <div className="input-group-text">Candado</div>
                            <input 
                                id='elementCandado'
                                type="text" 
                                className="form-control" 
                                aria-label="Candado" 
                                aria-describedby="basic-addon1" 
                                name="serieCandado"
                                value={ serieCandado }
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                        
                        </div>
                    </div>
                </div>

                <div className="row g-3 mb-3">

                    <div className="col-sm-8">
                        <div className="input-group">
                            <div className="input-group-text">Aplicativo Inst.</div>
                            <input 
                                id='aplicativoInst'
                                type="text" 
                                className="form-control" 
                                aria-label="Aplicativo" 
                                aria-describedby="basic-addon1" 
                                name="aplicativoInst"
                                value={ aplicativoInst }
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                        
                        </div>
                    </div>

                </div>
                
                <hr />

                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                <div className="input-group">
                    <span className="input-group-text">Observaciones</span>
                    <textarea 
                        className="form-control" 
                        aria-label="With textarea"
                        name="observaciones"
                        value={observaciones}
                        onChange={ handleRegisterInputChange }
                        ref={inputObservRef}
                    ></textarea>
                </div>
                
                <hr />
                

                <button
                    type="submit"
                    className="btn btn-primary btn-block btnSubmit"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

            <EquiposBackBtn />

            <EquiposModalEdit />

            <EmpleadoModalNew />

            <UpsModalNew />

    </div>
    
  );


}
