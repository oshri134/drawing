import logo from './logo.svg';
import './App.css';
import pic from "./assets/images/header.jpeg"
import Game from './pages/game/Game';
import Home from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
