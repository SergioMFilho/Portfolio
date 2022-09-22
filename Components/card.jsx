import './card.css';

export default function card(props) {

    return (
        <div className='card'>
             <article  className='cardPetShop'>
                <h3>{props.nameProject}</h3>
                <p>
                  {props.descricao}
                </p>
                <a href="">Visualizar Projeto</a>
              </article>  
        </div>
    )
}