import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Farmers from './components/Farmers';
import Buyers from './components/Buyers';
import MarketData from './components/MarketData';
import FinancialTools from './components/FinancialTools';
import Training from './components/Training';
import PolicyFeedback from './components/PolicyFeedback';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import FarmerDashboard from './components/FarmerDashboard';
import FarmerProfile from './components/FarmerProfile';
import BuyerProfile from './components/BuyerProfile';
import PolicymakerProfile from './components/PolicyMakerProfile';
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import NavigationCards from './components/NavigationCards';
import EmpowermentSection from './components/EmpowermentSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/market-data" element={<MarketData />} />
        <Route path="/financial-tools" element={<FinancialTools />} />
        <Route path="/training" element={<Training />} />
        <Route path="/policy-feedback" element={<PolicyFeedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer-profile" element={<FarmerProfile />} />
        <Route path="/buyer-profile" element={<BuyerProfile />} />
        <Route path="/policymaker-profile" element={<PolicymakerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;