function Card(props) {
    return (
      <div className="Card">
        <header className="Card-header">
          <h1>{props.title}</h1>
        </header>
        <img src={props.image} alt={props.descrip}/>
        <p>{props.descrip}</p>
      </div>
    );
  }
  
  export default Card;
  