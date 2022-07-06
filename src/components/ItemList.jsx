import React, { useContext } from "react";
import { OpenItemFilter } from "./Main";
import { Link } from "react-router-dom";
import Cart from "./Cart";
function ItemList(props) {
  return (
    <div className="itemsList">
      {props.state.itemsList?.map((v) => (
        <Item item={v} />
      ))}
      <Link to="/cat">
        <button className="btn">Back to Categories</button>
      </Link>
    </div>
  );
}

export default ItemList;

function Item(props) {
  const v = useContext(OpenItemFilter);

  const handleClick = () => {
    v(props.item.title);
  };

  return (
    <div>
      <Link to="/OpenItem" onClick={handleClick}>
        <div className="itemInList">
          <img className="imginlist" src={props.item.image} />
          <br />
          <br />
          <span>{props.item.price}$</span>
          <br />
          <br />
          <br />
          <br />
          <div>{props.item.title}</div>
        </div>
      </Link>
    </div>
  );
}
