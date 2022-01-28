import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Home toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
