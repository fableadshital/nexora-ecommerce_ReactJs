import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Products from "./Pages/Product";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Contact from "./Pages/Contact";
import Wishlist from "./Pages/Wishlist";
import Card from "./Pages/Card";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import ThankYou from "./Pages/ThankYou";
import ProductDetail from "./Pages/ProductDetail";
import HelpCenter from "./Pages/HelpCenter";
import Shipping from "./Pages/Shipping";
import Returns from "./Pages/Returns";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/success" element={<Success />} />
        <Route path="/thankyou" element={<ThankYou />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;