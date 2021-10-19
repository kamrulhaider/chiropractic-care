import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle, handleRegistration, isLogin, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin, error, handleResetPassword } = useAuth();

    return (
        <div className="login">
            <div className="login-form">
                <form onSubmit={handleRegistration}>
                    <h3 className="text-center mb-3 fw-bold">Please {isLogin ? 'Login' : 'Register'}</h3>
                    {!isLogin && <div className="mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>}
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" />
                    </div>
                    <div className="form-check">
                        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" htmlFor="gridCheck1">
                            Already Registered?
                        </label>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary"> {isLogin ? 'Login' : 'Register'}</button>
                    <button type="button" onClick={handleResetPassword} className="btn btn-secondary ms-3">Reset Password</button>
                </form>
                <button onClick={signInUsingGoogle} className="btn btn-warning mt-3 text-center">SignIn Using Google</button>
            </div>
        </div>
    );
};

export default Login;