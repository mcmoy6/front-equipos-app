import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { printerAddNewAction } from '../../actions/printers';
import { uiCloseModalTicketAction } from '../../actions/ticketsActions';
import { uiCloseModaPrinterlAction } from '../../actions/uiPrinter';
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

 
export const TicketsModalNew = () => {

    const dispatch = useDispatch();

    const { modalOpenTicket } = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        serie: '',
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
            marca,
            modelo,
            ip,
            ipPc,
            hostImpresora,
            hostPc,
            ubicacion,
            observaciones } = formValues;

    const closeModal = () => {

        dispatch( uiCloseModalTicketAction() );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues);

        dispatch( printerAddNewAction( {
            ...formValues,
            id: new Date().getTime()
        } ) );

        closeModal();
    }

    return (
        <Modal
            isOpen={modalOpenTicket}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        > 
        <h4> NUEVO REGISTRO </h4>
        <hr />

        <form className="container" onSubmit={ handleSubmitForm } id="formModal" >
                <label className="form-label">Datos de la impresora</label>

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
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">IP</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Ej 192.160.206.109" 
                                name="ip"
                                value={ip}
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                </div>

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">Ip PC</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="ipPc"
                            value={ipPc}
                            onChange={ handleInputChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">HOST IMPRESORA</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="hostImpresora"
                            value={hostImpresora}
                            onChange={ handleInputChange }
                        />
                        </div>
                    </div>

                </div>

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">HOST PC</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="hostPc"
                            value={hostPc}
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
