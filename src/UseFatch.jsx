import { useState, useEffect } from 'react';

const useFatch = (url) => {
    const [data2, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [url]);

    return data2;
};

export default useFatch;