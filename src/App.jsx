import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from './pages/About';
import Contact from './pages/Contact';
// Componente principal App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />\
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
