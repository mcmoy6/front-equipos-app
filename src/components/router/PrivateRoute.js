import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export const PrivateRoute = ({ children }) => {

    const { uid } = useSelector( state => state.auth );

    const location = useLocation(); // Obtenemos las rutas por las que se esta navegando

    const { pathname, search } = location

    localStorage.setItem('lastpath', pathname + search); // Guardamos en el localStorage la ultima ruta por la que se navegó

    return !!uid ? children : <Navigate to="/login" /> 

}