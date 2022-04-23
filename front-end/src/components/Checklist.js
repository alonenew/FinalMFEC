import React from "react";
import { Component } from "react";

class Checklist extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <form>
                    <h1>Checklist</h1>
                    <label>Todo Name :</label>
                    <input type="text" placeholder="Category Name" /><br />
                    <label>Task ID :</label>
                    <input type="number" placeholder="Task ID" /><br />
                    <label>Is Complete :</label>
                    <input type="number" placeholder="Is Complete"/><br />
                    <button type="submit">Add Checklist</button>
                </form>
            </div>
        );
    }
}
 
export default Checklist;