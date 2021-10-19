import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import slider1 from '../../../images/slider-1.jpg';
import slider2 from '../../../images/slider-2.jpg';
import slider3 from '../../../images/slider-3.jpg';

const Slider = () => {
    return (
        <div className="container-fluid mt-3">
            <Carousel>
                {/* slider item */}
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={slider1}
                        alt=" "
                    />
                    <Carousel.Caption>
                        <p className="d-none d-md-block">Chiropractic adjustments are a natural, drug-free approach to helping patients alleviate pain and gain more mobility. When the spine is properly aligned, the nervous system works correctly and strain on the back and neck is significant reduced.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* slider item */}
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={slider2}
                        alt=" "
                    />
                    <Carousel.Caption>
                        <p className="d-none d-md-block">Chiropractic adjustments are very effective at restoring joint function and mobility, which leads to increased range of motion and reduced pain.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* slider item */}
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={slider3}
                        alt=" "
                    />
                    <Carousel.Caption>
                        <p className="d-none d-md-block">The diversified technique has 3 main purposes, and they are to restore spinal alignment, repair joint disfunction, and ensure proper movement and mobility. Using hands-on t</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;