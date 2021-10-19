import React from 'react';
import './Doctors.css';

const Doctors = () => {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Rahim Abbasi</h5>
                            <p className="card-text">Dr. Rahim is one of the best chiropractors, specializing in chiropractic adjustment and Gonstead Wellness. He has helped prevent over 500 surgeries for</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Noah Murray</h5>
                            <p className="card-text">Do you have that crick in the neck that just won’t go away no matter what direction you stretch it? Maybe you need one of the best chiropractors in Edmonton when a massage just won’t cut it.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">McLeod Chiropractic</h5>
                            <p className="card-text">I absolutely love this clinic. Both Harris girls are awesome to deal with but Megan is my go-to! It doesn’t matter if I see her once a week or once a year, she always knows how to make me feel good! She is a God-send for me.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;