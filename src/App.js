import Home from './Components/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/signUp/signUp'
import react,{useEffect, useState} from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './Components/cart/Cart';

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
  const [cartCount, setCartCount] = useState('0')


  return (
    <div className="App">
      		 <Router>
    {/* <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/signup">Signup</Link>

     
    </div> */}
    <Routes>
      {/* Exact match to avoid 
          overriding other routes */}
      <Route exact path="/" element={<Home sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
     
      <Route path="/login" element = {<Login sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/signup" element = {<SignUp sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      <Route path="/cart" element = {<Cart sess={sess} setSess={setSess} cartCount={cartCount} setCartCount={setCartCount}/>}/>
      

    </Routes>
  </Router>
    </div>
  );
}

export default App;
