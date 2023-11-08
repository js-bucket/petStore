import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
const Header = () => {

    const { state: {user}, logout } = useAuth();
    return (
        <header>
            <h2>PetStore</h2>
            <div className="top-menu">
                {
                    !user ? (
                        <button>
                            <Link to="/login">Login</Link>
                        </button>
                    ) : (
                        <>
                            <Link to="/">Welcome <i>{user}</i>!</Link>
                            <Link to="/petsdashboard">Dashboard</Link>
                            <button 
                                onClick={()=>logout()}
                            >Logout</button>
                        </>
                        
                    )
                }
            </div>
        </header>
    )
}

export default Header;