import React from "react";

import CategoryAPI from "../API/CategoryAPI";

export default function Category() {

  const dataCategory = CategoryAPI();

  return (
    <div>
      <div className="containers">
      <header>
          <div></div>
          <h1>Category</h1>
          <div></div>
        </header>
        <table className="tabletask">
          <tbody>
            <tr>
              <th width="80px">ID</th>
              <th width="100px">Icon</th>           
              <th>Category Name</th>
              <th width="auto">Image URL</th>
            </tr>
            {dataCategory.map((category) => (
              <tr key={category.category_id}>
                <td>{category.category_id}</td>
                <td ><img src={category.icon_url} height="100px" width="auto" alt="iconURL" /></td>
                <td>{category.category_name}</td>
                <td><img src={category.image_url} height="100px" width="auto" alt="imageURL" /> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
