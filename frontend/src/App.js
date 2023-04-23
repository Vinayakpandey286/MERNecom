import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import ProfileScreen from "./screen/ProfileScreen";
import ShippingScreen from "./screen/ShippingScreen";
import PaymentScreen from "./screen/PaymentScreen";
import PlaceOrderScreen from "./screen/PlaceOrderScreen";
import OrderScreen from "./screen/OrderScreen";
import UserListScreen from "./screen/UserListScreen";
import UserEditScreen from "./screen/UserEditScreen";
import ProductListScreen from "./screen/ProductListScreen";
import ProductEditScreen from "./screen/ProductEditScreen";
import OrderListScreen from "./screen/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/order/:id" element={<OrderScreen />}>
              {" "}
            </Route>
            <Route path="/shipping" element={<ShippingScreen />}>
              {" "}
            </Route>
            <Route path="/payment" element={<PaymentScreen />}>
              {" "}
            </Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}>
              {" "}
            </Route>
            <Route path="/login" element={<LoginScreen />}>
              {" "}
            </Route>
            <Route path="/register" element={<RegisterScreen />}>
              {" "}
            </Route>
            <Route path="/profile" element={<ProfileScreen />}>
              {" "}
            </Route>
            <Route path="/product/:id" element={<ProductScreen />}>
              {" "}
            </Route>
            <Route path="/cart/:id?" element={<CartScreen />}>
              {" "}
            </Route>
            <Route path="/admin/userlist" element={<UserListScreen />}>
              {" "}
            </Route>
            <Route path="/admin/userlist/:id/edit" element={<UserEditScreen />}>
              {" "}
            </Route>
            <Route path="/admin/productlist" element={<ProductListScreen />}>
              {" "}
            </Route>
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            >
              {" "}
            </Route>
            <Route path="/admin/orderlist" element={<OrderListScreen />}>
              {" "}
            </Route>
            <Route exact path="/" element={<HomeScreen />}>
              {" "}
            </Route>
            <Route exact path="/*" element={<h1>404 Page Not Found</h1>}>
              {" "}
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
