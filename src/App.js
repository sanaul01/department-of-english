import './App.css';
import Home from './Components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import LiteraryCriticism from './Components/FourthYear/LiteraryCriticism/LiteraryCriticism';
import NineteenCenturyNovel from './Components/FourthYear/19thCenturyNovel/NineteenCenturyNovel';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/criticism" element={<LiteraryCriticism />} />
        <Route path="/19Novel" element={<NineteenCenturyNovel />} />
      </Routes>
    </div>
  );
}

export default App;
