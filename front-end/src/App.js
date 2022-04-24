import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/home";
import Navbar from './components/Navbar';

import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";

import CreateChecklist from "./components/CreateChecklist";
import UpdateChecklist from "./components/UpdateChecklist";

import CreateCategory from "./components/CreateCategory";
import UpdateCategory from "./components/UpdateCategory";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/taskcreate" element={<CreateTask />} />
          <Route exact path="/taskupdate:id" element={<UpdateTask />} />
          <Route exact path="/checklistcreate" element={<CreateChecklist />} />
          <Route
            exact
            path="/checklistupdate:id"
            element={<UpdateChecklist />}
          />
          <Route exact path="/categorycreate" element={<CreateCategory />} />
          <Route exact path="/categoryupdate:id" element={<UpdateCategory />} />
        </Routes>
      </Router>
    </div>
  );
}
