import { useDispatch, useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { uiOpenModalEquiposMainBitAction } from '../../../actions/equiposMainBitActions';



export const EquiposMainBitAddNewBtn = () => {

    const dispatch = useDispatch();

    const { activeRowEquiposMainBit } = useSelector( state => state.equiposMainBit );

    const handleClickNewEquipoMainBit = () => {
        dispatch( uiOpenModalEquiposMainBitAction() );
    }

  return (
    <>
        {
          activeRowEquiposMainBit
          ?
          <button className="btn btn-dark fab-editdos animate__animated animate__flipInY" onClick={handleClickNewEquipoMainBit}>
            <FeatherIcon icon="edit" />
          </button>
          :
          <button className="btn btn-primary fabdos animate__animated animate__jackInTheBox" onClick={handleClickNewEquipoMainBit}>
            <FeatherIcon icon="plus" />
          </button>
        }
        
    </>
  )

}
