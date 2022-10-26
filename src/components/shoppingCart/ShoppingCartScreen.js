import React, { useState, useRef } from 'react';

// import "./App.css";

const data = [
    {
      id: "7501055302451",
      costo: "$22.00",
      desc: "Coca Cola 1 L.",
    },
    {
      id: "7501000658923",
      costo: "10.00 $usd",
      desc: "Producto 2"
    },{
      id: "7896090082087",
      costo: "2.00 $usd",
      desc: "Producto 3"
    },{
      id: "8690828630507",
      costo: "1.00 $usd",
      desc: "Producto 4"
    }
    ,{
      id: "8993286421978",
      costo: ".70 $usd",
      desc: "Producto 5"
    }
    ,{
      id: "6921345898333",
      costo: ".30 $usd",
      desc: "Producto 6"
    }
  ];

export const ShoppingCartScreen = () => {

    const inputRef = useRef();
    const buttonRef = useRef();

    const [id, setId] = useState("");
    const [message, setMessage] = useState("Escanea el producto");

    const search = (e) => {

        e.preventDefault();

        const result = data.find((i) => i.id === id);

        if (result) {
            setMessage(`${result.desc}   ${result.costo}`);
            e.target.select();
        } else {
            setMessage(id === "" ? "Escanea el producto" : "Artículo no encontrado");
        }

    }

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
                                name="id"
                                placeholder="Codigo de barras"
                                autoComplete="off"
                                value={id}
                                onChange={(e)=>setId(e.target.value)}
                                onKeyUp={search}
                                // value={ description } // Obtenida del useForm
                                // onChange={ handleInputChange }
                                ref={inputRef}
                        />
                        <div className="input-group-append">
                            {/* <button 
                                    ref={buttonRef}
                                    type="submit"
                                    className="btn btn-outline-primary"
                                    // onClick={handleClick}
                                >
                                Agregar
                            </button> */}
                        </div>
                        <code
                            className={
                            message === "Escanea el producto"
                                ? null
                                : message === "Artículo no encontrado"
                                ? "rojo"
                                : "verde"
                            }
                        >
                            {message}
                        </code>
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