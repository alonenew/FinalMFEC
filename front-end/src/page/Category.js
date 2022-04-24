import React from "react";

import CategoryAPI from "../API/CategoryAPI";

export default function Category() {

  const dataCategory = CategoryAPI();

  const UpdateCategory = (category_id) => {
    window.location = "/categoryUpdate" + category_id;
  };

  const DeleteCategory = (category_id) => {
    let data = {
      category_id: category_id,
    };
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/category/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result["description"] === "SUCCESS") {
          window.location.href = "/";
        }
      });
  };

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
              <th>Update</th>
              <th>Delete</th>
            </tr>
            {dataCategory.map((category) => (
              <tr key={category.category_id}>
                <td>{category.category_id}</td>
                <td>{category.category_name}</td>
                <td>{category.image_url}</td>
                <td>
                  <button
                    className="update"
                    onClick={() => UpdateCategory(category.category_id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="delete"
                    onClick={() => DeleteCategory(category.category_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
