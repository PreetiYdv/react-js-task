import React, { useState } from "react";

const FindCenturyByDate = () => {
  const [year, setYear] = useState("");
  const [output, setOutput] = useState("");
  function FindcenturyByYear(year) {
    let century = ""
    if (year <= 100) {
      century = 1 + "th Century";
    }
   else if (year % 100 === 0) {
       century = year/100 + "th Century";
    }
    else {
      century = Math.floor(year / 100) + 1 + "th Century";
    }
    setOutput(century);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    FindcenturyByYear(year);
    setYear('')
  };
  return (
    <>
      <div className=" h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <form onSubmit={handleSubmit}>
            <h2 className="text-white text-3xl mb-4 text-center font-semibold">Find century by year</h2>
            <input
              type="number"
              value={year}
              placeholder="year"
              onChange={(e) => setYear(e.target.value)}
              className="p-1 me-5"
            />
            <button
              type="submit"
              className="text-white border border-white rounded mt-10 px-6 py-1"
            >
              output
            </button>
            <p className="text-white mt-4 text-lg text-center">{output}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default FindCenturyByDate;
