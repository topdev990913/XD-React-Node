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
import Test from "./Components/Test";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />          
          {/* <Route exact path="/" element={<Test />} />           */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
