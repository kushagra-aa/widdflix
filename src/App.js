import React, { useState } from "react";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  window.addEventListener("load", () => setLoading(false));
  return loading ? (
    <Spinner loading={loading} loader={"grid"} />
  ) : (
    <>
      <TopBar />
      <SideBar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
