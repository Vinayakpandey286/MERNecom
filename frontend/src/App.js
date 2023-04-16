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
import ProfileScreen from './screen/ProfileScreen'
import ShippingScreen from './screen/ShippingScreen'
import PaymentScreen from './screen/PaymentScreen'
import PlaceOrderScreen from './screen/PlaceOrderScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Routes>
          <Route path="/shipping" element={<ShippingScreen/>}> </Route>
          <Route path="/payment" element={<PaymentScreen/>}> </Route>
          <Route path="/placeorder" element={<PlaceOrderScreen/>}> </Route>
          <Route path="/login" element={<LoginScreen/>}> </Route>
          <Route path="/register" element={<RegisterScreen/>}> </Route>
          <Route path="/profile" element={<ProfileScreen/>}> </Route>
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