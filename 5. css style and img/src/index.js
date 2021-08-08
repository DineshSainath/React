import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img
      className="food-img"
      alt="poutine"
      src="https://pyxis.nymag.com/v1/imgs/8e4/eb8/d132ecdb64c7beb1835d94213e5a38bfc0-04-mcpoutine.rsquare.w700.jpg"
    ></img>
    <img
      className="food-img"
      alt="shawarma"
      src="https://www.thechunkychef.com/wp-content/uploads/2021/03/Chicken-Shawarma-recipe-card.jpg"
    ></img>
    <img
      className="food-img"
      alt="biriyani"
      src="https://qph.fs.quoracdn.net/main-qimg-2f17b9ded31d26b0c23f28b470d721aa"
    ></img>
  </div>,
  document.getElementById("root")
);
