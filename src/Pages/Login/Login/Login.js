import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { setUser, setIsLoading, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn} className="btn-warning">Google Signin</button>
        </div>
    );
};

export default Login;