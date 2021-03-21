
import { Link } from 'react-router-dom';
import logo from '../../Image/planet-travel.png'
import './Navbar.css'
import { useHistory } from 'react-router';
import { useAuth } from '../AuthContext/AuthContext';
import React, { useState } from 'react';
const NavBar = () => {
    const [error, setError] = useState()
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    const handleLogout = async () => {
        setError("");
        try {
            await logout().then(() => {
                // Sign-out successful.
                history.push('/')
            })

        } catch (error) {
            setError(error);
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg stroke  navbar-light ">
                            <div className="container-fluid">
                                <Link className="navbar-brand d-flex" to="/"><img className="logo w-50" src={logo} alt="brand-img" /></Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">

                                    <ul className="navbar-nav ml-auto  h6 mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link nav-bar active" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark" to="/destination">Destination</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark " to="/blog">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark " to="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle text-dark" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <Link className="dropdown-item text-dark" to="login">login</Link>
                                                <Link onClick={handleLogout} className="dropdown-item text-dark" to="logout">logout</Link>
                                            </div>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                            <div className="ml-2">
                                <h5>{currentUser && currentUser.displayName}</h5>
                                <h6>{currentUser && currentUser.email}</h6></div>
                        </nav>

                    </div>
                </div>
                {error ? (<alert variant="danger">{JSON.stringify(error)}</alert>) : ''}
            </div>
        </>

    );
};

export default NavBar;