import React,{useState} from "react";

const SeriesFunction = () => {
  const [number, setNumber] = useState(0)
  const [output, setOutput] = useState(0);
  function seriesPattern(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      let output = i * 4;
      result += output;
    }
    setOutput(result);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    seriesPattern(number);
  };
  return (
    <>
      <div className=" h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col items-center"
          >
            <h2 className="text-white text-3xl mb-4 text-center font-semibold">
              Series Pattern :- 1, 5, 13,........ Find more
            </h2>
            <input
              type="number"
              value={number}
              placeholder="year"
              onChange={(e) => setNumber(e.target.value)}
              className="p-1"
            />
            <button
              type="submit"
              className="text-white border border-white rounded mt-5 px-6 py-1"
            >
              output
            </button>
            <p className="text-white text-lg text-center mt-6">output :- {output}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SeriesFunction;
