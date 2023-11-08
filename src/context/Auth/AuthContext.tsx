import { createContext, useReducer } from 'react';
import { doLogin, logoutSuccess } from './authAction';
import authReducer, { initialState } from './authReducer';
import { AuthContextType, UserCredentials } from '../../types/types';

const AuthContext = createContext< AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);


    const login = (credentials: UserCredentials) => {
        const {user, password} = credentials;
        return doLogin(dispatch, {user, password})
    }

    const logout = () => {
        dispatch(logoutSuccess());
    }

    const operationsAndState = {
        state: authState,
        login,
        logout,
    } 

    return (
        <AuthContext.Provider value={operationsAndState}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;