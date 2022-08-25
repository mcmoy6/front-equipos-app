import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux'
import { uiOpenModalEditEquAction } from '../../../actions/equiposActions';
import { empeladosStartLoadingAction } from '../../../actions/empleadosActions';
import { sitiosStartLoadingAction } from '../../../actions/sitiosActions';

export const EquiposEditBtn = () => {

     const dispatch = useDispatch();

    const handleClickEditequipo = () => {
        dispatch( empeladosStartLoadingAction() );
        dispatch( sitiosStartLoadingAction() );
        dispatch( uiOpenModalEditEquAction() );
    }

    return (
        <button className="btn btn-dark fab-edit animate__animated animate__fadeIn" onClick={handleClickEditequipo}>
        <FeatherIcon icon="edit" />
        </button>
    )
}