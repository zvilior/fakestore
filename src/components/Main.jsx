import React, { createContext, useState, useEffect } from "react";
import Categories from "./Categories";
import OpenItem from "./OpenItem";
import ItemList from "./ItemList";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

export const ItemListFilter = createContext();
export const OpenItemFilter = createContext();

function Main() {
  const [Data, setData] = useState([]);
  const [requestedCategory, setRequestedcategory] = useState([]);
  const [requestedItem, setRequestedItem] = useState([]);

  useEffect(getitems, []);

  function getitems() {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setData(result.data);
      // console.log(Data);
    });
  }
  if (!Data) return "loading";

  const filterItemsList = Data.filter((a) => a.category === requestedCategory);
  const SpecificItem = Data.filter((a) => a.title === requestedItem);
  return (
    <div>
      <ItemListFilter.Provider value={setRequestedcategory}>
        <OpenItemFilter.Provider value={setRequestedItem}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/cat"
              element={<Categories state={{ categoryNames: Data }} />}
            />
            <Route
              path="/itemslist"
              element={<ItemList state={{ itemsList: filterItemsList }} />}
            />
            <Route
              path="/openitem"
              element={<OpenItem state={{ openItem: SpecificItem }} />}
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </OpenItemFilter.Provider>
      </ItemListFilter.Provider>
    </div>
  );
}
//
export default Main;
