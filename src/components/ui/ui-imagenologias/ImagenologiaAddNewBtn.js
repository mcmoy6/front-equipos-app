import React from 'react';
import { useDispatch } from 'react-redux';

import { uiOpenModalImgAction } from '../../../actions/imagenologiasActions';


export const ImagenologiaAddNewBtn = () => {

    const dispatch = useDispatch();

    const handleClickNewImagenologia = () => {

        // dispatch( uiOpenModaPrinterlAction() );
        dispatch( uiOpenModalImgAction() );
    }

  return (
        <button className="btn btn-primary fab" onClick={ handleClickNewImagenologia }>
            <i className="fas fa-plus"></i>
            {/* <AddIcon /> */}
        </button>
  )
}
