


export const printTurnos = ( turnoIni = '', turnoFin = '' ) => {

    // let turnos = 0
    const arr = []

    for ( let index = parseInt(turnoIni); index <= parseInt(turnoFin); index ++ ) {
        // turnos = index;
        // arr.push(turnos);
        arr.push( (index < 10 ? "0" : "") + index ); // Insertamos los valores al arreglo y agregamos un 0 a la izquierda cuando el numero es de un solo dígito.
        
    }
    return arr
}