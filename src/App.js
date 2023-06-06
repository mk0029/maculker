import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import OurMethodology from "./components/OurMethodology";
import HomingMethod from "./components/HomingMethod";
import OptimizeBiochemistry from "./components/OptimizeBiochemistry";
import PatientsRecovered from "./components/PatientsRecovered";

function App() {
  return (
    <>
      <div className="bg_black overflow-hidden">
        {" "}
        <OurMethodology />
        <HomingMethod />
        <OptimizeBiochemistry />
        <PatientsRecovered />
      </div>
    </>
  );
}

export default App;
