import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5 fw-bold">Frequently Asked Question</h2>
            <Accordion>

                {/* single item */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h3>What is chiropractic treatment?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        a health-care profession that focuses on the spine and other joints of the body, and their connection to the nervous system. The word “chiropractic” means “to be done by hand.” Chiropractors use adjustments to restore joint function and support the nervous system. They help patients maintain optimal health while avoiding unnecessary drugs or surgery. An estimated 50 million Americans see a chiropractor each year.
                    </Accordion.Body>
                </Accordion.Item>

                {/* single item  */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h3>How chiropractic works?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        Chiropractic doctors focus on the body's musculoskeletal and nervous systems. These specially trained physicians perform treatments including spinal manipulations, also known as adjustments. These work to increase mobility of a patient's spinal vertebrae and ensure they're in the proper alignment.
                    </Accordion.Body>
                </Accordion.Item>

                {/* single item  */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h3>Is chiropractic pseudoscience?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        Chiropractic is a pseudoscientific alternative medicine that is concerned with the diagnosis and treatment of mechanical disorders of the musculoskeletal system, especially the spine. Practitioners of chiropractic are called chiropractors.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default Faq;