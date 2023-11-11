import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
