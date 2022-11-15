import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import image_cup from "./assets/cup.jpg";
import image_desktop from "./assets/desktop.jpg";
import image_kermit from "./assets/kermit.jpg";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <Header title="Galeria de Imagénes con React" />  
      <div  className='galeria'>
        <Card title="Café espresso"  descrip="Una tasa de café, el mejor aliado para comenzar tu día!" image={image_cup} />  
        <Card title="Herramientas de trabajo"  descrip="Minimiza las distracciones y potenciarás tu productividad!" image={image_desktop} />  
        <Card title="Relax" descrip="Después de un largo dia, te mereces un break!" image={image_kermit} /> 
      </div> 
      <Footer />  
    </main>
  );
}

export default App;
