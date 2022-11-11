import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function Item(todo) {
  const ratingTime = (x) => {
    let content = [];
    let val = 5 - x;
    for (let i = 0; i < x - 1; i++) {
      // const item = animals[i];
      content.push(<i className="fa fa-star star"></i>);
    }
    if (val < 1) content.push(<i className="fa fa-star-half star"></i>);
    else content.push(<i className="fa fa-star star"></i>);

    return content;
  };

  function addCart() {
    todo.setCartCount(todo.cartCount+1)
    console.log(todo.sess.user.email);
    var body = {
      "email": todo.sess.user.email,
      "cartId": todo._id
    }
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
  }
let Navigate = useNavigate();
let {} = useParams();
  return (
    <div className="column">
      {/* <form onClick={addCart}> */}
        <br />
        <div className="row">
          <div className="col-md-4 mt-2">
            <div className="card">
              <div className="card-body">
                <div className="card-img-actions">
                 <img
                    src={todo.thumbnail}
                    className="card-img img-fluid"
                    width="96"
                    height="350"
                    alt=""
                    onClick={()=>{
                      Navigate(`/productDetail/${todo._id}`,{state:{todo: todo}})
                    }}
                  />
                 
                </div>
              </div>

              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="/" className="text-default mb-2" data-abc="true">
                      {todo.name}
                    </a>
                  </h6>

                  <a href="/" className="text-muted" data-abc="true">
                    {todo.category}
                  </a>
                </div>

                <h3 className="mb-0 font-weight-semibold">${todo.price}</h3>

                <div>{ratingTime(todo.rating)}</div>

                <div className="text-muted mb-3">{todo.rating} Ratings</div>

                <button type="button" className="btn bg-cart" onClick={addCart}>
                  <i className="fa fa-cart-plus mr-2"></i>{" "}
                  <h5 className="font-weight-semibold mb-2">Add to cart</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      {/* </form> */}
    </div>
  );
}

export default Item;
