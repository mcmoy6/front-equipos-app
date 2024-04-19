import React, { useState, useRef } from 'react';
import Barcode from 'react-barcode';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { printTurnos } from './printTurnos';


const pageStyles = `

    @page{
        size: 40mm 20mm
    };

    @media all {
        .pageBreak {
            display: none
        }
    };

    @media print {
        .pageBreak {
            page-break-before: always;
        }
    }

`;

const initRow = { 
    turnoInicial: '',
    turnoFinal: '' 
}

export const TurnosPage = () => {

    const [ formValues, setFormValues ] = useState(initRow);

    const navigate = useNavigate();
    const location = useLocation();

    const { tIni = '', tFin = '' } = queryString.parse( location.search );
    const turnos = printTurnos( tIni, tFin );

    const refPrintCode = useRef();

    const {
        turnoInicial,
        turnoFinal
    } = formValues

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
        
    }

    const generateBarcode = (e) => {
        e.preventDefault();
        if ( turnoInicial.trim().length < 1 || turnoFinal.trim().length < 1 ) return;
       
        navigate(`?tIni=${ turnoInicial }&tFin=${ turnoFinal }`);

    }

   
  return (
    <div>
       <span className='row'><h2>Generar Turnos</h2></span>

        <div className="row g-3 mb-3 mt-3">
            <form onSubmit={ generateBarcode }>
                <div className="input-group">
                    <div className="input-group-text">T Inicial.</div>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="specificSizeInputGroupTurnInicial" 
                        name="turnoInicial"
                        value={turnoInicial}
                        onChange={ handleInputChange }
                    />
                    <input 
                        type="number" 
                        className="form-control" 
                        id="specificSizeInputGroupTurnFinal" 
                        name="turnoFinal"
                        value={turnoFinal}
                        onChange={ handleInputChange }
                        // disabled={ tipo_impresora === 'monocromatica' && true }
                    />
                    <div className="input-group-text">T Final.</div>
                </div>
                <div className="input-group">

                    <div className='row mt-1'>

                        <button 
                            className='btn btn-success mt-3'
                            // onClick={ generateBarcode }
                        >
                            Generar turnos
                        </button>
                    </div>
                </div>
            </form>
        </div>


        <div className='row mt-2 mb-3'>
            <ReactToPrint 
                trigger={ () => <button className='btn btn-primary mt-3' disabled={ turnoInicial && turnoFinal ? false : true} > Imprimir </button>}
                content={ () => refPrintCode.current }
                pageStyle={pageStyles}
            />
        
       </div>
       
       <div ref={ refPrintCode } >

            {
                turnos.map( (value) => (
                    <Barcode 
                        fontSize={25}
                        height={10} 
                        key={value}
                        marginLeft={20}
                        value={ `Turno. ${value}` }
                        width={1} 
                    />

                ))
            }
        
       </div>

    </div>
    
  )
}
