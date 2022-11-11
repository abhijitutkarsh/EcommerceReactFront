import React, { useEffect, useState } from "react";
import HeaderHome from "../Partials/HeaderHome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./Cart.css";
function Cart(props) {
  const [values, setValues] = useState([]);
  var [addVal, setAddVal] = useState(0);
  // const [subVal, setsubVal] = useState(0);

  useEffect(() => {
    console.log(1);
    if (props.sess.user) {
      // console.log(props.sess.user)
      var data = { email: props.sess.user.email };
      // var body = {"email": props.sess.user.email}
      fetch("https://ecommerce370000.herokuapp.com/cartData", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result)
          // cartCount = result;
          setValues(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props]);


  const count = [
    ...values.reduce((map, obj) => map.set(obj._id, obj), new Map()).values(),
  ];


  var quantity = (id) => {
    let num = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i]._id == id) num++;
    }
    return num;
  };

  // var add, subtract
  var total = 0 ;

  for(var i = 0 ; i < values.length ; i++)
  {
    total+= values[i].price;
  }

  if (props.sess.isLoggedIn == false) {
    window.location.href = "/login";
  }
  else
    return (
      <>
       
        <div className="cart transition is-open">
          <span class="offset-header offset-header-even"><span>
          <Link to="/" className="btn btn-update" id="update">
            Continue Shopping
          </Link>
            </span></span>

          <span class="leftanima leftanima-even"><span>
          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center ">Price</div>
              <div className="col col-qty align-center">QTY</div>
              <div className="col">VAT</div>
              <div className="col">Total</div>
            </div>

            {count.map((t, i) => {
              addVal=quantity(t._id)
              return(
              <div className="layout-inline row">
                <div className="col col-pro layout-inline">
                  <img src={t.thumbnail} alt="kitten" id="productImg" />
                  <p><b>{t.name}</b></p>
                </div>

                <div className="col col-price col-numeric align-center ">
                  <p>₹{t.price}</p>
                </div>

                <div className="col col-qty layout-inline">
                  <btn
                    className="qty qty-minus"
                    onClick={() => {
                      props.setCartCount(props.cartCount - 1);
                      // addVal+=1
                      // console.log(props.sess.user.email);
                      var body = {
                        cartId: t._id,
                      };
                      fetch("https://ecommerce370000.herokuapp.com/deletecart", {
                        method: "POST",
                        body: JSON.stringify(body),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8",
                        },
                        credentials: "include",
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          console.log(1);
                          // window.location.href = "/";
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    -
                  </btn>
                  <input
                    type="numeric"
                    value={addVal}
                    id="quantityVal"
                  />
                  <btn
                    className="qty qty-plus"
                    onClick={() => {
                      props.setCartCount(props.cartCount + 1);
                      console.log(props.sess.user.email);
                      var body = {
                        email: props.sess.user.email,
                        cartId: t._id,
                      };
                      fetch("https://ecommerce370000.herokuapp.com/cart", {
                        method: "POST",
                        body: JSON.stringify(body),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8",
                        },
                        credentials: "include",
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          console.log(1);
                          // window.location.href = "/";
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    +
                  </btn>
                </div>

                <div className="col col-vat col-numeric">
                  <p>0%</p>
                </div>
                <div className="col col-total col-numeric">
                  {" "}
                  <p> ₹{t.price * quantity(t._id)}</p>
                </div>
              </div>
            )})}

            <div className="tf">
              <div className="row layout-inline">
                <div className="col">
                  <p>Quantity</p>
                </div>
                <div className="col"><p>{props.cartCount}</p></div>
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Shipping</p>
                </div>
                <div className="col"><p>₹500</p></div>
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Total</p>
                </div>
                <div className="col"><p>₹{total+500}</p></div>
              </div>
            </div>
          </div>
          </span></span>
          <span class="offset-header offset-header-even"><span>

          <a href="#" className="btn btn-update" id="update">
            Checkout and Place order
          </a>
          </span></span>
        </div>
      </>
    );

}

export default Cart;
