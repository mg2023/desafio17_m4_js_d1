import './Card.css'


function Card(props) {
    return (
      <article className="tarjeta">
        <section className="Card-header">
          <h1>{props.title}</h1>
        </section>
        <section className="Card-imagen">
          <img src={props.image} alt={props.descrip} width="300px" height="200px"/>
        </section>
        <section>
          <p>{props.descrip}</p>
        </section>       
      </article>
    );
  }

export default Card;
  