import { Routes, Route } from "react-router";
import "./App.css";
import First from "./components/First";
import FormPrac from "./components/FormPrac";
import Content from "./components/Content";
import RangeExponentData from "./components/RangeExponentData";
import SeriesFunction from "./components/SeriesFunction";
import SumFuncWithCondition from "./components/SumFuncWithCondition";
import FindCenturyByDate from "./components/FindCenturyByDate";
import FindVowel from "./components/FindVowel";
import IncludeMethod from "./components/IncludeMethod";
import FilterMethod from './components/FilterMethod';
import ArrayMethods from "./components/ArrayMethods";

function App() {
  const Data = [1, 2, 3, 4, 5];
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/first" element={<First data={Data} />}></Route>
        <Route path="/form-practice" element={<FormPrac />}></Route>
        <Route
          path="/range-exponent-data"
          element={<RangeExponentData />}
        ></Route>
        <Route path="/series-function" element={<SeriesFunction />}></Route>
        <Route
          path="/sum-function-with-condition"
          element={<SumFuncWithCondition />}
        ></Route>
        <Route
          path="/find-century-by-date"
          element={<FindCenturyByDate />}
        ></Route>
        <Route path="/find-vowels" element={<FindVowel />}></Route>
        <Route path="/include-method" element={<IncludeMethod />}></Route>
        <Route path="/filter-method" element={<FilterMethod />}></Route>
        <Route path="/array-method" element={<ArrayMethods />}></Route>
      </Routes>
    </div>
  );
}

export default App;
