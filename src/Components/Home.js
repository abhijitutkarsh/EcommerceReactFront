import React ,{useState,useEffect} from "react"
import '../App.css';
import Item from "./item";
import HeaderHome from "./Partials/HeaderHome";
import './Home.css'
import {useNavigate} from 'react-router-dom'
import Img from './assets/img2.png'


function Home(props)
{
  const navigate = useNavigate();

  const [startFrom , setStartFrom] = useState(5);
  var limit = 5;
  const [children, setChildren] = useState([]);

  function load(e){
    // Incrementing the offset so you can get next records when that button is clicked
    e.preventDefault();
    setStartFrom(startFrom + limit);
    var data = {
      text: startFrom
    }
    // console.log(data.text)
    fetch('https://ecommercenode-8uip.onrender.com/product', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
         

            setChildren([...children,data])
            
            
          

          // Handle data
       })
       .catch((err) => {
          console.log(err.message);
       });
  }
  

  if (props.error) {
    return <div><h1>Server is down</h1></div>;
  } else if (!props.isLoaded) {
    return (<div className="loading-container">
    <div className="loading"></div>
    <div id="loading-text">loading</div>
</div>)
  } 
  else
  if(props.sess.user && props.sess.user.isVerified == false)
  navigate('/PleaseVerify')
  else
  
  {

    return (
      <>

<div style={{display: "flex" }}>

        <h1 id="quote" ><div className="offset-header">
  {/* <h1 className="hero-header">
     </h1> */}
</div></h1>
<img src={Img} className="move-2" alt="" style={{zIndex: '1', height: "500px", position: "relative", left: "10%" }} />
</div>
      <form onSubmit={load}>
<span className="anima anima-even"><span>
       {props.items.map((todo,index) => (
         <Item name={todo.name} thumbnail={todo.thumbnail} _id={todo._id} category={todo.category} price={todo.price} rating = {todo.rating} key={index} sess={props.sess}
         cartCount={props.cartCount} setCartCount={props.setCartCount} />
         ))}

       	{children.map((t, i)=>{
           return t.map((todo,index)=>{
             return <Item name={todo.name} thumbnail={todo.thumbnail} _id={todo._id} category={todo.category} price={todo.price} rating = {todo.rating} key={index} sess={props.sess}
             cartCount={props.cartCount} setCartCount={props.setCartCount} />
            })
          })}
         
  </span></span>
          </form>
          <div id="divloadmore"> <button type="submit" id="loadMore">Load More</button></div>

      </>
    );
  }}

export default Home;
