import "./card.css";

export default function card(props) {
  return (
    <div className="card">
      <article className="cardPetShop">
        <h3>{props.nameProject}</h3>
        <p>{props.descricao}</p>
        <a href={props.link} target="blank">
          Visualizar Projeto
        </a>
      </article>
    </div>
  );
}
//https://jolly-raindrop-ce5c3a.netlify.app/
//petshopsm.netlify.app
