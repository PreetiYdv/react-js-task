import React, { useState } from 'react'

const FilterMethod = ({text,type}) => {
    const [data, setdata] = useState([{ num: 'preeti' }])
    const value = [{ num: 'palvi@gmail.com' }, { num: 'neha@gmail.com' }, { num: 'palvitiwari@gmail.com' }, { num: 'preeti@gmail.com' }, { num: 'preetiydv@gmail.com' }, { num: 'palvitiwari20@gmail.com' }];
    const [message, setMessage] = useState('');

    const handleSubmit = (item) => {
        console.log(item)
        const result = data.filter((obj, i) => {
            console.log(obj.num, "obj.numobj.num")
            return obj.num === item ? obj.num : ""
        })
        console.log(result);
        if (result.length > 0) {
            setMessage('Value already exists');
        } else {
            console.log(item, "item");
            setdata([...data, { num: item }]);
            setMessage('');
        }
    }
    const deleteHandler = (index) => {
        let newData = [...data];
        newData.splice(index, 1);
        setdata(newData);
    }
    return (
        <>
            <section className="h-screen bg-[#10111A]">
                <div className="container mx-auto h-full flex justify-center flex-col items-center">
                    <h2 className="text-white text-3xl mb-4 text-center font-semibold">
                        Filter  {text} {type}
                    </h2>
                    <div className="flex flex-col justify-center rounded-md border max-w-[700px] bg-white/5 backdrop-blur-md gap-5 px-20 py-10">
                        <div className="flex gap-2 flex-wrap">
                            {data.map((item, index) => {
                                return (
                                    <div className='border border-white rounded-lg text-white px-2 py-2 flex items-center gap-4 mx-1'>
                                        <button className='text-lg'>{item.num}</button>
                                        <button
                                            className="border-0 bg-transparent"
                                            onClick={() => deleteHandler(index)}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 5H21M9 10V15M13 10V15M3 5H19L17.42 19.22C17.3658 19.7094 17.1331 20.1616 16.7663 20.49C16.3994 20.8184 15.9244 21 15.432 21H6.568C6.07564 21 5.60056 20.8184 5.23375 20.49C4.86693 20.1616 4.63416 19.7094 4.58 19.22L3 5ZM6.345 2.147C6.50675 1.80397 6.76271 1.514 7.083 1.31091C7.4033 1.10782 7.77474 0.999995 8.154 1H13.846C14.2254 0.999806 14.5971 1.10755 14.9176 1.31064C15.2381 1.51374 15.4942 1.80381 15.656 2.147L17 5H5L6.345 2.147V2.147Z"
                                                    stroke="#FF4545"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {value.map((item, i) => {
                                return (
                                    <button className='border border-white rounded-lg text-white px-2 mx-1' onClick={() => handleSubmit(item.num)}>
                                        {item.num}
                                    </button>
                                )
                            })}
                        </div>
                        {message && <p className='text-white'>{message}</p>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FilterMethod