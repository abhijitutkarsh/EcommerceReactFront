import Home from './Components/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/signUp/signUp'
import react,{useEffect, useState} from 'react';
import HeaderHome from './Components/Partials/HeaderHome';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './Components/cart/Cart';
import ProductDetails from './Components/productDetail/ProductDetails';
import PageNotFound from './Components/ErrorPages/pageNotFound';
import PleaseVerify from './Components/ErrorPages/PleaseVerify';
import NewPassword from './Components/newPass/NewPassword';

function App() {

  var [sess,setSess] = useState({});
  useEffect(() => {
    fetch("https://ecommerce370000.herokuapp.com/login", { credentials: "include" })
      // .then(res => res.json())
      .then((response) => response.json())
      .then((data) => {
        if (data.isLoggedIn === true) 
      { 
        // session = data
        setSess(data)
      }
        else
        {
          // session = {isLoggedIn: false}
          setSess({isLoggedIn: false})

        }

        // else
  console.log(data)

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [cartCount, setCartCount] = useState(0)
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // function getProducts(){
 useEffect(()=>{
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

 },[])
     
 
  //  return;
//  }

  return (


    <div className="App">


      		 <Router>
    {/* <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/signup">Signup</Link>

     
    </div> */}
        <HeaderHome sess={sess} cartCount={cartCount} setCartCount={setCartCount}/>

    <Routes>
      {/* Exact match to avoid 
          overriding other routes */}
      <Route exact path="/" element={<Home error={error} isLoaded={isLoaded} items = {items} sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
     
      <Route path="/login" element = {<Login sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/signup" element = {<SignUp sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/cart" element = {<Cart sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/productDetail/:productId" element ={<ProductDetails items ={items} sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
          {/* add 404 page  */}

      <Route path="*" element = {<PageNotFound/>} />
      <Route path = "/pleaseVerify" element={<PleaseVerify sess={sess} />}/>
      <Route path = "/newPassword" element={<NewPassword />}/>

    </Routes>
  </Router>
    </div>
  );
}

export default App;
