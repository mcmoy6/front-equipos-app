import React from 'react';
import { useDispatch } from 'react-redux';

import FeatherIcon from 'feather-icons-react';
import { printerDeletedAction } from '../../../actions/printers';
import { rowClearSelectedAction } from '../../../actions/row';

export const DeletePrinterBtn = () => {

    const dispatch = useDispatch();


    const handleDelete = () => {
        
         dispatch( printerDeletedAction() );
         dispatch( rowClearSelectedAction() );
    }

    return (
        <button className="btn btn-danger fab-danger animate__animated animate__fadeIn" onClick={handleDelete}>
            <FeatherIcon icon="trash-2" />
        </button>
    )
}
