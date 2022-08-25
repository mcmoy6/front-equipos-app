import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'react-overlay-loader';
import LoadingBar from 'react-top-loading-bar';
 
// import 'react-overlay-loader/styles.css';

import { equipoClearSetActiveTempAction, equipoSetActiveTempAction, equiposStartAddNewAction, uiCloseModalEquAction, uiOpenModalEmpleadoAction } from '../../actions/equiposActions';


import './equipos-styles.css';
import { empleadoClearSetActiveAction, empleadoCustOptionAction, empleadosClearLoadedAction } from '../../actions/empleadosActions';
import { sitiosClearLoadedAction } from '../../actions/sitiosActions';
import { inventariosClearLoadedAction } from '../../actions/inventariosActions';
import { reguladorCustOptionAction, uiOpenModalUpsAction } from '../../actions/reguladoresActions';
import { uiOpenModalMonitorAction } from '../../actions/monitoresActions';
import { loadingActivateAction } from '../../actions/loadingActions';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');


  const initRow = {

    fuap: '',
    sitio: '',
    denomSitio: '',
    serieCpu: '',
    serieMonitor: '',
    serieNobreak: '',
    ip: '',
    nombreEquipo: '',
    cuenta: '',
    nombreUsuario: '',
    apellidos: '',
    puesto: '',
    area: '',
    extension: '',
    email: '',
    observaciones: ''
}


