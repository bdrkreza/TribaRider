
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

const UpdateProfile = () => {
    const UserNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { updateEmail, updatePassword, currentUser } = useAuth();
    const history = useHistory();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('passwords do not match!');
        }

        setLoading(true);
        setError('');
        const promises = [];
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        } if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }
        Promise.all(promises).then(() => {
            history.push('/');
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setLoading(false);
        })
        setLoading(false);

    };
    return (
        <>
            <form onSubmit={handleSubmit} class="form-horizontal" action='' method="POST">
                <fieldset>
                    <div id="legend">
                        <legend class="">Register</legend>
                        {error ? (<alert variant="danger">{JSON.stringify(error)}</alert>) : ''}
                    </div>

                    <div class="control-group">


                        <label class="control-label" for="username">Username</label>
                        <div class="controls">
                            <input ref={UserNameRef} type="text" id="username" name="username" placeholder="Enter Your name:" class="input-xlarge" />
                            <p class="help-block">Username can contain any letters or numbers, without spaces</p>
                        </div>
                    </div>

                    <div class="control-group">

                        <label class="control-label" for="email">E-mail</label>
                        <div class="controls">
                            <input ref={emailRef} type="email" id="email" name="email" placeholder=" Enter your email address" class="input-xlarge" required defaultValue={currentUser.email} />
                            <p class="help-block">Please provide your E-mail</p>
                        </div>
                    </div>

                    <div class="control-group">

                        <label class="control-label" for="password">Password</label>
                        <div class="controls">
                            <input ref={passwordRef} type="password" id="password" name="password" placeholder=" Enter your password" class="input-xlarge" required />
                            <p class="help-block">Password should be at least 4 characters</p>
                        </div>
                    </div>

                    <div class="control-group">

                        <label class="control-label" for="password_confirm">Password (Confirm)</label>
                        <div class="controls">
                            <input ref={confirmPasswordRef} type="password" id="password_confirm" name="password_confirm" placeholder="Enter Your Confirm Password" class="input-xlarge" required />
                            <p class="help-block">Please confirm password</p>
                        </div>
                    </div>

                    <div class="control-group">

                        <div class="controls">
                            <button disabled={loading} class="btn btn-success" type="submit">Update Profile</button>
                        </div>
                    </div>
                    <div class="w-100 text-center mt-2">
                        <Link to="/">Cancel</Link>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default UpdateProfile;