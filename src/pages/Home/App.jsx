import "./App.css";
import Card from "../../Components/./Card";

function App() {
  return (
    <body>
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
                <a href="">Serviços</a>
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
          <img src="./src/assets/perfil.png" />
        </div>
      </section>

      <section id="about">
        <div id="about1">
          <img
            src="./src/assets/avatarsergio.png"
            id="avatar"
            alt="ImagemAvatar"
          />
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
        <div id="aroundProjects">
          <div id="projectCards">
            <Card
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
            />
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
