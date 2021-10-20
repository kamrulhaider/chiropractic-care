import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="container newsletter mt-5 mb-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-center fw-bold mb-3">Subscribe to our Newsletter</h2>
            <div className="mb-3 w-50">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <button className="btn btn-outline-danger">Subscribe</button>
        </div>
    );
};

export default Newsletter;