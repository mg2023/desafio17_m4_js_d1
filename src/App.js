import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import image_cup from "./assets/cup.jpg";
import image_desktop from "./assets/desktop.jpg";
import image_kermit from "./assets/kermit.jpg";


function App() {
  return (
    <div className="App">
      <Header title="Galeria de Imagénes con React" />  
      <Card title="Titulo1"  descrip="La tasa de cafe" image={image_cup} />  
      <Card title="Titulo2"  descrip="La tasa de cafe y desktop" image={image_desktop} />  
      <Card title="Titulo3"  descrip="La tasa de cafe y kermit" image={image_kermit} />  
      <Footer />  
    </div>
  );
}

export default App;
