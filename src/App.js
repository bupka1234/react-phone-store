import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
