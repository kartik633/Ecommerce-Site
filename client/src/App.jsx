import Product from "./pages/Product.jsx";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import { Navigate, Outlet } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Success from "./pages/Success.jsx";

const App = () => {
  const user = true;

  const PrivateRoute = () => {
    const auth = null; 
    return user ? <Navigate to="/" /> : <Login />;
}

const PrivateRoute1 = () => {
  const auth = null; 
  return user ? <Navigate to="/" /> : <Register />;
}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<PrivateRoute />} />
        <Route path="/register" element={<PrivateRoute1 />} />
      </Routes>
    </Router>
  );
};

export default App;
