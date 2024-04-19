import { useState } from "react";

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    // Para resetear el formulario
    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        // console.log(target.value);
       setValues({

           ...values,//Se desestructura todo el values, para jalar todos los elementos que no estan cambiando

           [target.name]: target.value /* target.name para hacer referencia al name del input,
           y target.value para hacer referenica al value del input que se le asigna la variable correspondiente del values*/ 
          
       });
    }

    const handleKeyPresChange = ({target}) => {
        setValues({

            ...values,
            [target.name]: target.value.toUpperCase()
        });
    }

    // retorna values y handleInputChange y los recibe FormWithCustomHook
    return [ values, handleInputChange, reset, handleKeyPresChange ];

}
