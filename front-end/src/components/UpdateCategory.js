import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Category from "../page/Category";

export default function UpdateCategory() {
  const [category_name, setCategory_Name] = useState("");
  const [image_url, setImage_url] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/category/search/" + id)
      .then((res) => res.json())
      .then((result) => {
        setCategory_Name(result.data.category_name);
        setImage_url(result.data.image_url);
      });
      
  }, [id]);

  

  const Submit = () => {
    var data = {
      'category_id': id,
      'category_name': category_name,
      'image_url': image_url,
    };
    fetch("http://localhost:8080/category/update", {
      method: "PATCH",
      headers: {
        Accept: "application/form-data",
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
        <h1>Update Category</h1>
        <label>Category Name :</label>
        <input type="text" placeholder="Category Name" value={category_name} onChange={(e) => setCategory_Name(e.target.value)} />
        <br />
        <label>Image URL :</label>
        <input type="text" placeholder="Image URL" value={image_url} onChange={(e) => setImage_url(e.target.value)}/>
        <br />
        <button type="submit">Update</button>
      </form>
      <Category />
    </div>
  );
}
