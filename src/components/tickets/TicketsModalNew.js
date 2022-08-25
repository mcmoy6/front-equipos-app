import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { ticketsStartAddNewAction, uiCloseModalTicketAction } from '../../actions/ticketsActions';
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
    const { uid } = useSelector( state => state.auth);

    const [ formValues, handleInputChange ] = useForm({
        equipo: '',
        tipo_reporte: '',
        num_reporte: '',
        num_rproveedor: '',
        descripcion: ''
    });

    const { 
        equipo,
        tipo_reporte,
        num_reporte,
        num_rproveedor,
        descripcion 
        } = formValues;

    const closeModal = () => {

        dispatch( uiCloseModalTicketAction() );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues);

        dispatch( ticketsStartAddNewAction({
            ...formValues,
            createBy: uid
        }) );

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
        <h4> Nuevo Ticket </h4>
        <hr />

        <form className="container" onSubmit={ handleSubmitForm } id="formModal" >
                <label className="form-label">Datos de la impresora</label>

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">Serie Equipo</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="equipo"
                            value={equipo}
                            onChange={ handleInputChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">T. Reporte</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="tipo_reporte"
                            value={tipo_reporte}
                            onChange={ handleInputChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">No. Reporte</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="specificSizeInputGroupUsername" 
                            name="num_reporte"
                            value={num_reporte}
                            onChange={ handleInputChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">#Rep. Prov.</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                name="num_rproveedor"
                                value={num_rproveedor}
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                </div>

                <small id="emailHelp" className="form-text text-muted">Descripción del reporte</small>
                <div className="input-group">
                    <span className="input-group-text">Descripión</span>
                    <textarea 
                        className="form-control" 
                        aria-label="With textarea"
                        rows="3"
                        name="descripcion"
                        value={descripcion}
                        onChange={ handleInputChange }
                    ></textarea>
                </div> 

                
{/* 
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
               */}
               
                
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
