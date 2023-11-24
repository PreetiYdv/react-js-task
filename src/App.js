import { Routes, Route, useNavigate } from "react-router";
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
import LocalStoragePrac from "./components/LocalStoragePrac";
import ToDo from './components/ToDo';
import SelectFilter from './components/SelectFilter';
import HoverEffcet from "./components/HoverEffcet";
import StarProgress from './components/StarProgress';

function App() {
  const Data = [1, 2, 3, 4, 5];
  const navigate = useNavigate()
  const handleLogOut =()=>{
    localStorage.removeItem("isLogin" ,false);
    // localStorage.setItem("isLogin", "false");
  }
  const handleLogin =()=>{
    navigate('/local-storage')
    // localStorage.setItem("isLogin", "false");
  }
  return (
    <>
        {/* <div className="flex gap-5 bg-black">
          {localStorage.getItem("isLogin") ? 
          <button onClick={handleLogOut} 
          className="border py-1 px-4 text-lg text-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl"
          >Log Out</button>
            : <button onClick={handleLogin} 
            className="border py-1 px-4 text-lg text-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl">
              Log in</button>
          }
        </div>  */}
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
        <Route path="/local-storage" element={<LocalStoragePrac />}></Route>
        <Route path="/to-do" element={<ToDo />}></Route>
        <Route path="/select-filter" element={<SelectFilter />}></Route>
        <Route path="/hover-effect" element={<HoverEffcet />}></Route>
        <Route path="/star-progress" element={<StarProgress />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
