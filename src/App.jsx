import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./sticky/Header";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Locations from "./pages/Locations";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Checkout from "./pages/checkout/Checkout";
import MobileHeader from "./sticky/MobileHeader";
import Cart from "./pages/Cart";
import LoginPlaceholder from "./pages/forgotPasswordModals/LoginPlaceholder"
import VerificationCode from "./pages/verifyAccount/VerificationCode";
import VerificationSuccess from "./pages/verifyAccount/VerificationSuccess";
import VerificationFailure from "./pages/verifyAccount/VerificationFailure";
import NotFound from "./pages/NotFound";
import Footer from "./sticky/Footer";
import ScrollToTopButton from "./pages/ScrollToTopButton";

const App = () => {
  const location = useLocation();
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  useEffect(() => {
    // Exclude header and footer for the login and signup pages
    if (location.pathname === '/login' || location.pathname === '/signup') {
      setShowHeaderFooter(false);
    } else {
      setShowHeaderFooter(true);
    }
  }, [location.pathname]);

  return (
    <>
      {showHeaderFooter && <Header />}
      {showHeaderFooter && <MobileHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Rent />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        {/* temporary Login Route */}
        <Route path="/login-placeholder" element={<LoginPlaceholder />} />
        <Route path="/verify-account" element={<VerificationCode />} />
        <Route path="/verification-success" element={<VerificationSuccess  />} />
        <Route path="/verification-failure" element={<VerificationFailure  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showHeaderFooter && <Footer />}
      <ScrollToTopButton />
    </>
  );
};

export default App;