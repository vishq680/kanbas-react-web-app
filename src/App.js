import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Project from "./project";


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="project" />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;

