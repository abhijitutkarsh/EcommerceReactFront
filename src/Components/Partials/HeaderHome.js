import React, { useState, useEffect } from "react";
import "./HeaderHome.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Img from '../assets/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


function HeaderHome(props) {
  var session ;
// var [sess,setSess] = useState({});
//   useEffect(() => {
//     fetch("http://localhost:3001/login", { credentials: "include" })
//       // .then(res => res.json())
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.isLoggedIn === true) 
//       { 
//         // session = data
//         setSess(data)
//       }
//         else
//         {
//           // session = {isLoggedIn: false}
//           setSess({isLoggedIn: false})
//         }

//         // else
//   console.log(data)

//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);


  // console.log(sess)
  function logout()
  {
    console.log("preesed")
    fetch('https://ecommercenode-8uip.onrender.com/logout',{credentials: "include"})
    .then(res => res.json())
    .then(
      (result) => {
        window.location.href = "/login"
      }
    ) .catch((err) => {
      console.log(err);
    })
  }


  var loginOrNot;
  if (props.sess.isLoggedIn)
    loginOrNot = <div onClick={logout} id="logout">Logout</div>;
  else loginOrNot = <Link to="/login">Login</Link>;

useEffect(()=>{
  if(props.sess.user)
  {
  var data = {email:props.sess.user.email}
  // var body = {"email": props.sess.user.email}
fetch('https://ecommerce370000.herokuapp.com/cartCount',{
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  credentials: "include",
})
.then(res => res.json())
.then(
  (result) => {
    // console.log(result)
    props.setCartCount(result)
    // cartCount = result;
  }
) .catch((err) => {
  console.log(err);
})}
},[props])


  return (
    <div className="head">

      <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet" />
      
      
      <Link to="/cart">
      <i className="fa badge fa-lg" id="carti" value={props.cartCount}>&#xf07a;</i>
      <FontAwesomeIcon icon={faCamera} id="carti1" />
      
      {/* <FontAwesomeIcon icon="fa-solid fa-camera" beatFade style={{color: "#e40733",}} /> */}
      </Link>
      {/* <i id="carti" className="fa fa-shopping-cart"></i> */}
      <h2 id="user1">MEN &nbsp;&nbsp;WOMEN&nbsp;&nbsp; KIDS</h2>
      <h2 id="user">
     
         {props.sess.isLoggedIn === true ? props.sess.user.username : ""} &nbsp;{loginOrNot}
    
      </h2>

      
      <span id="header">
        {/* <h2 id="user"> {session.loggedIn===true?"logout":"login"}</h2> */}
        {/* <h1 id ="nameinc"><b><Link to='/'>NOME</Link></b></h1> */}
        <img src={Img} style={{height: "60px", width: "150px", paddingTop: "10px", paddingLeft: "10px"}} />
        {/* <!-- <img src="/p"/> --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        
        {/* <a href="/logout">logout</a> */}

        <br></br>
      </span>

    </div>
  );
}

export default HeaderHome;
