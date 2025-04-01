import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Farmers from "./pages/Farmers";
import Products from "./pages/Products";
import Buyers from "./pages/Buyers";
import Policymakers from "./pages/Policymakers";
import { AppProvider } from "./context/AppContext";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import FarmerProfile from "./pages/FarmerProfile";
import MarketData from "./pages/MarketData";
import MyProfile from "./pages/MyProfile";


function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <main className="mt-20 p-6"> {/* ✅ Pushes content below navbar */}
          <Routes>
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/market-data" element={<MarketData />} />
            <Route path="/farmers/:id" element={<FarmerProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/buyers" element={<Buyers />} />
            <Route path="/policymakers" element={<Policymakers />} />
          </Routes>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
