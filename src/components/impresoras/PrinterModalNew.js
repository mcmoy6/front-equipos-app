import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { printerStartAddNewAction, uiCloseModalPrinterAction } from '../../actions/printersActions';

// import { useForm } from '../../hooks/useForm';

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
        tipo_impresora: '',
        serie: '',
        marca: '',
        modelo: '',
        ip_host: '',
        contador_bn: '',
        contador_color: '',
        ubicacion: '',
        observaciones:''
  }

 
export const PrinterModalNew = () => {

    const dispatch = useDispatch();

    const { modalOpenPrinter } = useSelector(state => state.ui);

    const { uid } = useSelector( state => state.auth );

    const [ formValues, setFormValues ] = useState( initRow );

    const { 

            tipo_impresora,
            serie,
            marca,
            modelo,
            ip_host,
            contador_bn,
            contador_color,
            ubicacion,
            observaciones 

        } = formValues;


    const closeModal = () => {

        dispatch( uiCloseModalPrinterAction() );
        setFormValues(initRow);
        
    }

    const handleInputChange = ({target}) => {
        // console.log(target.value);
       setFormValues({
           ...formValues,
           [target.name]: target.value /* target.name para hacer referencia al name del input,
           y target.value para hacer referenica al value del input que se le asigna la variable correspondiente del values*/ 
       });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // console.log(formValues);

        dispatch( printerStartAddNewAction( {
            ...formValues,
            createdBy: uid
        }) );

        closeModal();
    }

    return (
        <Modal
            isOpen={modalOpenPrinter}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        > 

       <IconButton
            size='small'
            onClick={ closeModal }
            sx={{
                color: 'black',
                backgroundColor: 'white',
                ':hover': { backgroundColor: 'white', opacity: 0.9 },
                position: 'fixed',
                right: { xs: 20, sm: 15, md:15, lg:15 },
                top: { xs: 3, sm: 5, md:5, lg:5 },
                
            }}
            >
            <CloseOutlined sx={{ fontSize: 25 }} />
        </IconButton>

        <h5> REGISTRAR IMPRESORA </h5>
            <hr />

        <form className="container" onSubmit={ handleSubmitForm } id="formModal" >
                <label className="form-label">Datos de la impresora</label>

                <div className="row g-3 mb-3">

                    <div className="col-sm-6">
                        <div className="input-group mb-1">
                            <label className="input-group-text">Tipo Impresora</label>
                            <select className="form-select" onChange={ handleInputChange } name='tipo_impresora' value={tipo_impresora} id="inputGroupSelect01">
                                <option defaultValue=" ">Seleccione...</option>
                                <option value="monocromatica">Monocromática</option>
                                <option value="color">Color</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">No. SERIE</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="serie"
                            value={serie}
                            onChange={ handleInputChange }
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
                        />
                        </div>
                    </div>
                </div>

                

                <div className="row g-3 mb-3">

                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">IP o Host Pc</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Ej 192.160.206.109 / 2885_02XXXX" 
                                name="ip_host"
                                value={ip_host}
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">UBICACIÓN</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="ubicacion"
                            value={ubicacion}
                            onChange={ handleInputChange }
                        />
                        </div>
                    </div>

                </div>

                <div className="row g-3 mb-3">
                    <div className="input-group">
                        <div className="input-group-text">Cont. B&N</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="contador_bn"
                            value={contador_bn}
                            onChange={ handleInputChange }
                        />
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="contador_color"
                            value={contador_color}
                            onChange={ handleInputChange }
                            disabled={ tipo_impresora === 'monocromatica' && true }
                        />
                        <div className="input-group-text">Cont. Color</div>
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

        </Modal>
    )
}
