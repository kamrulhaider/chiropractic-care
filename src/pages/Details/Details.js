import React from 'react';
import useTherapies from '../../hooks/useTherapies';
import { useParams } from 'react-router';

const Details = () => {

    // parameter
    const { therapyId } = useParams();

    return (
        <div className="container">
            <h1>{therapyId}</h1>
        </div>
    );
};

export default Details;