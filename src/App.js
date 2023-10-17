import { Routes, Route } from "react-router";
import "./App.css";
import First from "./components/First";
import FormPrac from "./components/FormPrac";
import Content from './components/Content';
import RangeExponentData from "./components/RangeExponentData";

function App() {
  const Data = [1, 2, 3, 4, 5];
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/first" element={<First data={Data} />}></Route>
        <Route path="/form-practice" element={<FormPrac />}></Route>
        <Route path="/range-exponent-data" element={<RangeExponentData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
