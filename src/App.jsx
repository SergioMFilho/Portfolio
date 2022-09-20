import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <body>
    <header>
      <div className='grid-layout'>

        <nav>
          <div id='logo'>Sérgio Medeiros</div>
          <div className='menu'>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <ul className='nav-list'>
            <li><a href="">Quem sou</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Serviços</a></li>
            <li><a href="">Conhecimentos</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>

    </main>
      <section id='s-home'>
        <div className='grid-layout'>
          <div id='home'>
            <div id='home-container-text'>
              <h1 className='delayMediumReveal'>
                  Olá, eu sou<br/>
                    <span id='home-name'>Sérgio Medeiros</span><br/>
                    <span className='typewriter'>Front-end developer.</span>
              </h1>
              <a href="">GitHub</a>
            </div>
            <div id="home-container-photo">
              <div id="home-photo">
                <img/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id='s-about'>
        <div className='grid-layout'>
          <div id='about'>
            <div id='about-photo'>
             <img
                src="assets/image/iuricode.svg"
                width="400px"
                height="400px"
                alt="ilustração Sérgio"
                class="delayMediumReveal"
                id="photo-sergio"
              />
              <div className='about-figure figure-one icon-one delayExtraBigReveal'>
                <img
                    src="assets/icons/html-cor.svg"
                    width="45px"
                    height="45px"
                    alt="ícone html"
                  />
              </div>
              <div className='about-figure figure-two icon-two delayExtraBigReveal'>
                <img
                  src="assets/icons/css-cor.svg"
                  width="45px"
                  height="45px"
                  alt="ícone css"
                />
              </div>
              <div className='about-figure figure-three icon-three delayExtraBigReveal'>
                <img
                  src="assets/icons/js-cor.svg"
                  width="45px"
                  height="45px"
                  alt="ícone javascript"
                />
              </div>
            </div>
            <article id='about-text'>
              <h2 class="delaySmallReveal">Quem sou <span>.</span></h2>
              <p class="delayMediumReveal">
                Meu nome é Sérgio Medeiros. 
                Sou Web Developer com foco em front-end em busca do meu 
                primeiro estágio/emprego.Desenvolvo interfaces modernas e
                 de alta qualidade, com foco na performance e na responsividade.
              </p>
            
            </article>
          </div>
        </div>
      </section>
      
   </body>
  )
}

export default App
