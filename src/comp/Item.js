import React from "react";
import "./Item.css";
import { useState } from "react";
export const Item = ({ image, title, id, price, desc, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantitySelection = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  return (
    <div id="item_body">
      <div className="items">
        <div className="imgdiv">
          <img src={image} alt="img"></img>
          <div>
            <div className="des">
              <div className="detail_div">
                <h1 className="h_title">{title}</h1>
                {/* <p className='h'>2</p> */}
                <select
                  name=""
                  id=""
                  className="select_num"
                  value={quantity}
                  onChange={handleQuantitySelection}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <h1 className="h">{price * quantity}</h1>
              </div>
              <div className="detail_div2">
                <p>{desc}</p>
                <div>
                  <p>₹{Math.round((price * quantity) / 12)}/mo.^</p>
                  {/* <p onClick={() => Deletes(id)} style={{ color: "#0071e3" }}>
                    Remove
                  </p> */}
                </div>
              </div>
            </div>
            <div className="des2">
              <hr className="detail_sep"></hr>
              <div className="deliv_detail">
                <div className="order_detail">
                  <p>
                    <svg
                      viewBox="0 0 25 25"
                      class="as-svgicon as-svgicon-shipping as-svgicon-reduced as-svgicon-shippingreduced"
                      role="img"
                      aria-hidden="true"
                      width="25px"
                      height="25px"
                    >
                      <path d="m19.69 7.154-6-3.245a2.5 2.5 0 0 0-2.38 0l-6 3.245A2.5 2.5 0 0 0 4 9.354v6.269a2.5 2.5 0 0 0 1.311 2.2l6 3.245a2.5 2.5 0 0 0 2.379 0l6-3.245a2.5 2.5 0 0 0 1.31-2.2V9.354a2.5 2.5 0 0 0-1.31-2.2Zm-7.9-2.365a1.492 1.492 0 0 1 1.427 0l6 3.244a1.454 1.454 0 0 1 .151.11l-2.931 1.665-6.743-3.886ZM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 0 1 .151-.11ZM5.787 16.941A1.5 1.5 0 0 1 5 15.622V9.354a1.5 1.5 0 0 1 .053-.39L12 12.912v7.358a1.463 1.463 0 0 1-.213-.083ZM20 15.622a1.5 1.5 0 0 1-.786 1.319l-6 3.245a1.5 1.5 0 0 1-.214.084v-7.358l6.947-3.949a1.508 1.508 0 0 1 .053.391Z"></path>
                    </svg>
                    Order today.Delivers to
                  </p>
                  <p>
                    <span>Thu 28 Dec — Free</span>
                  </p>
                </div>
                <div className="order_detail">
                  <p>
                    <svg
                      viewBox="0 0 25 25"
                      class="as-svgicon as-svgicon-shipping as-svgicon-reduced as-svgicon-shippingreduced"
                      role="img"
                      aria-hidden="true"
                      width="25px"
                      height="25px"
                    >
                      <path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z"></path>
                      <path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z"></path>
                    </svg>
                    Order now. Pick up, in-store:
                  </p>
                  <p>
                    <span>Today at Apple Saket</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <hr className="hr1"></hr>
    </div>
  );
};
