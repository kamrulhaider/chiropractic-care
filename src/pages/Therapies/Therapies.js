import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Therapy from '../../components/Therapy/Therapy';
import useTherapies from '../../hooks/useTherapies';


const Therapies = () => {

    const [therapies] = useTherapies();

    return (
        <div className="mt-5">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Our Therapies</h2>
                <Row xs={1} md={2} className="g-4">
                    {
                        therapies.map(therapy => <Therapy
                            therapy={therapy}
                            key={therapy.key}
                        ></Therapy>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Therapies;