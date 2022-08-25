import React from 'react'
// import { useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';


// import { empeladosStartLoadingAction } from '../../../actions/empleadosActions';
// import { uiOpenModalEquAction } from '../../../actions/equiposActions';
// import { inventariosStartLoadingAction } from '../../../actions/inventariosActions';
// import { sitiosStartLoadingAction } from '../../../actions/sitiosActions';

export const EquiposAddNewBtn = () => {

    // const dispatch = useDispatch();

    // const handleClickNewEvent = () => {
    //     // dispatch( empeladosStartLoadingAction() );
    //     // dispatch( sitiosStartLoadingAction() );
    //     // dispatch( inventariosStartLoadingAction() );
    //     // dispatch( uiOpenModalEquAction() );
    // }
    //  const navigate = useNavigate();

    // const handleClickNewEvent = () => {

    // }

    return (
        <Link to="/equiposNew">
            <button className="btn btn-primary fab">
                <FeatherIcon icon="plus" />
            </button>
        </Link>
    )
}