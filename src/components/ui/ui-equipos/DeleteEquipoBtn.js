import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux';
import { equipoClearRowSelectedAction, equipoStartDeleteAction } from '../../../actions/equiposActions';



export const DeleteEquipoBtn = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log('Eliminado');

        dispatch( equipoStartDeleteAction() );
        dispatch( equipoClearRowSelectedAction() );
    }


    return (
        <button className="btn btn-danger fab-danger animate__animated animate__fadeIn" onClick={handleDelete}>
            <FeatherIcon icon="trash-2" />
        </button>
    )

}