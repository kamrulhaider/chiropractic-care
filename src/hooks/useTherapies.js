import { useEffect, useState } from "react";

const useTherapies = () => {
    const [therapies, setTherapies] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setTherapies(data))
    }, [])

    // return necessary items 
    return [therapies];
}

export default useTherapies;