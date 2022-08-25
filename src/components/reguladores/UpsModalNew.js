import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';


import './reguladores-styles.css';
import { reguladorStartAddNewAction, uiCloseModalUpsAction } from '../../actions/reguladoresActions';
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


export const UpsModalNew = () => {

    const dispatch = useDispatch();

    const { modalOpenUps } = useSelector( state => state.ui );

    const { activeEquiposTemp } = useSelector( state => state.equipos );

    const { custOptionRegu } = useSelector( state => state.reguladores );

    const [ formValues, handleInputChange ] = useForm({

        serie: '',
        serieCpu:'',
        marca: 'VICA',
        modelo: 'OPTIMA 750',
        observaciones:''

    });

    const { 
            serie,
            serieCpu,
            marca,
            modelo,
            observaciones 
        } = formValues;

    const closeModal = () => {

        dispatch( uiCloseModalUpsAction() );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log({
            ...formValues,
            serieCpu: activeEquiposTemp.serie_cpu
        });

        dispatch( reguladorStartAddNewAction({
            ...formValues,
            serie: custOptionRegu,
            serieCpu: activeEquiposTemp.serie_cpu
        }));

        // dispatch( printerAddNewAction( {
        //     ...formValues,
        //     id: new Date().getTime()
        // } ) );

        closeModal();
    }

    return (
        <Modal
            isOpen={modalOpenUps}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal-reguladores"
            overlayClassName="modal-fondo"
        > 
        <h4> Nuevo Ups </h4>
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
                                value={custOptionRegu}
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
                                value={activeEquiposTemp ? activeEquiposTemp.serie_cpu : serieCpu}
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
