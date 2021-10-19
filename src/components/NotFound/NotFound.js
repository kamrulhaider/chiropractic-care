import React from 'react';
import error from '../../images/error.png';


const NotFound = () => {
    return (
        <div className="container d-flex flex-column align-items-center my-5">
            <div>
                <h3 className="text-center fw-bold mb-5">Page Not Found</h3>
                <img className="img-fluid" src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;