import React from "react";

import CategoryAPI from "../API/CategoryAPI";

export default function Category() {

  const dataCategory = CategoryAPI();

  return (
    <div>
      <form>
        <h1>Category</h1>
        <label>Category Name :</label>
        <input type="text" placeholder="Category Name" />
        <br />
        <label>Image URL :</label>
        <input type="text" placeholder="ImageURL" />
        <br />
        <button type="submit">Add Category</button>
      </form>
      <div className="task">
        <table className="tabletask">
          <tbody>
            <tr>
              <th>Category ID</th>
              <th>Category Name</th>
              <th>Image URL</th>
            </tr>
            {dataCategory.map((category) => (
              <tr key={category.category_id}>
                <td>{category.category_id}</td>
                <td>{category.category_name}</td>
                <td>{category.iamge_url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
