import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Route, Routes } from "react-router-dom";
function App() {
  // const [cart, setCart] = useState([]);

  return (
    <>
      {/* <h1>Vaishali</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        
          
      
      </Routes>
    </>
  );
}

export default App;
