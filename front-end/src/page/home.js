import React from "react";
import Category from "./Category";
import Checklist from "./Checklist";
import TaskList from "./TaskList";

export default function Home() {
  return (
    <div>
      <TaskList />
      <Checklist />
      <Category />
    </div>
  );
}
