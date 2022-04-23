import React from "react";
import { Component } from "react";

class Category extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <form>
                    <h1>Category</h1>
                    <label>Category Name :</label>
                    <input type="text" placeholder="Category Name" /><br />
                    <label>Image URL :</label>
                    <input type="text" placeholder="ImageURL"/><br />
                    <button type="submit">Add Category</button>
                </form>
            </div>
        );
    }
}
 
export default Category;