
import React from 'react';

import "./App.css";
import Category from "./components/Category";
import Checklist from "./components/Checklist";
import TaskList from "./components/TaskList";

export default function App() {

  return (  
    <div className="App">
      <TaskList />
      <Checklist />
      <Category />
    </div>
  );
}
