import "./card.css";

function card(props) {
  return (
    <div className="card">
      <h3>{props.nameProject}</h3>
      <p>{props.descricao}</p>
      <a href={props.link} target="blank">
        Visualizar Projeto
      </a>
    </div>
  );
}

export default card;
