import { useContext } from 'react';
import AuthContext from '../context/Auth/AuthContext';

const useAuth = () => {
    const contextValue =  useContext(AuthContext);
    if (contextValue === null) {
        throw Error("Context has not been Provided!");
    }
    return contextValue;
}

export default useAuth;