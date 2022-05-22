import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Burgers from "./pages/Burgers.js";
import Frites from "./pages/Frites.js";
import About from "./pages/About.js";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/menu/burgers" element={<Burgers/>}/>
        <Route path="/menu/frites" element={<Frites/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;