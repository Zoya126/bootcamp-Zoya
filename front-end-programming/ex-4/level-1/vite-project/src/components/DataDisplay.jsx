import  { useEffect, useState } from 'react';// src/components/DataDisplay.jsx

import { fetchData } from '../utils/api';

const DataDisplay = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData()
            .then((data) => setData(data))
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataDisplay;
