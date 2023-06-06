import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Disease from "../components/Disease";
import Program from "../components/Program";

function Home() {
  return (
    <div className="bg_black">
      <Hero />
      <Disease />
      <Program />
    </div>
  );
}

export default Home;
