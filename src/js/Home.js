import React from "react";
import Hero from "../components/Hero";
import Disease from "../components/Disease";
import Program from "../components/Program";
import Fees from "../components/Fees";
import Eligible from "../components/Eligible";
import Faq from "../components/Faq";
import Review from "../components/Review";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg_black overflow-hidden">
      <Hero />
      <Disease />
      <Eligible />
      <Fees />
      <Program />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
