import React from "react";
import Header from "./Header";
import CallToAction from "./CallToAction";
import NavigationCards from "./NavigationCards";
import EmpowermentSection from "./EmpowermentSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-container" background-image url="/images/leaf.jpg">
      <div className="content-wrapper" background-image url="/images/leaf.jpg">
        <Header 
          title="FoSec Platform"
          subtitle="Empowering smallholder farmers to fight food insecurity in Sub-Saharan Africa."
          stats={["Market Access", "Financial Support", "Training & Education"]}
        />
        <CallToAction />
        <NavigationCards />
        <EmpowermentSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;