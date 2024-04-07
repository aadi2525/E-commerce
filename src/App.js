import React from 'react';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from './Pages/CartPage';
import Checkout from './Pages/CheckOutPage';
import ProductDetailsPage from './Pages/ProductDetailPage';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/productdetails",
    element: <ProductDetailsPage/>,
  },
]);

function App() {
  return (
    <div className="App"> 
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
