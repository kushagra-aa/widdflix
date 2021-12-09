import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <Home></Home>
      </main>
    </>
  );
}

export default App;
