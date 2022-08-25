import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { useNavigate } from 'react-router-dom';


export const EquiposBackBtn = () => {

    const navigate = useNavigate();

  return (

    <button className="btn btn-light fab-back" onClick={ () => navigate(-1) }>
        <FeatherIcon icon="arrow-left" />
    </button>

  )
}
