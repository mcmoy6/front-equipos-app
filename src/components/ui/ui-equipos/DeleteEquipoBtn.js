import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { equipoClearRowSelectedAction, equipoStartDeleteAction } from '../../../actions/equiposActions';



export const DeleteEquipoBtn = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        // console.log('Eliminado');

        Swal.fire({
            title: 'Are you sure?',
            text: "¡No podras revertir la acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {

                if (result.isConfirmed) {

                dispatch( equipoStartDeleteAction() );
                dispatch( equipoClearRowSelectedAction() );

            }

        });
    }


    return (
        <button className="btn btn-danger fab-danger animate__animated animate__fadeIn" onClick={handleDelete}>
            <FeatherIcon icon="trash-2" />
        </button>
    )

}