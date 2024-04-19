import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux'
import { uiOpenModalEquiposMainBitAction } from '../../../actions/equiposMainBitActions';



export const EquiposMainBitEditBtn = () => {

    const dispatch = useDispatch();

    const handleClickEditequipo = () => {
        
        dispatch( uiOpenModalEquiposMainBitAction() );
        
    }

  return (
        <button className="btn btn-dark fab-edit animate__animated animate__fadeIn" onClick={handleClickEditequipo}>
            <FeatherIcon icon="edit" />
        </button>
  )
}
