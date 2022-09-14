import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { empleadoClearCustOptionAction, empleadoSetActiveAction, empleadoSetActiveEditAction, empleadoStartAddNewAction } from '../../actions/empleadosActions';
import { uiCloseModalEmpleadoAction } from '../../actions/equiposActions';


import './empleado-styles.css';


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
    label: '',
    nombre: '',
    apellido_pat: '',
    apellido_mat: '',
    denom_puesto: '',
    denom_servicio: '',
    extension: '',
    email: ''
}


export const EmpleadoModalNew = () => {

    const inputRefName = useRef();

    const dispatch = useDispatch();

    const { modalOpenEmpleado } = useSelector( state => state.ui);

    const { custOption, activeOpenModEdit } = useSelector( state => state.empleados);

    const [ formValues, setFormValues ] = useState(initRow);

     const {
            label,
            nombre, 
            apellido_pat, 
            apellido_mat, 
            denom_puesto, 
            denom_servicio, 
            extension,
            email
            } = formValues

    const handleRegisterInputChange = ({ target }) => {
        //console.log(singleSelections)
            setFormValues({
                ...formValues,
                [target.name]: target.value,
            });
            
    }

    useEffect( () => {
        if (custOption) {
            setTimeout(() => {
                inputRefName.current.focus();
            }, 300);
        }
      }, [custOption]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(empleadoStartAddNewAction( {
            ...formValues,
            label: custOption
        } ));

        if (activeOpenModEdit) {
            dispatch(empleadoSetActiveEditAction({
                ...formValues,
                label: custOption
            }));
        } else {

            dispatch( empleadoSetActiveAction( {
                ...formValues,
                label: custOption
            } ) );

        }


        dispatch( empleadoClearCustOptionAction() );

        closeModal();
    }

    const closeModal = () => {
        dispatch( uiCloseModalEmpleadoAction() );
        setFormValues( initRow );
        dispatch( empleadoClearCustOptionAction() );


    }


    return (

        <Modal
            isOpen={modalOpenEmpleado}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal-empleado"
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

            <h5> REGISTRAR EMPLEADO </h5>
            <hr />

            <form className="container" onSubmit={handleSubmit} id="formModal" >
                
                <label className="form-label">Datos del Empleado</label>

                <div className="row g-3 mb-3">

                    <div className="col-sm-4">
                        <div className="input-group">
                        <div className="input-group-text"># Empl.</div>
                            <input 
                                type="text" 
                                aria-label="First name" 
                                className="form-control" 
                                disabled
                                name="label"
                                value={custOption ? custOption : label}
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                    </div>
                
                </div>

                <div className="row g-3 mb-3">

                    <div className="col-sm-4">
                        <div className="input-group">
                            <span className="input-group-text">Nombre</span>
                            <input 
                                type="text" 
                                aria-label="First name" 
                                className="form-control" 
                                placeholder="Nombre(s)" 
                                name="nombre"
                                value={nombre}
                                onChange={ handleRegisterInputChange }
                                ref={inputRefName}
                            />
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="input-group">
                            <span className="input-group-text">Paterno</span>
                            <input 
                                type="text" 
                                aria-label="Last name" 
                                className="form-control" 
                                name="apellido_pat"
                                value={apellido_pat}
                                onChange={ handleRegisterInputChange }
                            />
                            </div>
                        </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                            <span className="input-group-text">Materno</span>
                            <input 
                                type="text" 
                                aria-label="Last name" 
                                className="form-control" 
                                name="apellido_mat"
                                value={apellido_mat}
                                onChange={ handleRegisterInputChange }
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
                            id="specificSizeInputGroupUsername" 
                            name="denom_puesto"
                            value={denom_puesto}
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
                            name="denom_servicio"
                            value={denom_servicio}
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
                            value={extension}
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
                        value={email}
                        onChange={ handleRegisterInputChange }
                    />
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