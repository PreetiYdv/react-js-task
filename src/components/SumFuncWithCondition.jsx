import React, { useState } from "react";

const SumFuncWithCondition = () => {
  const [number, setNumber] = useState(0);
  const [remove, setRemove] = useState(0);
  const [output, setOutput] = useState(0);
  const [array, setArray] = useState([]);
  function SumFunc(array, remove) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== remove) {
        sum += array[i];
      }
    }
     setOutput(sum);
  }
    const handleAdd = () => {
      const newArray = [...array, parseInt(number, 10)];
      setArray(newArray);
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    SumFunc(array, Number(remove));
    setArray('')
  };
  return (
    <>
      <div className=" h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <form onSubmit={handleSubmit} className="">
            <h2 className="text-white text-3xl mb-4 text-center font-semibold">
              Sum of array {array+","} number except {remove}
            </h2>
            <input
              type="number"
              value={number}
              placeholder="array number"
              onChange={(e) => setNumber(e.target.value)}
              className="p-1 me-2"
            />

            <span
              onClick={handleAdd}
              className="text-white border border-white rounded mt-5 px-6 py-1 cursor-pointer"
            >
              {" "}
              Add
            </span>
            <input
              type="number"
              value={remove}
              placeholder="number to remove"
              onChange={(e) => setRemove(e.target.value)}
              className="p-1 mx-3"
            />
            <button
              type="submit"
              className="text-white border border-white rounded mt-5 px-6 py-1"
            >
              output
            </button>
            <p className="text-white text-lg text-center mt-6">
              output :- {output}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SumFuncWithCondition;
