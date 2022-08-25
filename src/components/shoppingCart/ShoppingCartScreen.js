import React, { useRef } from 'react';



export const ShoppingCartScreen = () => {

    const inputRef = useRef();
    const buttonRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

    }

    return (

            <div 
                onBlur={(e) => {
                    if (e.currentTarget === e.target) {
                    //   console.log('unfocused self');
                    } else {
                    //   console.log('unfocused child', e.target);
                    //   document.querySelector('input').select();
                    inputRef.current.select();
                    console.log(inputRef);

                    }
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                        // Not triggered when swapping focus between children
                        //   console.log('focus left self');
                        //   document.querySelector('input').select();
                        inputRef.current.select();
                    }
                }}
            
            >

            <form onSubmit={ handleSubmit }>
                <div className="col-sm-7">
                    <div className="input-group">
                        
                        <input 
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Codigo de barras"
                                autoComplete="off"
                                // value={ description } // Obtenida del useForm
                                // onChange={ handleInputChange }
                                ref={inputRef}
                        />
                        <div className="input-group-append">
                            <button 
                                    ref={buttonRef}
                                    type="submit"
                                    className="btn btn-outline-primary"
                                    // onClick={handleClick}
                                >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>

            </form>

            <hr />

            <div className="row">

                <div className="col-7">

                    {/* <TodoList 
                        todos={ todos } 
                        handleToggle={ handleToggle } 
                        handleDelete={ handleDelete }
                    /> */}
                    
                </div>

             
            </div>
        </div>
      );
  };