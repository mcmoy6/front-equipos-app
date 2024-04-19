import { useDispatch, useSelector } from "react-redux"
import { ItemList } from "./ItemList";
import { ItemAdd } from "./ItemAdd";
import { startItemAddNewAction } from "../../actions/carritoActions";
import { useEffect } from "react";



export const CarritoApp = () => {

  const dispatch = useDispatch();

  const { carritoItems } = useSelector( state => state.carrito);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify( carritoItems ) );

    let reduce = carritoItems.reduce((acumulador, actual) => acumulador + actual.costo, 0); //Sumamos los costos de los items
    console.log(reduce);
  }, [carritoItems])
  

  const handleNewItem = ( item ) => {
    console.log({ item });

    dispatch( startItemAddNewAction( item ));
  }

  return (
    <>
    
      <h1>Carrito App</h1>

        <ItemAdd onNewItem={ handleNewItem } />

      <hr/>

      <div className="row">
        <div>
          <ItemList carritoItems={ carritoItems } />

        </div>

        <div className="col-5">

        </div>
      </div>


    </>
  )
}
