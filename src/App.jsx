import UserProfile from "./Components/UserProfile";
import Productos from "./Components/Productos/Productos";
import Header from "./Components/Inicio/Header";
import Slider from "./Components/Inicio/Slider";
import Footer from "./Components/Inicio/Footer";
import Forms from "./Components/Inicio/forms-contactos";
import Cuadro from "./Components/Inicio/Cuadro";
// Componente principal App
function App() {
  return (
    <div>
      <Header />
      <Slider />
      {/* <Cuadro />
      <Forms />
      <Footer /> */}
      
    </div>
  );
}

export default App;
