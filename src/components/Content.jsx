import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="flex flex-wrap gap-3">
        <div>
          <Link
            to="/first"
            className="border-2 rounded-md border-white bg-transparent text-white w-full px-4 py-3"
          >
            First
          </Link>
        </div>
        <div>
          <Link
            to="/form-practice"
            className="border-2 rounded-md border-white bg-transparent text-white w-full px-4 py-3"
          >
            Form
          </Link>
        </div>
        <div>
          <Link
            to="/range-exponent-data"
            className="border-2 rounded-md border-white bg-transparent text-white w-full px-4 py-3"
          >
            range-exponent-data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
