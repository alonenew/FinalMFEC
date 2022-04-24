import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateTask />} />

          <Route exact path="/tasklist/update/:id" element={<UpdateTask />} />
        </Routes>
      </div>
    </Router>
  );
}
