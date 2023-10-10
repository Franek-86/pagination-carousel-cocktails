import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";
import Carousel from "./pages/Carousel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SecondPage />} />
        <Route path='/Carousel' element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
