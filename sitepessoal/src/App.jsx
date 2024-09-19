import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    import React from 'react';
import './App.css';
import heroImage from './assets/hero-image.jpg';
import curiosity1 from './assets/curiosity1.jpg';
import curiosity2 from './assets/curiosity2.jpg';
import curiosity3 from './assets/curiosity3.jpg';
import curiosity4 from './assets/curiosity4.jpg';
import curiosity5 from './assets/curiosity5.jpg';

function Header() {
  return (
    <header>
      <h1>Meu Nome</h1>
      <nav>
        <ul>
          <li><a href="#hero">Hero</a></li>
          <li><a href="#personal">Sobre Mim</a></li>
          <li><a href="#curiosities">Curiosidades</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#footer">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero">
      <h2>Meu Nome Completo</h2>
      <img src={heroImage} alt="Imagem de Destaque" />
    </section>
  );
}

function PersonalParagraph() {
  return (
    <section id="personal">
      <p>
        Olá! Eu sou [Seu Nome], um entusiasta da tecnologia e desenvolvimento de software. 
        Aqui você encontrará informações sobre mim, curiosidades e alguns projetos 
        que desenvolvi. Sinta-se à vontade para explorar!
      </p>
    </section>
  );
}

function CuriosityCard({ title, image, description }) {
  return (
    <div className="curiosity-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function PortfolioSection() {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição breve do Projeto 1.',
      technologies: 'React, Node.js',
      github: 'https://github.com/seunome/projeto1'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição breve do Projeto 2.',
      technologies: 'JavaScript, Express',
      github: 'https://github.com/seunome/projeto2'
    },
    {
      title: 'Projeto 3',
      description: 'Descrição breve do Projeto 3.',
      technologies: 'HTML, CSS',
      github: 'https://github.com/seunome/projeto3'
    }
  ];

  return (
    <section id="portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio-projects">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tecnologias:</strong> {project.technologies}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <p>Contato: seuemail@exemplo.com</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PersonalParagraph />
      <section id="curiosities">
        <h2>Curiosidades</h2>
        <div className="curiosity-cards">
          <CuriosityCard title="Curiosidade 1" image={curiosity1} description="Descrição da curiosidade 1" />
          <CuriosityCard title="Curiosidade 2" image={curiosity2} description="Descrição da curiosidade 2" />
          <CuriosityCard title="Curiosidade 3" image={curiosity3} description="Descrição da curiosidade 3" />
          <CuriosityCard title="Curiosidade 4" image={curiosity4} description="Descrição da curiosidade 4" />
          <CuriosityCard title="Curiosidade 5" image={curiosity5} description="Descrição da curiosidade 5" />
        </div>
      </section>
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;

  );
}

export default App
