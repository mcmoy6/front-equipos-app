import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer  } from 'react-toastify';


import { cuentasClrValidaFormAction, cuentasStartAddNewAction, uiCloseModalCuentaAction } from '../../actions/cuentasActions';

import './cuentas-styles.css';

import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
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

    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    noEmpleado: '',
    denomPuesto: '',
    denomArea: '',
    ip: '',
    host: '',
    tipoCuenta:'',
    justificacion:''

}

export const CuentasModalNew = () => {

    const dispatch = useDispatch();

    const inputReference = useRef(null);

    const { modalOpenCuenta } = useSelector( state => state.ui );
    const { uid } = useSelector( state => state.auth );
    const { validaForm } = useSelector( state => state.cuentas );

    const [ formValues, setFormValues ] = useState(initRow);
    

//     const [ formValues, handleInputChange, reset, handleKeyPresChange ] = useForm({
//       nombre: '',
//       primerApellido: '',
//       segundoApellido: '',
//       noEmpleado: '',
//       denomPuesto: '',
//       denomArea: '',
//       ip: '',
//       host: '',
//       tipoCuenta:'',
//       justificacion:''

//   });

  const { 
          
          nombre,
          primerApellido,
          segundoApellido,
          noEmpleado,
          denomPuesto,
          denomArea,
          ip,
          host,
          tipoCuenta,
          justificacion
        
        } = formValues;


    useEffect(() => {
        if (modalOpenCuenta) {

            setFormValues( initRow );
        }
       
    }, [modalOpenCuenta]);

    // // useEffect(() => {
    // //     inputReference.current.focus();
    // // }, [])

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

        dispatch( uiCloseModalCuentaAction() );
        setFormValues( initRow );
        dispatch( cuentasClrValidaFormAction() );
        // reset();
    }


    const handleSubmitForm = (e) => {

        e.preventDefault();
        dispatch( cuentasStartAddNewAction( {
            ...formValues,
            estatus: '0',
            createdBy: uid
        } ) );
     
    }


  return (
    <Modal
        isOpen={modalOpenCuenta}
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

          <h4> Datos de la Cuenta </h4>
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
                {/* <label className="form-label">*Todos los datos son requeridos</label> */}

                <div className="row g-3 mb-3">

                        <div className="col-sm-6">
                            <div className="input-group">
                            <div className="input-group-text">Tipo Cuenta</div>
                            <select className={`form-select ${ validaForm === "tipoCuenta" && 'is-invalid' }`} onChange={ handleInputChange } name='tipoCuenta' value={tipoCuenta} id="inputGroupSelect01">
                                    <option defaultValue=" ">Seleccione...</option>
                                    <option value="Cuenta de Correo">Cuenta de Correo</option>
                                    <option value="Cuenta de Dominio">Cuenta de Dominio</option>
                                    <option value="Ambas">Ambas</option>
                            </select>
                            {/* <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                name="tipoCuenta"
                                value={tipoCuenta}
                                onChange={ handleInputChange }
                            /> */}
                            </div>
                        </div>
                </div>

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">Nombre</div>
                        <input 
                            type="text" 
                            className={`form-control ${ validaForm === "nombre" && 'is-invalid' }`} 
                            id="specificSizeInputGroupUsername" 
                            name="nombre"
                            value={nombre}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                            ref={inputReference}
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">Primer Apellido</div>
                        <input 
                            type="text" 
                            className={`form-control ${ validaForm === "primerApellido" && 'is-invalid' }`} 
                            id="specificSizeInputGroupUsername" 
                            name="primerApellido"
                            value={primerApellido}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">Segundo Apellido</div>
                        <input 
                            type="text" 
                            className={`form-control ${ validaForm === "segundoApellido" && 'is-invalid' }`} 
                            id="specificSizeInputGroupUsername" 
                            name="segundoApellido"
                            value={segundoApellido}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <div className="input-group-text">No. Empleado</div>
                            <input 
                                type="text" 
                                className={`form-control ${ validaForm === "noEmpleado" && 'is-invalid' }`} 
                                id="specificSizeInputGroupUsername" 
                                name="noEmpleado"
                                value={noEmpleado}
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                </div>

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">Puesto</div>
                        <input 
                            type="text" 
                            className={`form-control ${ validaForm === "denomPuesto" && 'is-invalid' }`} 
                            id="specificSizeInputGroupUsername" 
                            name="denomPuesto"
                            value={denomPuesto}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">Área</div>
                        <input 
                            type="text" 
                            className={`form-control ${ validaForm === "denomArea" && 'is-invalid' }`} 
                            id="specificSizeInputGroupUsername" 
                            name="denomArea"
                            value={denomArea}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                        />
                        </div>
                    </div>

                </div>

                <div className="row g-3 mb-3">
                    
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">IP</div>
                        <input 
                            type="text" 
                            className={`form-control ${ validaForm === "ip" && 'is-invalid' }`} 
                            id="specificSizeInputGroupUsername" 
                            name="ip"
                            value={ip}
                            onChange={ handleInputChange }
                        />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                        <div className="input-group-text">Host</div>
                        <input 
                            type="text" 
                            className={`form-control ${ validaForm === "host" && 'is-invalid' }`} 
                            id="specificSizeInputGroupUsername" 
                            name="host"
                            value={host}
                            onChange={ handleInputChange }
                            onKeyUp={ handleKeyPresChange }
                        />
                        </div>
                    </div>

                </div>

                <div className="row g-3 mb-3">
                  {/* <small id="emailHelp" className="form-text text-muted">Información adicional</small> */}
                  <div className="input-group">
                      <span className="input-group-text">Justificación</span>
                      <textarea 
                          className={`form-control fontFamily ${ validaForm === "justificacion" && 'is-invalid' }`}
                          aria-label="With textarea"
                          rows="3"
                          name="justificacion"
                          value={justificacion}
                          onChange={ handleInputChange }
                      ></textarea>
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

    {/* <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">
                Hola
            </a>
            </div>
        </div>
    </nav>
    <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container> */}

    </Modal>
  )
}
