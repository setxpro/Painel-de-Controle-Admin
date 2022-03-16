import react, { useContext } from 'react';

import Login from '../../pages/Login';
import { AuthContext } from './AuthContext';


const RequireAuth = ({ children } : { children: JSX.Element }) => {

    //impedindo o acesso
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login/>;
    }
    return children;
}

export default RequireAuth;