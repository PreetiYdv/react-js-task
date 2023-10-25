import React, { useState } from 'react';

const IncludeMethod = () => {
    const [data, setdata] = useState([1, 2, 3, 4, 5, 6]);
    const value = [5, 6, 7, 8, 9, 10];
    const [message, setMessage] = useState('');

    const handleSubmit = (item) => {
        console.log(item);
        if (data.includes(item)) {
            setMessage('Value already exists');
        } else {
            setdata([...data, item]);
            setMessage('');
        }
    }

    return (
        <>
            <section className="h-screen bg-[#10111A]">
                <div className="container mx-auto h-full flex justify-center flex-col items-center">
                <h2 className="text-white text-3xl mb-4 text-center font-semibold">
             Include Method
            </h2>
                    <div className="flex flex-col justify-center rounded-md border max-w-[600px] bg-white/5 backdrop-blur-md gap-5 px-20 py-10">
                        <div className="flex gap-2">
                            {data.map((item) => {
                                return (<button className='border border-white rounded-lg text-white px-2 mx-1'>{item}</button>)
                            })}
                        </div>
                        <div className="mt-5 flex flex-wrap">
                            {value.map((item, i) => {
                                return (
                                    <button className='border border-white rounded-lg text-white px-2 mx-1' onClick={() => handleSubmit(item)}>
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                        {message && <p className='text-white'>{message}</p>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default IncludeMethod;
