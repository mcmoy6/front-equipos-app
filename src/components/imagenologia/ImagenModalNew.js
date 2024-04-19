import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer  } from 'react-toastify';

import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { imagenClearValidaFormAction, imagenologiasStartAddNewAction, uiCloseModalImgAction } from '../../actions/imagenologiasActions';

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
    cantidad: '',
    observaciones: ''
    
}

export const ImagenModalNew = () => {

const dispatch = useDispatch();

const { openModalImagenologia } = useSelector( state => state.ui );

const { imagenValidaForm } = useSelector( state => state.imagenologias );
const { uid } = useSelector( state => state.auth );


const [ formValues, setFormValues ] = useState(initRow);


const { 
          
    descripcion,
    marca,
    modelo,
    serie,
    clasificacion,
    ubicacion,
    cantidad,
    observaciones

} = formValues;


useEffect(() => {
    if (openModalImagenologia) {
        setFormValues( initRow );
    }
}, [openModalImagenologia]);


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
    dispatch( imagenologiasStartAddNewAction( {
        ...formValues,
        createdBy: uid
    } ) );

}

const closeModal = () => {

    dispatch( uiCloseModalImgAction() );
    setFormValues( initRow );
    dispatch( imagenClearValidaFormAction() );
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

        <ToastContainer
            enableMultiContainer
            containerId={"anId2"}
        />

        <nav>

            <h5> Datos del Equipo Imagenología </h5>
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
            <hr />
        </nav>

        <div className="scroll-container">
            
            <form className="container" onSubmit={ handleSubmitForm } id="formModal" >

                    <div className="row g-3 mb-3">
                        
                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Descripción</div>
                            <input 
                                type="text" 
                                className={`form-control ${ imagenValidaForm === "descripcion" && 'is-invalid' }`}
                                id="specificSizeInputGroupDescripcion" 
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
                                className={`form-control ${ imagenValidaForm === "marca" && 'is-invalid' }`}
                                id="specificSizeInputGroupMarca" 
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
                                className={`form-control ${ imagenValidaForm === "modelo" && 'is-invalid' }`}
                                id="specificSizeInputGroupModelo" 
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
                                    className={`form-control ${ imagenValidaForm === "serie" && 'is-invalid' }`}
                                    id="specificSizeInputGroupSerie" 
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
                            <div className="input-group-text">Ubicación</div>
                            <input 
                                type="text" 
                                className={`form-control ${ imagenValidaForm === "ubicacion" && 'is-invalid' }`}
                                id="specificSizeInputGroupUbicacion" 
                                name="ubicacion"
                                value={ubicacion}
                                onChange={ handleInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Clasificación</div>
                            <input 
                                type="text" 
                                className={`form-control ${ imagenValidaForm === "clasificacion" && 'is-invalid' }`}
                                id="specificSizeInputGroupClasificacion" 
                                name="clasificacion"
                                value={clasificacion}
                                onChange={ handleInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Cant.</div>
                            <input 
                                type="number" 
                                className={`form-control ${ imagenValidaForm === "cantidad" && 'is-invalid' }`}
                                id="specificSizeInputGroupCantidad" 
                                name="cantidad"
                                value={cantidad}
                                onChange={ handleInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        

                    </div>

                <div className="row g-3 mb-3">

                        <div className="input-group">

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

                        </div>

                        <div className="input-group">

                            <button
                                type="submit"
                                className="btn btn-outline-success btn-block"
                            >
                                <i className="far fa-save"></i>
                                <span> Guardar</span>
                            </button>
                            
                        </div>

                </div>

                </form>
        </div>


        </Modal>

  )
}
