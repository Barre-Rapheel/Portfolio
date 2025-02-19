import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Section Hero */}
      <section className="hero-section">
        <h1 className="hero-title">CREATIVE&</h1>
        <h2 className="hero-subtitle">&ORIFONE</h2>
        <p className="hero-description">
          Bienvenue sur mon portfolio. Découvrez mes projets et mon univers
          créatif.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button">
            Voir mes projets
          </a>
          <a href="#contact" className="hero-button">
            Me contacter
          </a>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="about-section">
        <h2 className="section-title">À PROPOS</h2>
        <p className="about-text">
          Je suis un développeur passionné par la création d'expériences
          numériques innovantes et intuitives.
        </p>
      </section>

      {/* Section Projets */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">PROJETS</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Projet 1</h3>
            <p className="project-description">Description du projet 1.</p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Projet 2</h3>
            <p className="project-description">Description du projet 2.</p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Projet 3</h3>
            <p className="project-description">Description du projet 3.</p>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">CONTACT</h2>
        <form className="contact-form">
          <input type="text" placeholder="Votre nom" className="form-input" />
          <input
            type="email"
            placeholder="Votre email"
            className="form-input"
          />
          <textarea placeholder="Votre message" className="form-textarea" />
          <button type="submit" className="form-button">
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
