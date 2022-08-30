import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackOutlined } from '@mui/icons-material';
// import FeatherIcon from 'feather-icons-react';
import { useNavigate } from 'react-router-dom';


export const EquiposBackBtn = () => {

    const navigate = useNavigate();

  return (

    <IconButton
      size='medium'
      onClick={ () => navigate(-1)}
      sx={{
        color: 'black',
        backgroundColor: 'white',
        ':hover': { backgroundColor: 'white', opacity: 0.9 },
        position: 'fixed',
        left: { xs: 10, sm: 50, md:300, lg:300 },
        top: { xs: 120, sm: 120, md:150, lg:170 },
        
      }}
    >
    <ArrowBackOutlined sx={{ fontSize: 30 }} />
  </IconButton>

    // <button className="btn btn-light fab-back" onClick={ () => navigate(-1) }>
    //     <FeatherIcon icon="arrow-left" />
    // </button>

  )
}
