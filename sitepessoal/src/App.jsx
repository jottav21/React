import './App.css';

function App() {
  return (
    <>
      {/* Elemento Pai Envolvendo Todo o Conteúdo */}
      <div className="header">
        <a href="<>"><h3>João Victor</h3></a>
        <nav>
          <a href="#Portifolio">Portifolio</a>
          <a href="#Curiosidades">Curiosidades</a>
          <a href="#Contato">Contatos</a>
        </nav>
      </div>

      <div className="main">
        <div className='sobre'> 
          <h3>João Victor N de Souza</h3>
          <p>Eu Sou jottav, tenho 20 anos,sou Crente, natural de Ielmo Marinho. <br /> Atumente esotu no meu ultimo ano de ensino medio cursando Informatica no IFRN.</p>
        </div> 
        <div className='fotinha'>
         <img src="./public/fotinha.jpeg" alt="" />
        </div>
      </div>

      <div className='Portifolio' id='Portifolio'>
  <h3>Portfólio</h3>
  
  <div className="projects">
    {/* Primeiro Projeto */}
    <div className="project">
      <h4>AtemporalBrand</h4>
      <p>Esse projeto foi desenvolvido ultilazando Html, css, python integrado com Banco de Dados</p>
      <a href="https://github.com/jottav21/AtemporalBrand" target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>

    {/* Segundo Projeto */}
    <div className="project">
      <h4>Jogo da Memoria</h4>
      <p>Esse Projeto foi desenvolvido utilizado JavaScrits, feito junto com Amigo Luiz Lucas</p>
      <a href="https://github.com/jottav21/Projeto-JogoMemoria" target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>

    {/* Terceiro Projeto */}
    <div className="project">
      <h4>Super Mercado</h4>
      <p>Este foi um dos meus primeiros projetos realizado, o projeto era uma simulação de um sistema de Super Mercado, e foi desevolvido em python, juntamente com meus amigos Phablo e Luiz</p>
      <a href="https://github.com/PhabloRoberto/poo-Supermercado" target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  </div>
</div>
    
<div className="curiosidades" id="Curiosidades">
  <h3>Curiosidades</h3>

  <div className="curiosidades-container">
    <div className="curiosidade">
      <img src="estudante.jpeg" alt="Curiosidade 1" />
      <h4>Sou estudante do IFRN</h4>
      <p></p>
    </div>

    <div className="curiosidade">
      <img src="./public/braco.jpg" alt="Curiosidade 2" />
      <h4>Eu tive o braço Quebrado</h4>
      <p>Esse dia foi tenso, o ano era 2018 dias das mães</p>
    </div>

    <div className="curiosidade">
      <img src="./public/carvao.jpeg" alt="Curiosidade 3" />
      <h4>Sei fazer carvão</h4>
      <p>Isso dar muito trabalho</p>
    </div>

    <div className="curiosidade">
      <img src="./public/corrida.jpeg" alt="Curiosidade 4" />
      <h4>Gosto de correr</h4>
      <p>A Meta é correr 5kms</p>
    </div>

    <div className="curiosidade">
      <img src="./public/programa.jpeg" alt="Curiosidade 5" />
      <h4>Sei Programar</h4>
      <p>Não é a minha melhor habilidade, mas eu sei um pouco de tudo e tudo de nada</p>
    </div>
  </div>
</div>

<footer className="contato" id="Contato">
  <h3>Contatos</h3>
  <div className="links-contato">
    <a href="https://github.com/jottav21" target="_blank" rel="noopener noreferrer">
      <img src="./public/github.jpg" alt="GitHub" /> GitHub
    </a>
    <a href="https://instagram.com/jottav.http" target="_blank" rel="noopener noreferrer">
      <img src="./public/insta.jpg" alt="Instagram" /> Instagram
    </a>
    <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-nunes-de-souza-50277925b/" target="_blank" rel="noopener noreferrer">
      <img src="linkd.png" alt="LinkedIn" /> LinkedIn
    </a>
  </div>
</footer>





    </>
  );
}

export default App;
