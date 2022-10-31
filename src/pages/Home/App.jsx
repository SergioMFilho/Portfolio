import "./App.css";
// import Card from "../../Components/Card/Card";
import perfilImage from "../../public/assets/perfil.png";
import avatarImage from "../../public/assets/avatarsergio.png";
import panel1 from "../../public/assets/1.png";
import panel2 from "../../public/assets/2.png";

function App() {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
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
          <div
            className="panel active"
            style={{
              backgroundImage: `url(${panel1})`,
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className="panel"
            style={{
              backgroundImage: `url(${panel2})`,
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className="panel"
            style={{
              backgroundImage: `url(${panel2})`,
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className="panel"
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            )`,
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className="panel"
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            )`,
            }}
          >
            <h3>Explore The World</h3>
          </div>

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
