const IndexCards = (props) => {
  return (
    <div className='list-item'>
      <h1 className="id_number"> {props.pizza.indexRef + 1} / {props.pizza.indexCards.length}   </h1>
      <h1>{props.indexC.name.first} {props.indexC.name.last}</h1>
      <h4>From: {`${props.indexC.city}, ${props.indexC.country}`}</h4>
      <h4>Job Title: {props.indexC.title}</h4>
      <h4>Employer: {props.indexC.employer}</h4>
      <h4>Favorite Movies:</h4>
      <ol>{props.indexC.favoriteMovies.map((el, i) => (<li className="movies-style" key={i}> {el} </li>))}</ol>
    </div>
  )
}

export default IndexCards;

