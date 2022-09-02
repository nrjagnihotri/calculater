
import './App.css';
import Calc from './components/Calc';
import Examp from './components/Examp';
import AddData from './components/AddData';
import Factonum from './components/Factonum';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fact" element={<Factonum />} />
                <Route path="/calc" element={<Calc />} />
                <Route path="/add" element={<AddData />} />
            </Routes>

        </div>
    );
}

export default App;
