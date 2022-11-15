import './Card.css'

function Card(props) {
    return (
      <article className="card-style">
        <section>
          <h3>{props.title}</h3>
        </section>
        <section>
          <img src={props.image} alt={props.descrip} width="300px" height="200px"/>
        </section>
        <section>
          <p>{props.descrip}</p>
        </section>       
      </article>
    );
  }

export default Card;
  