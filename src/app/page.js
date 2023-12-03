"use client"
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails"
import Cart from "./customer/components/Cart/Cart";
import Checkout from './customer/components/Checkout/Checkout'
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
import CartItem from "./customer/components/Cart/CartItem";
export default function Home() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
     </Routes>
  </div>
  );
}
