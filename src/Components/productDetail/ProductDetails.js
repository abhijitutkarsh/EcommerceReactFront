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
  
    fetch('https://ecommerce370000.herokuapp.com/productid',{
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
<div class="con">
    <div class="box one">
      <div class="details">
        <div class="topic">{productDetail.description}</div>
          <p>Category: {productDetail.category}</p>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
          <div class="price-box">
            {/* <div class="discount">₹ </div> */}
            <div class="price">₹ {productDetail.price}</div>
          </div>
      </div>
      <div class="button1">
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
    <div class="box two">
      <div class="image-box">
        <div class="image">
          <img src={data} alt=""/>
        </div>
        <div class="info">
          <div class="brand">{productDetail.brand}</div>
          <div class="name">{productDetail.name}</div>
          <div class="shipping">SHIPPING COST ₹ 500</div>
          <div class="button2">
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