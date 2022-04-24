import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import CreateTask from "./components/CreateTask";
import CreateChecklist from "./components/CreateChecklist";
import Home from "./page/home";
import UpdateTask from "./components/UpdateTask"
import UpdateChecklist from "./components/UpdateChecklist"



export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/taskcreate" element={<CreateTask />} />
          <Route exact path="/taskupdate:id" element={<UpdateTask />} />
          <Route exact path="/checklistcreate" element={<CreateChecklist />} />
          <Route exact path="/checklistupdate:id" element={<UpdateChecklist />} />
        </Routes>
      </div>
    </Router>
  );
}
