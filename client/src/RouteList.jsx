// src/routes/RoutesList.js
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CustomerProfile from "./components/customer/CustomerProfile";
import CustomerDashboardLayout from "./layouts/CustomerDashboardLayout";
import CustomerOrders from "./components/customer/CustomerOrders";
import CustomerAddresses from "./components/customer/CustomerAddresses";
import CustomerWishlist from "./components/customer/CustomerWishlist";
import CustomerCart from "./components/customer/CustomerCart";
import CustomerSubscriptions from "./components/customer/CustomerSubscriptions";
import CustomerSupport from "./components/customer/CustomerSupport";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/primary/Sidebar";
import ScrollToTop from "./components/primary/ScrollToTop";
const RoutesList = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<ProductsPage />} />
      </Route>
      <Route path="/account" element={<CustomerDashboardLayout />} >
        <Route index element={<CustomerProfile />} />
        <Route path="/account/orders" element={<CustomerOrders />} />
        <Route path="/account/addresses" element={<CustomerAddresses />} />
        <Route path="/account/wishlist" element={<CustomerWishlist />} />
        <Route path="/account/cart" element={<CustomerCart />} />
        <Route path="/account/subscriptions" element={<CustomerSubscriptions />} />
        <Route path="/account/support" element={<CustomerSupport />} />

      </Route>
    </Routes>
  </>
);

export default RoutesList;