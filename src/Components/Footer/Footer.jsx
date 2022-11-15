import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

function Footer(props) {
    return (
      <div className="Footer">
        <header className="Footer-header">
          <h3>Todos los derechos reservados</h3>
          {/* <button type="button" class="btn btn-light">Compre su café aquí</button> */}
          <Button>Compre su café aquí</Button>
        </header>
      </div>
    );
  }
  
  export default Footer;