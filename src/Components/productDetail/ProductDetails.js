import react,{useState,useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
import './productDetails.css'

function ProductDetails(props)
{

  const [data,setData] = useState()

  const [productDetail, setProductDetail] = useState([]);
  let productId = useParams()
  useEffect(()=>{
    console.log(productId)
  
    fetch('https://ecommercenode-8uip.onrender.com/productid',{
    method: "POST",
    body: JSON.stringify(productId),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    credentials: "include",
  })
  .then(res => res.json())
  .then(
    (result) => {
      // console.log(result)
      // props.setCartCount(result)
      // cartCount = result;
      setProductDetail(result[0])
  setData(productDetail.images[0])

    }
  ) .catch((err) => {
    console.log(err);
  })

  },[productId])
// console.log(productDetail)

 return (
<>
<div className="container">
<div className="con">
    <div className="box one">
      <div className="details">
        <div className="topic">{productDetail.description}</div>
          <p>Category: {productDetail.category}</p>
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
          <div className="price-box">
            {/* <div className="discount">₹ </div> */}
            <div className="price">₹ {productDetail.price}</div>
          </div>
      </div>
      <div className="button1">
        <button onClick={()=>{
          // console.log(props.sess.user.email)
          props.setCartCount(props.cartCount+1)

          var body = {
            "email": props.sess.user.email,
            "cartId": productId.productId
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
        }}>Add To Cart</button>
      </div>
    </div>
    <div className="box two">
      <div className="image-box">
        <div className="image">
          <img src={data} alt="data" />
        </div>
        <div className="info">
          <div className="brand">{productDetail.brand}</div>
          <div className="name">{productDetail.name}</div>
          <div className="shipping">SHIPPING COST ₹ 500</div>
          <div className="button2">
            {/* <button>Login For More</button> */}
          </div>
          <div id="mainImg">
    
        {productDetail.images?.map((val,i) => {
         return <img onMouseEnter={()=>
        {
          setData(val)
        }
        } key={i} src={val} alt="rff"/> 
        }
        
        )
      }
      

      
             
         </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
</>
 )   
}

export default ProductDetails;