import React, { Component } from "react";

import TaskList from "./TaskList";
export default class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <TaskList />
      </div>
    );
  }
}
