import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./js/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
