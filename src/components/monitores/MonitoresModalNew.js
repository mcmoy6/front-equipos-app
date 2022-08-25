import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import './monitores-styles.css';
import { uiCloseModalMonitorAction } from '../../actions/monitoresActions';
import { useForm } from '../../hooks/useForm';

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


export const MonitoresModalNew = () => {


    const dispatch = useDispatch();

    const { modalOpenMonitor } = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        serie: '',
        serieCpu: '',
        marca: '',
        modelo: '',
        ip: '',
        ipPc: '',
        hostImpresora: '',
        hostPc: '',
        ubicacion: '',
        observaciones:''

    });

    const { serie,
            serieCpu,
            marca,
            modelo,
            ip,
            ipPc,
            hostImpresora,
            hostPc,
            ubicacion,
            observaciones } = formValues;

    const closeModal = () => {

        dispatch( uiCloseModalMonitorAction() );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues);

        // dispatch( printerAddNewAction( {
        //     ...formValues,
        //     id: new Date().getTime()
        // } ) );

        closeModal();
    }

    return (
        <Modal
            isOpen={modalOpenMonitor}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal-monitores"
            overlayClassName="modal-fondo"
        > 
        <h4> Datos del nuevo monitor </h4>
        <hr />

        <form className="container" onSubmit={ handleSubmitForm } id="formModal" >
                    <label className="form-label">Datos del NoBreak </label>

                    <div className="row g-3 mb-3">
                        
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
                                disabled
                            />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">SERIE CPU</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                name="serieCpu"
                                value={serieCpu}
                                onChange={ handleInputChange }
                                disabled
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
