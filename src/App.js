import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./js/Home";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
