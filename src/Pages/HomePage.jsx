import About from "@/Components/Home/About";
import ConnectUs from "@/Components/Home/ConnectUs";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/FeaturedListing";
import HeroSection from "@/Components/Home/HeroSection";
import Insights from "@/Components/Home/Insights";
import MyExpertise from "@/Components/Home/MyExpertise";
import Neighborhood from "@/Components/Home/Neighborhood";

import Services from "@/Components/Home/Services";
import Testimonial from "@/Components/Home/Testimonial";
import WorkProcess from "@/Components/Home/WorkProcess";
import React from "react";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <MyExpertise/>
      <Featured />
      <About />
      <Contact/>
      <ConnectUs/>
      {/* <Services />
      <Neighborhood />
      <WorkProcess />
      <Testimonial />
      <Insights/> */}
    </div>
  );
}
