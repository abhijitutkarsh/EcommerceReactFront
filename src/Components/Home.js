import React ,{useState,useEffect} from "react"
import '../App.css';
import Item from "./item";
import HeaderHome from "./Partials/HeaderHome";
import './Home.css'




function Home(props)
{
 

  
 

  // useEffect(()=>{
  //  getProducts();
  // },[]);

  // var [sess,setSess] = useState({});
  // useEffect(() => {
  //   fetch("http://localhost:3001/login", { credentials: "include" })
  //     // .then(res => res.json())
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.isLoggedIn === true) 
  //     { 
  //       // session = data
  //       setSess(data)
  //     }
  //       else
  //       {
  //         // session = {isLoggedIn: false}
  //         setSess({isLoggedIn: false})
  //       }

  //       // else
  // console.log(data)

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);


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
    fetch('https://ecommerce370000.herokuapp.com/product', {
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
    return (<div class="loading-container">
    <div class="loading"></div>
    <div id="loading-text">loading</div>
</div>)
  } else {

    return (
      <>



        <h1 id="quote" ><div class="offset-header">
  <h1 class="hero-header">
    {/* <span class="offset-header offset-header-odd"><span>Elevate your space</span></span> */}
    <span class="offset-header offset-header-even"><span><b>Your<br/> First Choice</b></span></span>
  </h1>
</div></h1>
  

      <form onSubmit={load}>
<span class="anima anima-even"><span>
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
         <div id="divloadmore"> <button type="submit" id="loadMore">Load More</button></div>
  </span></span>
          </form>

      </>
    );
  }}

export default Home;
