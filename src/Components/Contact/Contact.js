import React from 'react';
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Contact = ({ social }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className=" contact">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="contact-info">
                                        <p classNameName="massage-logo"> <FontAwesomeIcon icon={faEnvelope} /></p>
                                        <h2>Contact Us</h2>
                                        <h4>We would love to hear from you !</h4>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="contact-form">
                                        <div className="form-group">
                                            <label className="control-label col-sm-2 " for="fname">First Name:</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2" for="lname">Last Name:</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2" for="email">Email:</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-2" for="comment">Comment:</label>
                                            <div className="col-sm-10">
                                                <textarea className="form-control" rows="5" id="comment"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button type="submit" className="btn btn-default">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;