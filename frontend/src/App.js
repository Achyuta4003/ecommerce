import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './component/layout/Header/Header';
import WebFont from "webfontloader";
import { useEffect, useState } from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import { loadUser } from './actions/userAction';
import store from "./store";
import { useSelector } from 'react-redux';
import UserOptions from './component/layout/Header/UserOptions';
import Profile from './component/User/Profile';
import ProtectedRoute from './component/Route/ProctectedRoute';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import axios from 'axios';
import Payment from './component/Cart/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from './component/Admin/Dashboard';
import ProductList from './component/Admin/ProductList';
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OderList from './component/Admin/OderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UserList from './component/Admin/UserList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
import Contact from './component/layout/Contact/Contact';
import About from './component/layout/About/About';
import NotFound from './component/layout/NotFound/NotFound';


function App() {

  const { user, isAuthenticated } = useSelector(state => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }


  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })

    store.dispatch(loadUser());

    getStripeApiKey()
  }, [])

  window.addEventListener("contextmenu", (e) => e.preventDefault());


  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route path='/process/payment' element={<ProtectedRoute Component={Payment} />} />
          </Routes>
        </Elements>
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<LoginSignUp />} />

        <Route path='/account' element={<ProtectedRoute Component={Profile} />} />
        <Route path='/me/update' element={<ProtectedRoute Component={UpdateProfile} />} />
        <Route path='/password/update' element={<ProtectedRoute Component={UpdatePassword} />} />
        <Route path='/password/forgot' element={<ForgotPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping' element={<ProtectedRoute Component={Shipping} />} />
        <Route path='/order/confirm' element={<ProtectedRoute Component={ConfirmOrder} />} />
        <Route path='/success' element={<ProtectedRoute Component={OrderSuccess} />} />
        <Route path='/orders' element={<ProtectedRoute Component={MyOrders} />} />
        <Route path='/order/:id' element={<ProtectedRoute Component={OrderDetails} />} />
        <Route path='/admin/dashboard' element={<ProtectedRoute isAdmin={true} Component={Dashboard} />} />
        <Route path='/admin/products' element={<ProtectedRoute isAdmin={true} Component={ProductList} />} />
        <Route path='/admin/product' element={<ProtectedRoute isAdmin={true} Component={NewProduct} />} />
        <Route path='/admin/product/:id' element={<ProtectedRoute isAdmin={true} Component={UpdateProduct} />} />
        <Route path='/admin/orders' element={<ProtectedRoute isAdmin={true} Component={OderList} />} />
        <Route path='/admin/order/:id' element={<ProtectedRoute isAdmin={true} Component={ProcessOrder} />} />
        <Route path='/admin/users' element={<ProtectedRoute isAdmin={true} Component={UserList} />} />
        <Route path='/admin/user/:id' element={<ProtectedRoute isAdmin={true} Component={UpdateUser} />} />
        <Route path='/admin/reviews' element={<ProtectedRoute isAdmin={true} Component={ProductReviews} />} />




        <Route path='/*' element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
