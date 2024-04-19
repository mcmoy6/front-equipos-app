import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { IconButton } from '@mui/material';
import { ToastContainer  } from 'react-toastify';
import { CloseOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

// import { Html5QrcodePlugin } from './Html5QrcodePlugin'
// import { ResultContainerPlugin } from './ResultContainerPlugin';

import { equiposMainBitOnFocusAction, equiposMainBitStartAddNewAction, equiposMainBitStartUpdateAction, uiCloseModalEquiposMainBitAction } from '../../actions/equiposMainBitActions';


import './equiposMainBit-styles.css';

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
    sitio: '01020400',
    denomSitio: 'HG. SANTIAGO RAMÓN Y CAJAL, DURANGO',
    marcaCpu: 'HP Pro SFF 280 G9',
    serieCpu: '',
    serieMonitor: '',
    serieNobreak: '',
    serieCandado: '',
    ip: '',
    nombreEquipo: '',
    cuenta: '',
    aplicativoInst: '',
    numEmpleado: '',
    nombreUsuario: '',
    apellidos: '',
    puesto: '',
    area: '',
    extension: '',
    email: '',
    observaciones: '',
}

export const EquiposMainBitModalNew = () => {

    const dispatch = useDispatch();

    const { modalOpenEquiposMainBit } = useSelector( state => state.ui );

    // const [onFocus, setOnFocus] = useState('');

    const { activeRowEquiposMainBit } = useSelector( state => state.equiposMainBit );

    const { uid } = useSelector( state => state.auth );

    const [mostrarSpinnerButton, setMostrarSpinnerButton] = useState(false);

    const [ formValues, setFormValues ] = useState(initRow);

    const {
        fuap,
        sitio,
        denomSitio,
        marcaCpu,
        serieCpu,
        serieMonitor,
        serieNobreak,
        serieCandado,
        ip,
        nombreEquipo,
        cuenta,
        aplicativoInst,
        numEmpleado,
        nombreUsuario,
        apellidos,
        puesto,
        area,
        extension, 
        email, 
        observaciones

    } = formValues

    // const [decodedResults, setDecodedResults] = useState([]);

    // const [decoded, setDecoded] = useState(null);

    // const onNewScanResult = (decodedText, decodedResult) => {
        
    //     console.log("App [result]", decodedResult.decodedText);
    //     setDecodedResults(prev => [...prev, decodedResult]);
        
    // };

    
    useEffect(() => {

        if ( activeRowEquiposMainBit ) {
            setFormValues(activeRowEquiposMainBit);

            setValidarArea(true);
            setValidarCpu(true);
            setValidarMonitor(true);
            setValidarUps(true);
            setValidarIp(true);
            setValidarCuenta(true);
            setValidarCandado(true);
            setValidarAplicativos(true);

        } else {
            
            setFormValues(initRow);

        }
    }, [activeRowEquiposMainBit, setFormValues, modalOpenEquiposMainBit])

    const handleInputChange = ({ target }) => {

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

    const closeModal = () => {
        
        dispatch( uiCloseModalEquiposMainBitAction() );
            setFormValues(initRow);
     
    }

    const [validarArea, setValidarArea] = useState(true);
    const [validarCpu, setValidarCpu] = useState(true);
    const [validarMonitor, setValidarMonitor] = useState(true);
    const [validarUps, setValidarUps] = useState(true);
    const [validarIp, setValidarIp] = useState(true);
    const [validarCuenta, setValidarCuenta] = useState(true);
    const [validarCandado, setValidarCandado] = useState(true);
    const [validarAplicativos, setValidarAplicativos] = useState(true);

    // useEffect(() => {
    //     if (modalOpenEquiposMainBit) {

    //         setFormValues( initRow );

    //         setValidarArea(true);
    //         setValidarCpu(true);
    //         setValidarMonitor(true);
    //         setValidarUps(true);
    //         setValidarIp(true);
    //         setValidarCuenta(true);
    //         setValidarCandado(true);
    //         setValidarAplicativos(true);

    //     }
       
    // }, [modalOpenEquiposMainBit]);


    const scrollToRefArea = useRef();
    const scrollToRefCpu = useRef();
    const scrollToRefMonitor = useRef();
    const scrollToRefUps = useRef();
    const scrollToRefIp = useRef();
    const scrollToRefCuenta = useRef();
    const scrollToRefCandado = useRef();
    const scrollToRefAplicativos = useRef();
    

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (area.trim().length < 2 ) {
            setValidarArea(false);
            scrollToRefArea.current.focus();
             return scrollToRefArea.current.scrollIntoView({
                // top: 900,
                behavior: "smooth",
                block: "center", 
            });

        } else {
            setValidarArea(true);
        }

        if (serieCpu.trim().length < 2 ) {
            setValidarCpu(false);
            scrollToRefCpu.current.focus();
             return scrollToRefCpu.current.scrollIntoView({
                top: 600,
                behavior: "smooth",
                block: "center",
            });

        } else {
            setValidarCpu(true);
        }

        if (serieMonitor.trim().length < 2 ) {
            setValidarMonitor(false);
            scrollToRefMonitor.current.focus();
             return scrollToRefMonitor.current.scrollIntoView({
                top: 600,
                behavior: "smooth",
                block: "center",
            });

        } else {
            setValidarMonitor(true);
        }

        if (serieNobreak.trim().length < 2 ) {
            setValidarUps(false);
            scrollToRefUps.current.focus();
             return scrollToRefUps.current.scrollIntoView({
                top: 600,
                behavior: "smooth",
                block: "center",
            });

        } else {
            setValidarUps(true);
        }

        if (serieCandado.trim().length < 2 ) {
            setValidarCandado(false);
            scrollToRefCandado.current.focus();
             return scrollToRefCandado.current.scrollIntoView({
                top: 600,
                behavior: "smooth",
                block: "center",
            });

        } else {
            setValidarCandado(true);
        }

        if (ip.trim().length < 2 ) {
            setValidarIp(false);
            scrollToRefIp.current.focus();
             return scrollToRefIp.current.scrollIntoView({
                top: 600,
                behavior: "smooth",
                block: "center",
            });

        } else {
            setValidarIp(true);
        }

        if (cuenta.trim().length < 2 ) {
            setValidarCuenta(false);
            scrollToRefCuenta.current.focus();
             return scrollToRefCuenta.current.scrollIntoView({
                top: 600,
                behavior: "smooth",
                block: "center",
            });

        } else {
            setValidarCuenta(true);
        } 

        if (aplicativoInst.trim().length < 2 ) {
            setValidarAplicativos(false);
            scrollToRefAplicativos.current.focus();
             return scrollToRefAplicativos.current.scrollIntoView({
                top: 600,
                behavior: "smooth",
                block: "center",
            });

        } else {
            setValidarAplicativos(true);
        }

        

        if ( activeRowEquiposMainBit ) {
            
            setMostrarSpinnerButton(true);

            setTimeout(() => {
                
                dispatch( equiposMainBitStartUpdateAction({
                    ...formValues,
                    estado: 1,
                    idUser: uid
                }) );

                setMostrarSpinnerButton(false);

            }, 1500);
            

            
        } else {

            
                // setShow(true);
                setMostrarSpinnerButton(true);
                
                setTimeout(() => {
                    // setShow(false);
                    dispatch( equiposMainBitStartAddNewAction({
                        ...formValues,
                        estado: 1,
                        idUser: uid
                    }) );

                    setMostrarSpinnerButton(false);

                }, 1500);

            // if ( activeRowEquiposMainBit ) {
            //     setFormValues(activeRowEquiposMainBit);
            // } else {
                
            //     setFormValues(initRow);
    
            //     setValidarArea(true);
            //     setValidarCpu(true);
            //     setValidarMonitor(true);
            //     setValidarUps(true);
            //     setValidarIp(true);
            //     setValidarCuenta(true);
            //     setValidarCandado(true);
            //     setValidarAplicativos(true);
    
            // }
            
        }

        // setFormValues(initRow);
        // closeModal();

    }

    const handleFocus = ({target}) => {
        console.log(target.name);
        // setOnFocus(target.name);

        dispatch( equiposMainBitOnFocusAction( target.name ) )
    }

    return (

      <Modal
          isOpen={ modalOpenEquiposMainBit }
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
      > 

        <ToastContainer
            enableMultiContainer
            containerId={"anId2"}
        />

            

      <nav>
  
          <h4> { activeRowEquiposMainBit ? 'Actualizar Equipo' : 'Registrar Equipo' } </h4>
          <IconButton
          size='small'
          onClick={ closeModal }
          sx={{
              color: 'grey',
              backgroundColor: 'white',
              ':hover': { backgroundColor: 'white', opacity: 0.9 },
              position: 'fixed',
              right: { xs: 20, sm: 15, md:15, lg:15 },
              top: { xs: 3, sm: 5, md:5, lg:5 },
              
              }}
          >
  
          <CloseOutlined sx={{ fontSize: 25 }} />
              
          </IconButton>
  
      </nav>

      

      <div className="scroll-container">
        <form className="container" onSubmit={ handleSubmitForm } id="formModal" >
        <label className="form-label">Datos del Sitio</label>

            <div className="row g-3 mb-3">
                
                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">Id Sitio</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="sitio" 
                            name="sitio"
                            value={sitio}
                            onChange={ handleInputChange }
                            // onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
                        />
                    </div>
                </div>

                <div className="col-sm-8">
                    <div className="input-group">
                        <div className="input-group-text">Denom Sitio</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="denomSitio" 
                            name="denomSitio"
                            value={denomSitio}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
                        />
                    </div>
                </div>

            </div>

            <hr />

            <label className="form-label">Datos del Empleado</label>

            <div className="row g-3 mb-3">
                
                <div className="col-sm-6">
                    <div className="input-group">
                        <div className="input-group-text">No. Empleado</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="numEmpleado" 
                            name="numEmpleado"
                            value={numEmpleado}
                            onChange={ handleInputChange }
                            // onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
                        />
                    </div>
                </div>
                
            </div>

            <div className="row g-3 mb-3">
                
                <div className="col-sm-6">
                    <div className="input-group">
                        <div className="input-group-text">Nombre</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombreUsuario" 
                            name="nombreUsuario"
                            value={nombreUsuario}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
                        />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="input-group">
                        <div className="input-group-text">Apellidos</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="apellidos" 
                            name="apellidos"
                            value={apellidos}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
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
                            id="puesto" 
                            name="puesto"
                            value={puesto}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
                        />
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">Área</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarArea && 'is-invalid' }`} 
                            id="area" 
                            name="area"
                            value={area}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            ref={scrollToRefArea}
                        />
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">Ext.</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="extension" 
                            name="extension"
                            value={extension}
                            onChange={ handleInputChange }
                            // onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
                        />
                    </div>
                </div>
                
            </div>
            
            <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input 
                        id='email'
                        type="email" 
                        className="form-control" 
                        placeholder="email" 
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                        // disabled={disabledForm}
                    />
            </div>

            <hr />

            <label className="form-label">Datos del Equipo</label>

            <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Marca y modelo</span>
                    <input 
                        id='marcaCpu'
                        type="marcaCpu" 
                        className="form-control" 
                        placeholder="" 
                        name="marcaCpu"
                        value={ marcaCpu }
                        onChange={ handleInputChange }
                        onKeyUp={handleKeyPresChange}
                        // disabled={disabledForm}
                    />
            </div>

            <div className="row g-3 mb-3">
                
                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">CPU</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarCpu && 'is-invalid' }`} 
                            id="serieCpu" 
                            name="serieCpu"
                            value={serieCpu}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            ref={scrollToRefCpu}
                            onFocus={handleFocus}
                        />
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">Monitor</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarMonitor && 'is-invalid' }`} 
                            id="serieMonitor" 
                            name="serieMonitor"
                            value={serieMonitor}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            ref={scrollToRefMonitor}
                            onFocus={handleFocus}
                        />
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">UPS</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarUps && 'is-invalid' }`}
                            id="serieNobreak" 
                            name="serieNobreak"
                            value={ serieNobreak }
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            ref={scrollToRefUps}
                            onFocus={handleFocus}
                        />
                    </div>
                </div>
                
            </div>

            <div className="row g-3 mb-3">

                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">CANDADO</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarCandado && 'is-invalid' }`} 
                            id="serieCandado" 
                            name="serieCandado"
                            value={serieCandado}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            ref={scrollToRefCandado}
                        />
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">IP</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarIp && 'is-invalid' }`}
                            id="ip" 
                            name="ip"
                            value={ip}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            ref={scrollToRefIp}
                        />
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">HOST</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombreEquipo" 
                            name="nombreEquipo"
                            value={ nombreEquipo }
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
                        />
                    </div>
                </div>

                
                
            </div>

            <div className="row g-3 mb-3">

                <div className="col-sm-4">
                    <div className="input-group">
                        <div className="input-group-text">CUENTA</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarCuenta && 'is-invalid' }`} 
                            id="cuenta" 
                            name="cuenta"
                            value={ cuenta }
                            onChange={ handleInputChange }
                            // onKeyUp={ handleKeyPresChange }
                            ref={scrollToRefCuenta}
                        />
                    </div>
                </div>
                
                <div className="col-sm-8">
                    <div className="input-group">
                        <div className="input-group-text">FUAP</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="fuap" 
                            name="fuap"
                            value={fuap}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            // ref={inputReference}
                        />
                    </div>
                </div>
                              
            </div>

            <div className="row g-3 mb-3">
                
                <div className="col-sm-12">
                    <div className="input-group">
                        <div className="input-group-text">APLICATIVOS INST.</div>
                        <input 
                            type="text" 
                            className={`form-control ${ !validarAplicativos && 'is-invalid' }`}
                            id="aplicativoInst" 
                            name="aplicativoInst"
                            value={aplicativoInst}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            ref={scrollToRefAplicativos}
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
                        onChange={ handleInputChange }
                        // ref={inputObservRef}
                    ></textarea>
                </div>
                
                <hr />
                

                <button
                    type="submit"
                    className="btn btn-primary btn-block btnSubmit mb-4"
                    disabled={mostrarSpinnerButton}
                >

                    {
                        mostrarSpinnerButton && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="false"></span>
                    }
                    
                    {/* <i className="far fa-save"></i> */}
                    <span> {mostrarSpinnerButton ? 'Guardando...' : 'Guardar' } </span>
                </button>

        </form>
        {/* <section className="App-section mb-5"> */}
                {/* <div className="App-section-title"> Html5-qrcode React demo</div> */}
               
                {/* <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={true}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <ResultContainerPlugin results={decodedResults} />
                 */}
            {/* </section> */}
      </div>
      </Modal>
    )
}

