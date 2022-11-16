import './Card.css'

function Card(props) {
    return (
      <article className="card-style">
        <section>
          <img className="image" src={props.image} alt={props.descrip} width="300px" height="200px" border-radius="20px"/>
        </section>
        <section>
          <h3>{props.title}</h3>
        </section>
        <section>
          <p>{props.descrip}</p>
        </section>       
      </article>
    );
  }

export default Card;
  