import React from 'react'
import { useDispatch } from 'react-redux';
//import { computerSetActiveAction } from '../../actions/computers';
import FeatherIcon from 'feather-icons-react';
//import { uiOpenModalAction } from '../../actions/ui';
import { uiOpenModalAction } from '../../../actions/ui';


export const UpdatePrintBtn = () => {

    const dispatch = useDispatch();

    const handleEdit = () => {
        
       // console.log(elementsRow)
        
        // dispatch( computerSetActiveAction( row ) );
         dispatch( uiOpenModalAction() );
    }

    return (
        <button className="btn btn-dark fab-edit animate__animated animate__fadeIn" onClick={handleEdit}>
            <FeatherIcon icon="edit" />
        </button>
    )
}
