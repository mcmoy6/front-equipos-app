import React from 'react';
import { Provider } from 'react-redux';
// import { AuthContext } from './components/auth/authContext';
// import { authReducer } from './components/auth/authReducer';

import { store } from './store/store'
import { AppRouter } from './components/router/AppRouter';
import { AppTheme } from './theme/AppTheme';


export const EquiposApp = () => {


  return (
     <Provider store={store}>

      <AppTheme >
        <AppRouter />
      </AppTheme>

     </Provider>
     
   
  );
};
