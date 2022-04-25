import React, { useState } from "react";
import Category from "../page/Category";

export default function CreateCategory() {

  const [category_name, setCategory_name] = useState();
  const [image_url, setImage_url] = useState();

  const Submit = (event) => {
    event.preventDefault();
    let data = {
      category_name: category_name,
      image_url: image_url,
    };
    fetch("http://localhost:8080/category/create", {
      method: "POST",
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
      <form onSubmit={Submit}>
        <h1>Create Category</h1>
        <hr />
        <label>Category Name :</label>
        <input type="text" placeholder="Category Name" onChange={(e) => setCategory_name(e.target.value)} />
        <br />
        <label>Image URL :</label>
        <input type="text" placeholder="Image URL" onChange={(e) => setImage_url(e.target.value)}/>
        <br />
        <button className="submit" type="submit">Add Category</button>
      </form>
      <Category />
    </div>
  );
}
