import React, { useState } from "react";

const RangeExponentData = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [power, setPower] = useState("");
  const [data, setData] = useState([]);
  const r = [];
  function Exponent(start, end, power) {
    for (let index = start; index <= end; index++) {
      let output = 1;
      for (let i = 0; i < power; i++) {
        output *= index;
      }
      r.push(output);
    }
}
console.log(start);
  const handleSubmit = (e) => {
    setData(r);
    e.preventDefault();
  };
  Exponent(start, end, power);
  return (
    <>
      <section className=" h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center rounded-md border max-w-[600px] bg-white/5 backdrop-blur-md  gap-5 px-20 py-10">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                  placeholder="starting number"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />
                <input
                  type="text"
                  className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                  placeholder="end"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                />{" "}
              </div>
              <input
                type="text"
                className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                placeholder="power"
                value={power}
                onChange={(e) => setPower(e.target.value)}
              />

              <button
                type="submit"
                className="border py-1 px-4 text-lg text-white rounded-xl my-5"
              >
                Output
              </button>
              <div className="mt-5 flex  flex-wrap">
                {data.map((obj, i) => {
                  return (
                    <span className="text-white text-2xl" key={i}>
                      <span className="mx-2">{obj}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RangeExponentData;
