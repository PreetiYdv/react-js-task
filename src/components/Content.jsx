import React from "react";
import { Link } from "react-router-dom";
import { ContentData } from "./common/Helper";

const Content = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="flex flex-wrap gap-2">
        {ContentData.map((obj, i) => {
          const { title, link } = obj;
          return (
           <div  key={i}>
            <Link
              to={link}
              className="border-2 rounded-md border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-500 w-full px-4 py-3"
            >
              {title}
              </Link>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
