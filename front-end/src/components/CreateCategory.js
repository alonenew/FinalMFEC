import React, { useState } from "react";
import Category from "../page/Category";

export default function CreateCategory() {
  const [category_name, setCategory_name] = useState();
  const [image_url, setImage_url] = useState();
  const [icon_url, setIcon_Url] = useState();
  const BASE_URL = "http://localhost:8080";
  const Submit = (event) => {
    event.preventDefault();
    let data = {
      category_name: category_name,
      image_url: image_url,
      icon_url: icon_url,
    };
    fetch(BASE_URL+"/category/create", {
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
      
      <div className="form">
        <form onSubmit={Submit}>
          <h1>Create Category</h1>
          <hr />
          <div style={{margin: "0 20px"}}>
          <label>Icon URL :</label>
          <input
            type="text"
            placeholder="Icon URL"
            onChange={(e) => setIcon_Url(e.target.value)}
          />
          <br />
          <label>Category Name :</label>
          <input
            type="text"
            placeholder="Category Name"
            onChange={(e) => setCategory_name(e.target.value)}
          />
          <br />
          <label>Image URL :</label>
          <input
            type="text"
            placeholder="Image URL"
            onChange={(e) => setImage_url(e.target.value)}
          />
          </div>
          <button className="submit" type="submit">
            Add Category
          </button>
        </form>
      </div>
      <Category />
    </div>
  );
}
