import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModalCuentaAction } from '../../../actions/cuentasActions';


export const CuentasAddNewBtn = () => {

    const dispatch = useDispatch();

    const handleClickNewCuenta = () => {

        // dispatch( uiOpenModaPrinterlAction() );
        dispatch( uiOpenModalCuentaAction() );
    }

  return (
         <button className="btn btn-primary fab" onClick={ handleClickNewCuenta }>
            <i className="fas fa-plus"></i>
            {/* <AddIcon /> */}
        </button>
  )
}
