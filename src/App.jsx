import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup'
import UserProfile from './Components/UserProfile';
// Componente principal App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />\
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Login />} />
        <Route path='/registro' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
