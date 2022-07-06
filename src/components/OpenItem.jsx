import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ItemListFilter from "./Main";
import Cart from "./Cart";

function OpenItem(props) {
  const v = useContext(ItemListFilter);
  // if (props.state.openItem[0]) {
  console.log(props.state.openItem[0].category);
  const handleClick = () => {
    v(props.state.openItem[0].category);
  };
  const AddToCart = () => {
    // <Cart item={props} />;
    console.log("sfsg");
  };
  return (
    <div className="container">
      <div className="openItem">
        <img src={props.state.openItem[0].image} />
        <span>{props.state.openItem[0].title}</span>
        <span>{props.state.openItem[0].price}</span>
        <span>{props.state.openItem[0].description}</span>
      </div>
      <Link to="/itemslist">
        <button className="btn" onClick={handleClick}>
          Back to ItemsList
        </button>
      </Link>
      <button className="btnbuy" onClick={AddToCart}>
        Add
      </button>
    </div>
  );
}
// }

export default OpenItem;