export const EquiposModalNew = () => {

    const refSerieCpu = useRef();

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

    const { activeEquiposTemp } = useSelector( state => state.equipos );

    const { modalOpen } = useSelector( state => state.ui);

    const [ formValues, setFormValues ] = useState(initRow);

    // const [ empleadoValues, setEmpleadoValues ] = useState({});

    const { 
                fuap,
                denomSitio,
                // serieMonitor,
                ip,
                nombreEquipo,
                cuenta,
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

    const [ monitorSingleSelections, setMonitorSingleSelections ] = useState([]);

    const [show, setShow] = useState(false);


    useEffect( () => {
        if (activeRow) {
            setTimeout(() => {
                refAutoComplete.current.blur();
                inputObservRef.current.focus();
            }, 500);
        }
      }, [activeRow]);

      useEffect( () => {
        if (modalOpen) {
            setTimeout(() => {
                refSerieCpu.current.focus();
             }, 200);
        }
      }, [modalOpen]);

      
      

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
        //console.log(singleSelections)
            setFormValues({
                ...formValues,
                [target.name]: target.value,
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


    // const [validarCuenta, setValidarCuenta] = useState(true);

    const barLoading = () => ref.current.complete();

    const handleInventarioSelected = (event) => {
        // console.log(event.length);
        const [elementos] = event;
        dispatch( equipoSetActiveTempAction(!!elementos ? elementos : null) );
        setShow(true);
        barLoading();
        setInventarioSingleSelectios(event);
        
        const sNbk = event.map( datosInventario =>(datosInventario.nobreak));
        const sMonitor = event.map( datosInventario =>(datosInventario.serie_monitor));
        
        const [snCpu] = event.map( datosInventario =>(datosInventario.serie_cpu));
        const [snMonitor] = event.map( datosInventario =>(datosInventario.serie_monitor));
        const [snNobreak] = event.map( datosInventario =>(datosInventario.nobreak));
        const [assignedIp] = event.map( datosInventario =>(datosInventario.ip));
        const [equipoName] = event.map( datosInventario =>(datosInventario.hostname));
        const [fuapActual] = event.map( datosInventario =>(datosInventario.fuap_actual));
        const [ctaUser] = event.map( datosInventario =>(datosInventario.cuenta_user));
        
        
        
        setTimeout(() => {
            setShow(false);
            //  console.log(!!ctaUser);
            
            // Validamos si el usuario tiene cuenta de usuario o no
            // if ( !!ctaUser ) {
            //     setValidarCuenta(true);
            // } else {
            //     setValidarCuenta(false);
            // }
            
            setUpsSingleSelections(sNbk);
            setMonitorSingleSelections(sMonitor);
            setFormValues({
                ...formValues,
                serieCpu: !!snCpu ? snCpu : '',
                serieMonitor: !!snMonitor ? snMonitor : '',
                serieNobreak: !!snNobreak ? snNobreak : '',
                ip: !!assignedIp ? assignedIp : '',
                nombreEquipo: !!equipoName ? equipoName : '',
                fuap: !!fuapActual ? fuapActual : '',
                cuenta: !!ctaUser ? ctaUser : ''
            });

            // Volvemos el formulario al color normal
            // if(event.length === 0) {
            //     return setValidarCuenta(true);
            // }
            
        }, 1000);
        
    }

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
         console.log(event);
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

    const handleMonitorSelected = (event) => {

        setMonitorSingleSelections(event);

        const [snMonitor] = event.map( datosMonitor =>(datosMonitor.serie_monitor) );
        const [custOption] = event.map( datosMonitor =>(datosMonitor.customOption) );

        setFormValues({
            ...formValues,
            serieMonitor: !!snMonitor ? snMonitor : ''
        });

        if ( custOption && activeEquiposTemp ) {
            // console.log('Disparar accion para abrir modal');
            dispatch( uiOpenModalMonitorAction() );
        }

    }

const handleSubmitForm = (e) => {
        e.preventDefault();

    //  // Validar que el titulo del evento no esté vacío y que al menos tenga 2 caracteres
    //  if( regFuap.trim().length < 2 ){
    //     // En caso de que el titulo tenga menos de 2 caracteres se manda llamar el estado "setValidarTitulo" y se cambia a false.
    //     return setValidarFuap(false);
    // }

    console.log(formValues);

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

    closeModal();
    
}

const closeModal = () => {

        dispatch( uiCloseModalEquAction() );
        setFormValues(initRow);
        setSingleSelections([]);
        setMonitorSingleSelections([]);
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


    return (

        <Modal
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        > 
        
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

            {/* <button onClick={() => ref.current.complete()}>Complete</button> */}

        <h5> NUEVO REGISTRO </h5>
        <hr />
        {/* { show && <img className='img-loading' alt='My loading' src="http://rpg.drivethrustuff.com/shared_images/ajax-loader.gif"/> } */}
            <form className="container" onSubmit={ handleSubmitForm } id="formModal" >

            <label className="form-label">Datos del Equipo</label>
                
                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-4">
                        <div className="input-group">
                            <div className="input-group-text">CPU</div>
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
                                renderMenuItemChildren={(option) => (
                                        <div className='inventory-autocompelte'>
                                            {option.serie_cpu}
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
                                ref={refSerieCpu}
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

                            <Typeahead
                                allowNew
                                id="basic-typeahead-multiple"
                                // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                                labelKey="serie_monitor"
                                // multiple
                                newSelectionPrefix="Nvo Ups: "
                                onChange={ handleMonitorSelected }
                                options={[]}
                                selected={ monitorSingleSelections }
                                minLength={2}
                            />

                            {/* <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Serie del monitor" 
                                name="serieMonitor"
                                value={serieMonitor}
                                onChange={ handleRegisterInputChange }
                            /> */}
                            
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Ups</div>

                        <Typeahead
                            allowNew
                            id="basic-typeahead-multiple"
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
                            id="specificSizeInputGroupUsername" 
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
                            id="specificSizeInputGroupUsername" 
                            placeholder="Nombre del equipo" 
                            name="nombreEquipo"
                            value={nombreEquipo}
                            onChange={ handleRegisterInputChange }
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
                            id="specificSizeInputGroupUsername" 
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
                                type="text" 
                                className="form-control" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                name="fuap"
                                value={ fuap }
                                onChange={ handleRegisterInputChange }
                            />
                        
                        </div>
                    </div>
                </div>
                
                <hr />
                
                <label className="form-label">Datos del Sitio</label>
                <div className="row g-3 mb-3">
                    <div className="col-sm-4">
                        <div className="input-group">
                            <div className="input-group-text">ID. SITIO</div>
                            <Typeahead
                                id="basic-typeahead-sitios"
                                // className='form-control'
                                // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                                labelKey="id_sitio"
                                // newSelectionPrefix="Agregar nvo: "
                                onChange={handleSitioSelected}
                                options={sitiosData}
                                selected={sitioSingleSeletions}
                                // allowNew
                                minLength={2}
                                renderMenuItemChildren={(option) => (
                                    <div>
                                        {option.id_sitio}
                                        <div>
                                            <small>
                                                Sitio: {option.denominacion_sitio}
                                            </small>
                                        </div>
                                    </div>
                                    )}
                                // ref={refAutoComplete}
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
                                id="specificSizeInputGroupUsername" 
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
                    <span className="input-group-text">Num. Empleado:</span>
                        <Typeahead
                            id="basic-typeahead-single"
                            // className='form-control'
                            // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                            labelKey="label"
                            newSelectionPrefix="Agregar nvo: "
                            onChange={handleSelected}
                            options={data}
                            selected={singleSelections}
                            allowNew
                            minLength={2}
                            renderMenuItemChildren={(option) => (
                                <div>
                                    {option.label}
                                    <div>
                                        <small>
                                            Nom: {option.nombre+' '+option.apellido_pat} - Puesto: {option.denom_puesto}
                                        </small>
                                    </div>
                                </div>
                                )}
                            ref={refAutoComplete}
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">

                    <div className="input-group">
                        <span className="input-group-text">Nombre y apellidos</span>
                        <input 
                            type="text" 
                            aria-label="First name" 
                            className="form-control" 
                            placeholder="Nombre(s)" 
                            name="nombreUsuario"
                            value={activeRow ? activeRow.nombre : nombreUsuario}
                            onChange={ handleRegisterInputChange }
                            ref={inputNameRef}
                        />
                        <input 
                            type="text" 
                            aria-label="Last name" 
                            className="form-control" 
                            placeholder="Apellidos"
                            name="apellidos"
                            value={activeRow ? activeRow.apellido_pat +' '+activeRow.apellido_mat : apellidos}
                            onChange={ handleRegisterInputChange }
                        />
                    </div>
                    
                </div>


                

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Puesto</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="puesto"
                            value={activeRow ? activeRow.denom_puesto : puesto}
                            onChange={ handleRegisterInputChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Área</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername"
                            name="area"
                            value={activeRow ? activeRow.denom_servicio : area}
                            onChange={ handleRegisterInputChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text">Extensión</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="extension"
                            value={activeRow ? activeRow.extension : extension}
                            onChange={ handleRegisterInputChange }
                        />
                        </div>
                    </div>

                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="email" 
                        name="email"
                        value={activeRow ? activeRow.email : email}
                        onChange={ handleRegisterInputChange }
                    />
                </div>

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
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    );

}