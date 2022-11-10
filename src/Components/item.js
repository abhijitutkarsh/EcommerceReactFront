import React from "react";

function Item(todo) {
  const ratingTime = (x) => {
    let content = [];
    let val = 5 - x;
    for (let i = 0; i < x - 1; i++) {
      // const item = animals[i];
      content.push(<i class="fa fa-star star"></i>);
    }
    if (val < 1) content.push(<i class="fa fa-star-half star"></i>);
    else content.push(<i class="fa fa-star star"></i>);

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

  return (
    <div className="column">
      {/* <form onClick={addCart}> */}
        <br />
        <div class="row">
          <div class="col-md-4 mt-2">
            <div class="card">
              <div class="card-body">
                <div class="card-img-actions">
                  <img
                    src={todo.thumbnail}
                    class="card-img img-fluid"
                    width="96"
                    height="350"
                    alt=""
                  />
                </div>
              </div>

              <div class="card-body bg-light text-center">
                <div class="mb-2">
                  <h6 class="font-weight-semibold mb-2">
                    <a href="/" class="text-default mb-2" data-abc="true">
                      {todo.name}
                    </a>
                  </h6>

                  <a href="/" class="text-muted" data-abc="true">
                    {todo.category}
                  </a>
                </div>

                <h3 class="mb-0 font-weight-semibold">${todo.price}</h3>

                <div>{ratingTime(todo.rating)}</div>

                <div class="text-muted mb-3">{todo.rating} Ratings</div>

                <button type="button" class="btn bg-cart" onClick={addCart}>
                  <i class="fa fa-cart-plus mr-2"></i>{" "}
                  <h5 class="font-weight-semibold mb-2">Add to cart</h5>
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
