import { useState } from 'react'
import './App.css'
import Card from '../Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <body>
    <header>
      <div className='grid-layout'>

        <nav>
          <div id='logo'>Sérgio Medeiros</div>
          <ul className='nav-list'>
            <li><a href="#about">Quem sou</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="">Serviços</a></li>
            <li><a href="">Conhecimentos</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>

    </main>
      <section id='home'>
          <div id='home1'>
              <div id='home-container-text'>
                <h1 className='line'>
                    Olá, eu sou<br/>
                      <span id='home-name'>Sérgio Medeiros<span>.</span></span><br/>
                      <span className='typewriter typing-animation'>Front-end developer.</span>
                </h1>
                  <a 
                    href="https://github.com/SergioMFilho"
                    rel='noopener'
                    target={"_blank"}
                    className='buttonTransition'
                    > <button id='buttonGit'>
                      GitHub </button>
                  </a>
              </div>
          </div>
          <div id='s-home2'>
                <img src='./src/assets/perfil.png'/>
          </div>
       
        
      </section>
      
      <section id='about'>
        <div id='about1'>
            <img      
                  id='imgReact'
                  src="./src/assets/react.svg"
                  width="45px"
                  height="45px"
                  alt="ícone react"
                />
            <img      
                  id='imgJs'
                  src="./src/assets/js.png"
                  width="45px"
                  height="45px"
                  alt="ícone js"
                />
            <img src="./src/assets/avatarsergio.png" id='avatar' alt="" />
            <div class="about-figure figure-one icon-one delayExtraBigReveal">
            </div>
            
        </div>
        <div id='about2'>
          <div id='about-text'>
            <h2 class="about-h2">Quem sou <span id='about-h2-span'>.</span></h2>
            <p class="about-p">
              Meu nome é Sérgio Medeiros. 
              Sou Web Developer com foco em front-end em busca do meu 
              primeiro estágio/emprego.Desenvolvo interfaces modernas e
              de alta qualidade, com foco na performance e na responsividade.
            </p>
          </div>
        </div>    
      </section>
      
      <section id='projects'>
          <div id='divH2'>
            <h2>Projetos<span>.</span></h2>
          </div>
          <div id='aroundProjects'>
            <div id='projectCards'>
              <Card nameProject='dekdoeko' descricao='dededed'/>
              {/* <article  className='cardPetShop'>
                <h3>PetShopReact</h3>
                <p>
                  Site petshop, feito em React e JavaScript.
                </p>
                <a href="">Visualizar Projeto</a>
              </article> */}
              <article  className='cardCount'>
                <h3>Countdown</h3>
                <p>
                  Site de contagem regressiva, feito em React e JavaScript.
                </p>
                <a href="">Visualizar Projeto</a>
              </article>
              <article  className='cardList'>
                <h3>Lista de Presença</h3>
                <p>
                  Site de lista de presença, feito em React e JavaScript.
                </p>
                <a href="">Visualizar Projeto</a>
              </article>
            </div>
          </div>
      </section>

   </body>
  )
}

export default App
