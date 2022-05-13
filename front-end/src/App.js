import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";

import CreateChecklist from "./components/CreateChecklist";
import UpdateChecklist from "./components/UpdateChecklist";

import CreateCategory from "./components/CreateCategory";
import UpdateCategory from "./components/UpdateCategory";
import Checklist from "./page/Checklist";
import TaskList from "./page/TaskList";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes className="container">
          <Route path="/" element={<TaskList />} />
          <Route path="/taskcreate" element={<CreateTask />} />
          <Route path="/taskupdate:id" element={<UpdateTask />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/checklistcreate:id" element={<CreateChecklist />} />
          <Route path="/checklistupdate:id" element={<UpdateChecklist />}/>
          <Route path="/categorycreate" element={<CreateCategory />} />
          <Route path="/categoryupdate:id" element={<UpdateCategory />} />
        </Routes>
      </Router>
    </div>
  );
}
