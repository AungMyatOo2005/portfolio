import { useState } from "react";
import "./app.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./navbar/Navbar";
import Project from "./components/Project";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <div className={` min-h-screen w-full`}>
        <Router>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route index element={<Home isDarkMode={isDarkMode} />}></Route>
            <Route
              path="/about"
              element={<About isDarkMode={isDarkMode} />}
            ></Route>
            <Route
              path="/project"
              element={<Project isDarkMode={isDarkMode} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
