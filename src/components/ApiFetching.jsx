import React, { useState, useEffect } from 'react';
const ApiFetching = () => {
    const [jsonData, setJsonData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                console.log(data,response,"data")
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

    return (
        <>
            {jsonData ? (
                <ul>
                    {jsonData?.data?.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.age} years old
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </>
    )
}

export default ApiFetching