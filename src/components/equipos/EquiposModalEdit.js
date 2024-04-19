import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

import { equipoClearSetActiveAction, equiposStartUpdateAction, uiCloseModalEditEquAction, uiOpenModalEmpleadoAction } from '../../actions/equiposActions';


import './equipos-styles.css';
import { empleadoClearActiveEditAction, empleadoClearOpenModalEditAction, empleadoClearSetActiveAction, empleadoCustOptionAction, empleadoOpenModalEditAction, empleadosClearLoadedAction } from '../../actions/empleadosActions';
import { sitiosClearLoadedAction } from '../../actions/sitiosActions';
// import { empleadoStartAddNewAction } from '../../actions/empleadosActions';


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

    fuap: '',
    sitio: '',
    denomSitio: '',
    serieCpu: '',
    serieMonitor: '',
    serieNobreak: '',
    serieCandado: '',
    ip: '',
    nombreEquipo: '',
    cuenta: '',
    aplicativoInst: '',
    nombreUsuario: '',
    apellidos: '',
    puesto: '',
    area: '',
    extension: '',
    email: '',
    observaciones: ''
}


export const EquiposModalEdit = () => {

    const inputNameRefEdit = useRef();
    const inputObservRefEdit = useRef();

    const refAutoCompleteEdit = useRef();
    
    const dispatch = useDispatch();
    
    const { uid } = useSelector( state => state.auth);

    const { activeRowEquipos, targetTypead } = useSelector( state => state.equipos );
    
    const { data, activeRowEdit, activeOpenModEdit } = useSelector( state => state.empleados );

    const { sitiosData, sitioTargetTypead } = useSelector( state => state.sitios);
    
    const { modalOpenEditEquipos } = useSelector( state => state.ui);

    const [ formValues, setFormValues ] = useState(initRow);

    // const [ empleadoValues, setEmpleadoValues ] = useState({});

    const { 
                fuap,
                denomSitio,
                serieCpu,
                serieMonitor,
                serieNobreak,
                serieCandado,
                ip,
                nombreEquipo,
                cuenta,
                aplicativoInst,
                nombreUsuario,
                apellidos,
                puesto,
                area,
                extension,
                email,
                observaciones

            } = formValues;

            
    const [singleSelections, setSingleSelections] = useState([]);

    const [sitioSingleSeletions, setSitioSingleSelections] = useState([]);

    useEffect(() => {
        if (activeRowEquipos) {

            setFormValues(activeRowEquipos);
            setSingleSelections(targetTypead);
            setSitioSingleSelections(sitioTargetTypead);

        }
    }, [activeRowEquipos, targetTypead, sitioTargetTypead]);

    useEffect( () => {
        if (activeOpenModEdit) {
            setTimeout(() => {
                refAutoCompleteEdit.current.blur();
                inputObservRefEdit.current.focus();
            }, 500);
        }
      }, [activeRowEdit, activeOpenModEdit]);

    //console.log(singleSelections)   

    const handleRegisterInputChange = ({ target }) => {
        //console.log(singleSelections)
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

    const handleSitioSelected = (event) => {
        setSitioSingleSelections(event);

        const [idSitio] = event.map(datosSitio =>(datosSitio.id_sitio) );
        const [denominacionSitio] = event.map(datosSitio => (datosSitio.denominacion_sitio) );

        setFormValues({
            ...formValues,
            sitio: !!idSitio ? idSitio : '',
            denomSitio: !!denominacionSitio ? denominacionSitio : ''

        });
    }

    const handleSelected = (event) => {
        console.log(event);
        //  const [elementos] = event;
      
        const [nombUsuario] = event.map(datosEmpl =>(datosEmpl.nombre));
        const [apPaterno] = event.map(datosEmpl =>(datosEmpl.apellido_pat));
        const [apMaterno] = event.map(datosEmpl =>(datosEmpl.apellido_mat));
        const [denPuesto] = event.map(datosEmpl =>(datosEmpl.denom_puesto));
        const [label] = event.map(datosEmpl =>(datosEmpl.label));

        const [custOption] = event.map(datosEmpl =>(datosEmpl.customOption));
        const [custLabel] = event.map(datosEmpl =>(datosEmpl.label));

        
        setSingleSelections(event);

        setFormValues({
            ...formValues,
           
         //TODO: Aqui se dispara la accion para completar los demas campos en base al no. Empleado  
             numEmpleado: !!label ? label : activeRowEquipos.numEmpleado,
             nombreUsuario: !!nombUsuario ? nombUsuario : activeRowEquipos.nombreUsuario,
             apellidos: !!apPaterno ? apPaterno+' '+apMaterno : activeRowEquipos.apellidos,
             puesto: !!denPuesto ? denPuesto : activeRowEquipos.puesto,
            
             custOption: custOption,
             
        });

        
       if (custOption) {
            dispatch( uiOpenModalEmpleadoAction() ); 
            dispatch( empleadoCustOptionAction(custLabel) );
            dispatch( empleadoOpenModalEditAction() );
        } else {
            dispatch( empleadoClearSetActiveAction() );
        }


               
    }

    const handleSubmitForm = (e) => {
         e.preventDefault();

        //  // Validar que el titulo del evento no esté vacío y que al menos tenga 2 caracteres
        //  if( regFuap.trim().length < 2 ){
        //     // En caso de que el titulo tenga menos de 2 caracteres se manda llamar el estado "setValidarTitulo" y se cambia a false.
        //     return setValidarFuap(false);
        // }

        // console.log(formValues);

        if ( activeRowEdit ) {
            dispatch( equiposStartUpdateAction( {
                ...formValues,
                idUser: uid,
                nombreUsuario: activeRowEdit.nombre,
                apellidos: activeRowEdit.apellido_pat+' '+activeRowEdit.apellido_mat,
                puesto: activeRowEdit.denom_puesto,
                area: activeRowEdit.denom_servicio,
                extension: activeRowEdit.extension,
                email: activeRowEdit.email
            } ) );
        } else {

            dispatch( equiposStartUpdateAction( {
                ...formValues,
                idUser: uid,
            } ) );
            
        }


        closeModal();
        
    }

    const closeModal = () => {

         dispatch( uiCloseModalEditEquAction() );
        //  setFormValues(initRow);
        //  setSingleSelections([]);
         dispatch( empleadoClearSetActiveAction() );
         dispatch( empleadosClearLoadedAction() );
         dispatch( empleadoClearOpenModalEditAction() );
         dispatch( empleadoClearActiveEditAction() );
         dispatch( sitiosClearLoadedAction() );

         dispatch( equipoClearSetActiveAction() );
        //  dispatch( equipoClearTargetActiveAction() );

    }

    return (

        <Modal
            isOpen={modalOpenEditEquipos}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        > 

        

        <nav>
            <h5>ACTUALIZAR EQUIPO</h5>

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
        </nav>

        <div className="scroll-container">
            <form className="container" onSubmit={ handleSubmitForm } id="formModal" >
            <label className="form-label">Datos del Sitio</label>
                <div className="row g-3 mb-3">
                    <div className="col-sm-4">
                        <div className="input-group">
                            <div className="input-group-text">ID. SITIO</div>
                            <Typeahead
                                id="basic-typeahead-sitios"
                                // labelKey={(data) => `${data.label} ${data.nombre} ${data.apellido_pat}`}
                                labelKey="id_sitio"
                                // newSelectionPrefix="Agregar nvo: "
                                onChange={handleSitioSelected}
                                options={sitiosData}
                                selected={sitioSingleSeletions}
                                // allowNew
                                minLength={2}
                                renderMenuItemChildren={(option) => (
                                    <div>
                                        {option.id_sitio}
                                        <div>
                                            <small>
                                                Sitio: {option.denominacion_sitio}
                                            </small>
                                        </div>
                                    </div>
                                    )}
                                // ref={refAutoComplete}
                            />
                            {/* <input 
                                type="text" 
                                autoFocus
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="ID del sitio" 
                                name="sitio"
                                value={sitio}
                                onChange={ handleRegisterInputChange }
                            /> */}
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="input-group">
                            <div className="input-group-text">DENOM. SITIO</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Denominación del Sitio" 
                                name="denomSitio"
                                value={denomSitio}
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                    </div>
                </div>

                <hr />
                
                <label className="form-label">Datos del Equipo</label>

                    <div className="row g-3 mb-3">
                        <div className="col-sm-8">
                            <div className="input-group">
                                <div className="input-group-text">FUAP</div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    aria-label="Username" 
                                    aria-describedby="basic-addon1" 
                                    name="fuap"
                                    value={ fuap }
                                    onChange={ handleRegisterInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-text">Candado</div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    aria-label="Username" 
                                    aria-describedby="basic-addon1" 
                                    name="serieCandado"
                                    value={ serieCandado }
                                    onChange={ handleRegisterInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>
                    </div>
                    

                    <div className="row g-3 mb-3">
                        
                        <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-text">CPU</div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="specificSizeInputGroupUsername" 
                                    placeholder="Serie del CPU" 
                                    name="serieCpu"
                                    value={serieCpu}
                                    onChange={ handleRegisterInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="input-group">
                            <div className="input-group-text">Monitor</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Serie del monitor" 
                                name="serieMonitor"
                                value={serieMonitor}
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                            <div className="input-group-text">Ups</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Serie del UPS" 
                                name="serieNobreak"
                                value={serieNobreak}
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>

                    </div>

                    <div className="row g-3 mb-3">
                        
                        <div className="col-sm-4">
                            <div className="input-group">
                            <div className="input-group-text">IP</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Ej 192.160.206.109" 
                                name="ip"
                                value={ip}
                                onChange={ handleRegisterInputChange }
                            />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                            <div className="input-group-text">Nom. Eq.</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Nombre del equipo" 
                                name="nombreEquipo"
                                value={nombreEquipo}
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
                            />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                            <div className="input-group-text">Cuenta</div>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="specificSizeInputGroupUsername" 
                                placeholder="Cuenta de usuario" 
                                name="cuenta"
                                value={cuenta}
                                onChange={ handleRegisterInputChange }
                            />
                            </div>
                        </div>

                    </div>

                    <div className="row g-3 mb-3">
                        <div className="col-sm-8">
                            <div className="input-group">
                                <div className="input-group-text">Aplicativo Inst</div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    aria-label="Username" 
                                    aria-describedby="basic-addon1" 
                                    name="aplicativoInst"
                                    value={ aplicativoInst }
                                    onChange={ handleRegisterInputChange }
                                    onKeyUp={ handleKeyPresChange }
                                />
                            </div>
                        </div>
                    </div>

                    <hr />
                    
                    <label className="form-label">Datos del Empleado</label>

                    <div className="row g-3 mb-3">
                            <div className="input-group">
                            <span className="input-group-text">Num. Empleado:</span>
                                <Typeahead
                                    id="basic-typeahead-single"
                                    
                                    labelKey="label"
                                    newSelectionPrefix="Agregar nvo: "
                                    onChange={handleSelected}
                                    options={data}
                                    selected={singleSelections}
                                    allowNew={true}
                                    renderMenuItemChildren={(option) => (
                                        <div>
                                        {option.label}
                                        <div>
                                            <small>Nom: {option.nombre+' '+option.apellido_pat} - Puesto: {option.denom_puesto}</small>
                                        </div>
                                        </div>
                                    )}
                                    ref={refAutoCompleteEdit}
                                />
                            </div>
                    </div>

                    <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                            <div className="input-group">
                                <span className="input-group-text">Nombre</span>
                                <input 
                                    type="text" 
                                    aria-label="First name" 
                                    className="form-control" 
                                    placeholder="Nombre(s)" 
                                    name="nombreUsuario"
                                    value={activeRowEdit ? activeRowEdit.nombre : nombreUsuario}
                                    onChange={ handleRegisterInputChange }
                                    ref={inputNameRefEdit}
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                            <span className="input-group-text">Apellidos</span>
                                <input 
                                    type="text" 
                                    aria-label="Last name" 
                                    className="form-control" 
                                    placeholder="Apellidos"
                                    name="apellidos"
                                    value={activeRowEdit ? activeRowEdit.apellido_pat +' '+activeRowEdit.apellido_mat : apellidos}
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
                                name="puesto"
                                value={activeRowEdit ? activeRowEdit.denom_puesto : puesto}
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
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
                                name="area"
                                value={activeRowEdit ? activeRowEdit.denom_servicio : area}
                                onChange={ handleRegisterInputChange }
                                onKeyUp={ handleKeyPresChange }
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
                                value={activeRowEdit ? activeRowEdit.extension : extension}
                                onChange={ handleRegisterInputChange }
                            />
                            </div>
                        </div>

                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="email" 
                            name="email"
                            value={activeRowEdit ? activeRowEdit.email : email}
                            onChange={ handleRegisterInputChange }
                        />
                    </div>

                    <div className="row g-3 mb-3">

                    <div className="input-group">

                            <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                            <div className="input-group">
                                <span className="input-group-text">Observaciones</span>
                                <textarea 
                                    className="form-control" 
                                    aria-label="With textarea"
                                    name="observaciones"
                                    value={observaciones}
                                    onChange={ handleRegisterInputChange }
                                    ref={inputObservRefEdit}
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
    );

}