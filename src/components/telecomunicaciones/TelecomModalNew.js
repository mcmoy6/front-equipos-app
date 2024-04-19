import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { TelecomStartAddNewAction, telecomClrValidaFormAction, uiCloseModalTelecomAction } from '../../actions/telecomActions';

import './telecomunicacion-styles.css';
import { ToastContainer } from 'react-toastify';


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

    tipoDispositivo: '',
    marca: '',
    modelo: '',
    serie: '',
    macAdress: '',
    capacidadPuertos: '',
    puertosActivos: '',
    puertosLibres: '',
    estatusOperativo: '',
    rack: '',
    ubicacion: '',
    idSitio: '',
    observaciones: ''
    
}

export const TelecomModalNew = () => {

    const dispatch = useDispatch();

    const { modalOpenTelecom } = useSelector( state => state.ui );

    const { telecomValidaForm } = useSelector( state => state.telecom );

    const { uid } = useSelector( state => state.auth );
    
    const [ formValues, setFormValues ] = useState(initRow);
    
    
    const { 
              
        tipoDispositivo,
        marca,
        modelo,
        serie,
        macAdress,
        capacidadPuertos,
        puertosActivos,
        puertosLibres,
        estatusOperativo,
        rack,
        ubicacion,
        idSitio,
        observaciones
    
    } = formValues;

    useEffect(() => {

        if (modalOpenTelecom) {
            setFormValues( initRow );
        }
        
    }, [modalOpenTelecom]);

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
    
    const handleSubmitForm = (e) => {
    
        e.preventDefault();

        dispatch( TelecomStartAddNewAction({
            ...formValues,
            createdBy: uid
        }) );
           
     
    }
    
    const closeModal = () => {
    
        dispatch( uiCloseModalTelecomAction() );

        dispatch( telecomClrValidaFormAction() );
    }

  return (
    
    <Modal
            isOpen={ modalOpenTelecom }
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

            <h4> Datos del Equipo de Telecomunicación </h4>
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
                    <label className="form-label">* Todos los datos son requridos </label>

                    <div className="row g-3 mb-3">
                        
                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Tipo Dispositivo</div>
                            <input 
                                type="text" 
                                className={`form-control ${ telecomValidaForm === "tipoDispositivo" && 'is-invalid' }`} 
                                id="specificSizeInputGroupUsername" 
                                name="tipoDispositivo"
                                value={tipoDispositivo}
                                onChange={ handleInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Marca</div>
                            <input 
                                type="text" 
                                className={`form-control ${ telecomValidaForm === "marca" && 'is-invalid' }`} 
                                id="specificSizeInputGroupUsername" 
                                name="marca"
                                value={marca}
                                onChange={ handleInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Modelo</div>
                            <input 
                                type="text" 
                                className={`form-control ${ telecomValidaForm === "modelo" && 'is-invalid' }`}
                                id="specificSizeInputGroupUsername" 
                                name="modelo"
                                value={modelo}
                                onChange={ handleInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-text">Serie</div>
                                <input 
                                    type="text" 
                                    className={`form-control ${ telecomValidaForm === "serie" && 'is-invalid' }`}
                                    id="specificSizeInputGroupUsername" 
                                    name="serie"
                                    value={serie}
                                    onChange={ handleInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>

                    </div>

                    <div className="row g-3 mb-3">
                        
                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Mac Adress</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                name="macAdress"
                                value={macAdress}
                                onChange={ handleInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Capacidad de puertos</div>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                name="capacidadPuertos"
                                value={capacidadPuertos}
                                onChange={ handleInputChange }
                            />
                            </div>
                        </div>

                    </div>

                    <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">Puertos activos</div>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="specificSizeInputGroupUsername" 
                                    name="puertosActivos"
                                    value={puertosActivos}
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">Puertos libres</div>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="specificSizeInputGroupUsername" 
                                    name="puertosLibres"
                                    value={puertosLibres}
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">Estatus operativo</div>
                                <input 
                                    type="text" 
                                    className={`form-control ${ telecomValidaForm === "estatusOperativo" && 'is-invalid' }`} 
                                    id="specificSizeInputGroupUsername" 
                                    name="estatusOperativo"
                                    value={estatusOperativo}
                                    onChange={ handleInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">MDF / IDF</div>
                                <input 
                                    type="text" 
                                    className={`form-control ${ telecomValidaForm === "rack" && 'is-invalid' }`} 
                                    id="specificSizeInputGroupUsername" 
                                    name="rack"
                                    value={rack}
                                    onChange={ handleInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">Ubicación</div>
                                <input 
                                    type="text" 
                                    className={`form-control ${ telecomValidaForm === "ubicacion" && 'is-invalid' }`} 
                                    id="specificSizeInputGroupUsername" 
                                    name="ubicacion"
                                    value={ubicacion}
                                    onChange={ handleInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">ID Sitio</div>
                                <input 
                                    type="text" 
                                    className={`form-control ${ telecomValidaForm === "idSitio" && 'is-invalid' }`}
                                    id="specificSizeInputGroupUsername" 
                                    name="idSitio"
                                    value={idSitio}
                                    onChange={ handleInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>
                    </div>

                
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    <div className="input-group">
                        <span className="input-group-text">Observaciones</span>
                        <textarea 
                            className="form-control fontFamily" 
                            aria-label="With textarea"
                            rows="3"
                            name="observaciones"
                            value={observaciones}
                            onChange={ handleInputChange }
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
        </div>

    </Modal>
    
  )
}
