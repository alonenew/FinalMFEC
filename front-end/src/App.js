import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import CreateChecklist from "./components/CreateChecklist";

import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateTask />} />
          <Route exact path="/taskupdate:id" element={<UpdateTask />} />
          <Route exact path="/checklist" element={<CreateChecklist />} />
          <Route exact path="/checklistUpdate"  />

        </Routes>
      </div>
    </Router>
  );
}
