import React from 'react'



export const Item = ({ item }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{item.desc}</span> {/* Centrar texto en el renglón */}
        <span className="align-self-center">{item.costo}</span>
        {/* <button className="btn btn-danger">Borrar</button> */}
    </li>
  )
}
