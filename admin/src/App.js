import React from "react"; // Don't forget to import React

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // Capitalize imported component name and import navbar
import Dashboard from "./pages/Dashboard"; // import dashboard
import Customers from "./pages/Customers"; // import customers
import Product from "./pages/Product";
import Managepro from "./pages/Managepro";
import Addproduct from "./pages/Addproduct";
import Managecus from "./pages/Managecus";
import Edit from "./pages/Edit";
import Addcustomer from "./pages/Addcustomer";
import Login from "./components/Login";
function App() {
  return (
    <>
      {/* <Login /> */}
      <Router>
        <Navbar /> {/* Use imported component */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Managepro" element={<Managepro />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Managecus" element={<Managecus />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Addcustomer" element={<Addcustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
