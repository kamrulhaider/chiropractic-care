import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container my-5 d-flex flex-column align-items-center about p-3 rounded-3">
            <div>
                <img className="img-fluid about-img" src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="text-center mt-3">
                <h3>About our Clinic</h3>
                <p>Unlike conventional medicine, which focuses on attempting to treat disease once it occurs, the chiropractic care offered at Serenity Health & Wellness in Edmonton emphasizes the importance of improving your health in an effort to reduce the risk of pain and illness in the first place. They offer a unique way to provide pain relief for many types of pain and conditions, including back pain, neck pain and more.</p>
                <p>They have a network of chiropractic and wellness care professionals dedicated to helping you achieve your wellness objectives. To fully understand the nature of your health, they recommend that you join their free website membership program. They will personally tailor a chiropractic and wellness program specifically targeted to your needs using the least invasive yet highly-effective techniques and services.</p>
            </div>
        </div>
    );
};

export default About;