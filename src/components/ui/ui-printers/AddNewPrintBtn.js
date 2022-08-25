import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModaPrinterlAction } from '../../../actions/printersActions';
// import AddIcon from '@material-ui/icons/Add';



export const AddNewPrintBtn = () => {

    const dispatch = useDispatch();

    const handleClickNewPrint = () => {

        // dispatch( uiOpenModaPrinterlAction() );
        dispatch( uiOpenModaPrinterlAction() );
    }

    return (
        <button className="btn btn-primary fab" onClick={ handleClickNewPrint }>
            <i className="fas fa-plus"></i>
            {/* <AddIcon /> */}
        </button>
    )
}
