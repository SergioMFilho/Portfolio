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
                <h1>
                    Olá, eu sou<br/>
                      <span id='home-name'>Sérgio Medeiros.</span><br/>
                      <span className='typewriter'>Front-end developer.</span>
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
              <div id="home-container-photo"> 
                <div id="home-photo">
                  <img/>
                </div>
              </div>
              <div id='s-home2'>
                <img src='./src/assets/perfil.png'/>
              </div>
           
          </div>
        </div>
        
      </section>
      
      <section id='s-about'>
        <div id='about1'>

            <img src="./src/assets/avatarsergio.png" id='avatar' alt="" />
            <div id='about2'>
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
      
   </body>
  )
}

export default App
