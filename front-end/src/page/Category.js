import React from "react";

import CategoryAPI from "../API/CategoryAPI";

export default function Category() {

  const dataCategory = CategoryAPI();

  return (
    <div>
      <div className="task">
        <h1>Category</h1>
        <hr />
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
                <td>{category.image_url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
