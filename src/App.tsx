import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Login from "./pages/Login"
function App() {
  return (
    <Router>
    < Navbar />
  
    <Routes>
      <Route element={<Login/>} path="/login"></Route>
    </Routes>
    </Router>
  )
}

export default App

