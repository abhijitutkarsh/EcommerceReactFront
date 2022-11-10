import React ,{useState,useEffect} from "react"
import '../App.css';
import Item from "./item";
import HeaderHome from "./Partials/HeaderHome";
import './Home.css'




function Home(props)
{
 

  
 const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(()=>{
   getProducts();
  },[]);

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

  // const [cartCount, setCartCount] = useState('0')

 function getProducts(){

    fetch("https://ecommerce370000.herokuapp.com/product")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        // console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )


  return;
}



  if (error) {
    return <div><h1>Server is down</h1></div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <>

        <HeaderHome sess={props.sess} cartCount={props.cartCount} setCartCount={props.setCartCount}/>

      <form onSubmit={load}>
       {items.map((todo,index) => (
         <Item name={todo.name} thumbnail={todo.thumbnail} _id={todo._id} category={todo.category} price={todo.price} rating = {todo.rating} key={index} sess={props.sess}
         cartCount={props.cartCount} setCartCount={props.setCartCount} />
         ))}

       	{children.map((t, i)=>{
           return t.map((todo,index)=>{
             return <Item name={todo.name} thumbnail={todo.thumbnail} _id={todo._id} category={todo.category} price={todo.price} rating = {todo.rating} key={index} sess={props.sess}
             cartCount={props.cartCount} setCartCount={props.setCartCount} />
            })
          })}
          <button type="submit">Load More</button>
          </form>
      </>
    );
  }}

export default Home;
