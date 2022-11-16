import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

function Footer(props) {
    return (
      <footer>
        <Button variant="secondary">Compre su café aquí</Button>
        <h3>Todos los derechos reservados</h3>
      </footer>
    );
  }
  
export default Footer;