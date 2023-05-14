import React, { useEffect, useState } from "react";
import "../../scss/navi.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export const Navi = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await axios("http://localhost:3100/categories");
    setCategories(response.data);
    console.log(response);
  };

  useEffect(() => {
    getCategories();
    console.log(categories);
  }, []);

  function slugify(str) {
    str = str.toLowerCase(); // Convert the string to lowercase
    str = str.replace(/\s+/g, "-"); // Replace spaces with dashes
    str = str.replace(/[^\w\-]+/g, ""); // Remove non-word characters except dashes
    return str;
  }

  return (
    <nav>
      <h3 path="/" className="brand"><a href="/">MS</a></h3>
      <ul className="">
        {categories.map((category) => (
          <li key={category.categoryId}><Link to={"/category/" + slugify(category.categoryTitle)} >
            {category.categoryTitle}
          </Link></li>
        ))}
      </ul>
      {/* <ul>
        {categories.map((category) => (
          //  JSON Fetches Category Titles to the Album
          <li key={category.categoryId}>
            <i onClick={() => setSelectedCategory(category.categoryId)}>
              {category.categoryTitle}
            </i>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};
export default Navi;
