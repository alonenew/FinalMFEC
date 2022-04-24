import React, { Component } from 'react';

import Category from "./Category";
import Checklist from "./Checklist";
import TaskList from "./TaskList";
export default class Home extends Component {
  state = {  } 
  render() { 
    return (
      <div>
      <TaskList />
      <br />
      <Checklist />
    </div>
    );
  }
}
 
