import { useSelector } from "react-redux";
import useScanDetection from 'use-scan-detection';

import { useForm } from "../../hooks/useForm";


export const ItemAdd = ({ onNewItem }) => {

    const { data } = useSelector( state => state.carrito );

    const [ {codigo}, handleInputChange, reset ] = useForm({
        codigo: ''
    });

    
    // UseScanDetection toma el codigo de barras sin que se encuentre el focus en el input
    useScanDetection({
        onComplete: (code) => { 
            console.log(code);
        
            if( code.length <= 1) return;

            const result = data.find((i) => i.codigo === code);

        if (result) {

            const newItem = {
                id: new Date().getTime(),
                codigo: result.codigo,
                costo: result.costo,
                desc: result.desc
            }

            onNewItem(newItem);
            reset();
        }

        }
    });

    // Toma el codigo de barras del input haciendo el submit
    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if( codigo.length <= 1) return;

        if (codigo.length) {
            for (let i = 0; i < codigo.length; ++i) {
                if (codigo[i] === '-') {
                    console.log('okay');
                }
            }
           
        }

        const result = data.find((i) => i.codigo === codigo);

        if (result) {

            const newItem = {
                id: new Date().getTime(),
                codigo: result.codigo,
                costo: result.costo,
                desc: result.desc
            }

            onNewItem(newItem);
            reset();
        }
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
        // autoFocus
        type="text"
        placeholder="Ingresa codigo barras"
        className="form-control"
        name="codigo"
        value={ codigo }
        onChange={ handleInputChange }
        />

        {/* <button type="submit" className="btn btn-primary mt-1">
        Agregar
        </button> */}
    </form>
  )
}
