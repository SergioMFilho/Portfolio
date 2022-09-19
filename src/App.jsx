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
                <img
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      

   </body>
  )
}

export default App
