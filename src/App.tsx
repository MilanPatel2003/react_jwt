import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Forgetpass } from "./pages/Forgetpass";
import { Changepass } from "./pages/Changepass";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Admin />} path="/admin"></Route>
        <Route element={<Forgetpass />} path="/forgetpass"></Route>
        <Route element={<Changepass />} path="/changepass"></Route>
      </Routes>
    </Router>
  );
}

export default App;
