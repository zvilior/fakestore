import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemListFilter } from "./Main";
import axios from "axios";

function Categories(props) {
  const user = JSON.parse(localStorage.user);
  console.log(user);
  const customerName = user.firstName;

  const [Data, setData] = useState([]);
  useEffect(getitems, []);

  function getitems() {
    axios.get("https://fakestoreapi.com/products/categories").then((result) => {
      setData(result.data);
    });
  }
  if (!Data) return "loading";

  const CategoriesNames = Data.filter((v, i, c) => c.indexOf(v) === i);

  return (
    <>
      <h1 className="categoriesheader">
        {customerName} welcome to my fake-stor
      </h1>
      <h3 className="categories1">please choose category</h3>
      <div className="categories">
        {CategoriesNames?.map((v) => (
          <Category key={v} item={v} />
        ))}
      </div>
    </>
  );
}

function Category(props) {
  const v = useContext(ItemListFilter);

  const handleClick = () => {
    v(props.item);
  };
  return (
    <Link to="/itemslist">
      <div className="category" onClick={handleClick}>
        {props.item}
      </div>
    </Link>
  );
}

export default Categories;
