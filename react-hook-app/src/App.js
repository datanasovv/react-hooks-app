import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="page-header">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>{" "}
          <NavLink to="/product" activeClassName="active">
            Product
          </NavLink>{" "}
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>{" "}
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/product" element={<ProductPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
