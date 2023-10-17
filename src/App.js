import './App.css';
import First from './components/First';

function App() {
  const Data = [1,2,3,4,5]
  return (
    <div className="container mx-auto px-3">
     <First data={Data} />
    </div>
  );
}

export default App;
