import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModalTelecomAction } from '../../../actions/telecomActions';



export const TelecomAddNewBtn = () => {

    const dispatch = useDispatch();

    const handleClickNewTelecom = () => {

        // dispatch( uiOpenModaPrinterlAction() );
        dispatch( uiOpenModalTelecomAction() );
    }

  return (
    <button className="btn btn-primary fab" onClick={ handleClickNewTelecom }>
        <i className="fas fa-plus"></i>
        {/* <AddIcon /> */}
    </button>
  )
}
