import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Disease from "../components/Disease";

function Home() {
  return (
    <div className="bg_black">
      <Hero />
      <Disease />
    </div>
  );
}

export default Home;
