import "./App.css";

// import Card from "../../Components/Card/Card";
import perfilImage from "../../public/assets/perfil.png";
import avatarImage from "../../public/assets/avatarsergio.png";
import panel1 from "../../public/assets/1.png";
import panel2 from "../../public/assets/2.png";
import { useState, useEffect } from "react";
import CustomImage from "../../Components/CustomImage/CustomImage";

function App() {
  const [data, setData] = useState([
    {
      url: panel1,
      title: "title1",
      customClass: "panel active",
    },
    {
      url: panel2,
      title: "title2",
      customClass: "panel",
    },
    {
      url: panel1,
      title: "title3",
      customClass: "panel",
    },
    {
      url: panel2,
      title: "title4",
      customClass: "panel",
    },
    {
      url: panel1,
      title: "title5",
      customClass: "panel",
    },
  ]);

  function changeHighlightImage(position) {
    setData((oldState) => {
      return oldState.map((item, index) => {
        if (position === index) {
          return {
            ...item,
            customClass: "panel active",
          };
        } else {
          return {
            ...item,
            customClass: "panel",
          };
        }
      });
    });
  }

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container">
      <header>
        <div className="grid-layout">
          <nav>
            <div id="logo">Sérgio Medeiros</div>
            <ul className="nav-list">
              <li>
                <a href="#about">Quem sou</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="">Conhecimentos</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main></main>
      <section id="home">
        <div id="home1">
          <div id="home-container-text" className="typing-animation">
            <h1 className="line">
              Olá, eu sou
              <br />
              <span id="home-name">
                Sérgio Medeiros<span>.</span>
              </span>
              <br />
              <span className="typewriter typing-animation">
                Front-end developer.
              </span>
            </h1>
            <a
              href="https://github.com/SergioMFilho"
              rel="noopener"
              target={"_blank"}
              className="buttonTransition"
            >
              {" "}
              <button id="buttonGit">GitHub </button>
            </a>
          </div>
        </div>
        <div id="s-home2">
          <img src={perfilImage} />
        </div>
      </section>

      <section id="about">
        <div id="about1">
          <img src={avatarImage} id="avatar" alt="ImagemAvatar" />
          <div className="about-figure figure-one icon-one delayExtraBigReveal"></div>
        </div>
        <div id="about2">
          <div id="about-text">
            <h2 className="about-h2">
              Quem sou <span id="about-h2-span">.</span>
            </h2>
            <p className="about-p">
              Meu nome é Sérgio Medeiros. Sou Web Developer com foco em
              front-end em busca do meu primeiro estágio/emprego.Desenvolvo
              interfaces modernas e de alta qualidade, com foco na performance e
              na responsividade.
            </p>
          </div>
        </div>
      </section>

      <section id="projects">
        <div id="divH2">
          <h2>
            Projetos<span>.</span>
          </h2>
        </div>
        <div className="containerProjects">
          {data.map((item, index) => {
            return (
              <CustomImage
                url={item.url}
                customClass={item.customClass}
                title={item.title}
                onClick={() => changeHighlightImage(index)}
              />
            );
          })}

          {/* <div id="aroundProjects">
          <div id="projectCards"> */}
          {/* <Card
              nameProject="SM-computers"
              descricao="Site de venda de dispositivos eletrônicos, criado em angular."
              link="https://jolly-raindrop-ce5c3a.netlify.app/"
            />
            <Card
              nameProject="petBarReact"
              descricao="Site de petshop, para clientes e veterinários, criado em React"
              link="https://petshopsm.netlify.app"
            />
            <Card
              nameProject="Lista de Presença"
              descricao="Uma lista de presença para registro de eventos, criado em React."
              link="https://listadepresencasm.netlify.app"
            /> */}
          {/* </div>
        </div> */}
        </div>
      </section>
    </div>
  );
}

export default App;
