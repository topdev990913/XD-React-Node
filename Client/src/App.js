import React from "react";
import "./App.css";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Main from "./Components/Main";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
