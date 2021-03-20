import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import "./SignUp.css"

const SignUp = () => {
    const UserNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const history = useHistory();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('passwords do not match!');
        }
        try {
            setLoading(true);
            setError('');
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch (error) {
            setError(error)
        }
        setLoading(false);

    }
    return (
        <>
            <div className="container-signup mx-auto m-5">
                <div className="card card-signup">
                    <div className="card-body">
                        <div className="circle"></div>
                        <header className="myHed text-center">
                            <i className="far fa-user"></i>
                            <p>LOGIN</p>
                        </header>
                        <form onSubmit={handleSubmit} className="main-form text-center" method="POST">
                            <div id="legend">
                                <legend className="">Login</legend>
                                {error ? (<alert variant="danger">{JSON.stringify(error)}</alert>) : ''}
                            </div>
                            <div className="form-group my-0 mb-1">
                                <label className="my-0">
                                    <i className="fas fa-user"></i>
                                    <input ref={UserNameRef} type="text" id="username" name="username" placeholder="Enter your name:" className="myInput" required />
                                </label>
                            </div>
                            <div className="form-group my-0 mb-1">
                                <label className="my-0 ">
                                    <i className="fas fa-user"></i>
                                    <input ref={emailRef} type="text" id="email" name="email" placeholder="Enter your email address" className="myInput" required />
                                </label>
                            </div>
                            <div className="form-group my-0 mb-1">
                                <label className="my-0">
                                    <i className="fas fa-lock"></i>
                                    <input ref={passwordRef} type="password" id="password" name="password" placeholder="Enter your password" className="myInput" required />

                                </label>
                            </div>
                            <div className="form-group my-0 mb-1">
                                <label className="my-0">
                                    <i className="fas fa-lock"></i>
                                    <input ref={confirmPasswordRef} type="password" id="password_confirm" name="password_confirm" placeholder="Please confirm password" className="myInput" required />

                                </label>
                            </div>

                            <label className="check_1"><input type="checkbox" />Remember Me</label>
                            <div className="form-group mt-2">
                                <label>
                                    <button disabled={loading} className="form-control button" type="submit">SIGN UP</button>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="w-100 font-weight-bold text-center mb-4">
                        <h5> Already have an account?</h5>
                        <Link className="h4 text-decoration-none" to="/login">LogIn!</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;