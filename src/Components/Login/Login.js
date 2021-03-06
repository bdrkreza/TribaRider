
import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext/AuthContext';
import { Link, useHistory, useLocation } from 'react-router-dom';
import SocialIcon from '../SocialIcon/SocialIcon';
import './Login.css'



const Login = () => {

    const History = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, handleGoogleIn, handleFbIn } = useAuth();
    // const history = useHistory();



    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError('');
            await login(emailRef.current.value, passwordRef.current.value).then(() => {
                // history.push('/destination')
                History.replace(from);

            })

        } catch (error) {
            setError(error)
        }
        setLoading(false);

    }

    const googleSign = () => {
        handleGoogleIn().then((res) => {
            History.replace(from);
        })
    }

    const FacebookSign = () => {
        handleFbIn().then((res) => {
            History.replace(from);
        })
    }

    return (
        <>
            <div className="body">
                <div className="container-login mx-auto m-5">
                    <div className="card card-login">
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
                                <div className="form-group my-0 mb-3">
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
                                <label className="check_1"><input type="checkbox" />Remember Me</label>
                                <div className="form-group ">
                                    <label>
                                        <button disabled={loading} className="form-control" type="submit">LOGIN</button>
                                    </label>
                                </div>
                                <span className="check_1">With your social media account</span>
                            </form>
                            <SocialIcon GoogleIn={googleSign} FacebookIn={FacebookSign} />
                        </div>

                        <div className="w-100 text-center mb-4">
                            <h5>Don't have an account?</h5>
                            <Link className="h4 text-decoration-none" to="/signUp">Sign Up!</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;