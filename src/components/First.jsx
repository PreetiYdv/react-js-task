import React, { useState } from "react";
import Second from "./Second";
import Third from "./Third";

const First = ({ data }) => {
  const [name, setName] = useState(true)

  const myArray = [
    {
      name: "Preeti",
      sub:[ "Science","eng"],
    },
    {
      name: "Preeti",
      sub:[ "Science","eng"],
    },
    {
      name: "Preeti",
      sub:[ "Science","eng"],
    },
  ];
  return (
    <>
      <div>
        <Second data={data} />
        <Third myArray={myArray} />
        <button className="rounded-full bg-green-500 text-white py-1 px-5" onClick={()=>setName(!name)}>click</button>
        <p className="p-2">{name?'Palvi':'muskan'} </p>
      </div>
    </>
  );
};

export default First;
