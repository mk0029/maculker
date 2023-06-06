import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Disease from "../components/Disease";
import Program from "../components/Program";
import PatientsRecovered from "../components/PatientsRecovered";
import Success from "../components/Success";

function Home() {
  return (
    <div className="bg_black">
      {/* <Hero />
      <Disease />
      <Program />

      <PatientsRecovered /> */}
      <Success />
    </div>
  );
}

export default Home;
