import UserProfile from "./Components/UserProfile";
import Productos from "./Components/Productos/Productos";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// Componente principal App
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
