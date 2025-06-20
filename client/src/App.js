import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Medicine from "./medicine/Medicine";
import Contact from "./contact/Contact";
// import Profile from "./profile/Profile";

// import Register from "./login_logout/Register";
import Logout from "./logout/Logout";
import Shopping from "./shopping/Shopping";
import Footer from "./footer/Footer";
import Login from "./login_logout/Login";


// import "bootstrap/dist/bootstrap.min.css";
function App() {
  const [product, setProduct] = useState([
    {
      url: "pro1.jpg",
      pname: "Himalaya",
      price: "1000",
    },
    {
      url: "pro2.jpg",
      pname: "Patanjali Ayurved",
      price: "2000",
    },
    {
      url: "pro3.jpg",
      pname: "Dolo Tablet",
      price: "170",
    },
    {
      url: "pro4.jpg",
      pname: "Soframycin",
      price: "180",
    },
    {
      url: "pro5.jpg",
      pname: "Hansaplast",
      price: "190",
    },
    {
      url: "pro6.jpg",
      pname: "Himalaya",
      price: "200",
    },
    {
      url: "pro7.jpg",
      pname: "Littloo",
      price: "210",
    },
    {
      url: "pro8.jpg",
      pname: "Digeplex Syrup",
      price: "220",
    },
  ]);

  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };
  return (
    <>
      <Router>
        <Navbar count={cart.length} />
        

        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/medicine"
            element={<Medicine product={product} addToCart={addToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/Register" element={<Register />} /> */}
          <Route path="/shopping" element={<Shopping cart={cart} />} />
          <Route path="/logout" element={<Logout />} />
         
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
