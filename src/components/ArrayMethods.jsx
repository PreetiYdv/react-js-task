import React, { useState } from 'react'

const ArrayMethods = () => {
  const data = ["jan ", "feb ", "mar ", "apr ", "june "];
  const value = ["jan ", "feb ", "mar ", "nov ", "dec ", "july"];
  const [output, setOutput] = useState([]);
  const [result, setResult] = useState([]);
  const [r, setR] = useState([]);

  const abc = () => {
    // add Add may after april
    // find index of april
    let arrIndex = data.indexOf("apr ");
    let newArray = [...data.slice(0, arrIndex + 1), "may"]
    setResult(newArray)
    console.log(newArray);
  }

  const spliceMethod = () => {
   value.splice(3, 2, "apr ", "may ", "june ")
    setR(value)
  }
  const handleSubmit = () => {
    setOutput(data.concat(value))
  }
  return (
    <>
      <section className="h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <h2 className="text-white text-3xl mb-4 text-center font-semibold">
            Array Methods
          </h2>
          <div className="flex flex-col justify-center rounded-md border max-w-[600px] bg-white/5 backdrop-blur-md gap-5 px-20 py-10">
            <div className="flex gap-2">
              <p className="text-white text-2xl mb-4 text-center"> {data} & {value}</p>
            </div>
            <div className="mt-5 flex flex-wrap justify-center">
              <button className='border border-white rounded-lg text-lg text-white px-2 mx-1' onClick={() => handleSubmit()}>
                concat
              </button>
              <button className='border border-white rounded-lg text-lg text-white px-2 mx-1' onClick={() => abc()}>
                slice
              </button>
              <button className='border border-white rounded-lg text-lg text-white px-2 mx-1' onClick={() => spliceMethod()}>
                splice
              </button>
            </div>
            <p className="text-green-500 text-2xl mb-4 text-center">concat method :- {output} </p>
            <p className="text-pink-500 text-2xl mb-4 text-center"> slice method :- {result} </p>
            <p className="text-sky-500 text-2xl mb-4 text-center"> splice method :- {r} </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArrayMethods