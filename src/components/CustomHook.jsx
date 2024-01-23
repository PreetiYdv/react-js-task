import { useState, useEffect } from 'react';
import { getData } from '../utils';
const CustomHook = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await getData('data.json', 'json');
            setData(response.persons);
        } catch (error) {
            console.error(error);
        }
        return (data);
    };

    return (
        <>

        </>
    )
}

export default CustomHook