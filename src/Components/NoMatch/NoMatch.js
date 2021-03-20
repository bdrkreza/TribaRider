import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
const NoMatch = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 mx-auto">
                                    <div class="error-template">
                                        <h1>
                                            Oops!</h1>
                                        <h2>
                                            404 Not Found</h2>
                                        <div class="error-details">
                                            Sorry, an error has occured, Requested page not found!
                                            </div>
                                        <div class="error-actions">
                                            <Link to="/" class="btn btn-primary btn-lg"><FontAwesomeIcon icon={faHome} /> Take Me Home</Link>
                                            <Link to="/contact" class="btn btn-danger btn-lg"><FontAwesomeIcon icon={faEnvelope} /> Contact Support</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;