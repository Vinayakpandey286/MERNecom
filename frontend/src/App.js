import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Routes>
          <Route path="/login" element={<LoginScreen/>}> </Route>
          <Route path="/register" element={<RegisterScreen/>}> </Route>
          <Route path="/product/:id" element={<ProductScreen/>}> </Route>
          <Route path="/cart/:id?" element={<CartScreen/>}> </Route>
          <Route exact path="/" element={<HomeScreen/>}> </Route>
        </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
