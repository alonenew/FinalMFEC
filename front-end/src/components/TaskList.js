import React from "react";
import { Component } from "react";

class TaskList extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <form>
                    <h1>TaskList</h1>
                    <label>Task Name :</label>
                    <input type="text" placeholder="TaskName" />
                    <label>Category ID :</label>
                    <input type="number" placeholder="Category ID"/><br />
                    <label>Start Date :</label>
                    <input type="date"  />
                    <label>Due Date :</label>
                    <input type="date"  /><br />
                    <label>Note :</label>
                    <input type="text" placeholder="Note" />
                    <label>Status :</label>
                    <input type="select" placeholder="Status" /><br />
                </form>
            </div>
        );
    }
}
 
export default TaskList;