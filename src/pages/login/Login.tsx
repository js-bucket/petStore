import { useRef, useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
    const { login, state } = useAuth();
    

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null);


    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, serErrorMsg] = useState('');
    
    useEffect(() => {
        setPassword('');
        setUser('');
        if(state.user) {
            navigate(from, {replace : true})
        } else {
            serErrorMsg('Some error occured, please try again!');
            errorRef.current?.focus();
        }
    }, [state])

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        serErrorMsg('');
    }, [])

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({user, password});
    }

    return (
        <section className="login-form">
            {
                state.fetching 
                    && (
                        <p className="laoding">
                            Laoding...
                        </p>
                    )
            }
            {
                state.error && <p style={{ color: 'red'}} ref={errorRef} aria-live="assertive">{errorMsg}</p>
            }
            <h2 data-cy="cypress-title">Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor='username'>
                    Username:
                </label>
                <input 
                    data-cy="cypress-user"
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e)=>setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor='password'>
                    Password:
                </label>
                <input 
                    data-cy="cypress-password"
                    type='password'
                    id='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button className='login-btn'>Signin</button>
            </form>            
        </section>
    )
}

export default Login