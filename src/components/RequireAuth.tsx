import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = () => {
    const { state } = useAuth();
    const location = useLocation();
    return (
        state?.user 
            ? <Outlet /> 
            : <Navigate 
                to="/login" 
                state={{ from: location }} 
                replace 
            />
    )
}

export default RequireAuth;