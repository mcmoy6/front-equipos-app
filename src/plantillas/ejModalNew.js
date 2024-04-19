import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { uiCloseModalImgAction } from '../../actions/imagenologiasActions';

import './imagenologia-styles.css';

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

    descripcion: '',
    marca: '',
    modelo: '',
    serie: '',
    clasificacion: '',
    ubicacion: '',
    observaciones: ''
    
}

export const ImagenModalNew = () => {

const dispatch = useDispatch();

const { openModalImagenologia } = useSelector( state => state.ui );

const [ formValues, setFormValues ] = useState(initRow);


const { 
          
    descripcion,
    marca,
    modelo,
    serie,
    clasificacion,
    ubicacion,
    observaciones

} = formValues;


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
    // dispatch( cuentasStartAddNewAction( {
    //     ...formValues,
    //     estatus: '0',
    //     createdBy: uid
    // } ) );

    console.log('Submit hecho');
 
}

const closeModal = () => {

    dispatch( uiCloseModalImgAction() );
}

  return (
    
    <Modal
            isOpen={ openModalImagenologia }
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        > 
        <nav>

            <h4> Datos del Equipo Imagenología </h4>
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
                            <div className="input-group-text">Descripción</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                name="descripcion"
                                value={descripcion}
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
                                className="form-control" 
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
                                className="form-control" 
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
                                    className="form-control" 
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
                            <div className="input-group-text">Clasificación</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                name="clasificacion"
                                value={clasificacion}
                                onChange={ handleInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Ubicación</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                name="ubicacion"
                                value={ubicacion}
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
                            className="form-control" 
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
