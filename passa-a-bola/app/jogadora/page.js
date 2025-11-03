// Esta página é (principalmente) estática, mas usaremos 'Image' do Next.js
import Image from "next/image";

export default function JogadoraPage() {
  return (
    // Conteúdo do <main> do seu 'jogadora.html'
    // Lembre-se: 'class' vira 'className'
    <main className="content-entering">
      <section className="section player-profile-section">
        <div className="player-profile-container">
          <div className="player-profile-header">
            {/* O 'img' normal vira 'Image' do Next.js.
              Lembre-se que 'mulher2.jpg' deve estar em 'public/img/mulher2.jpg'
            */}
            <Image
              src="/img/mulher2.jpg"
              alt="Foto de Anna Carolina"
              className="player-profile-image"
              width={180}
              height={180}
            />
            <div className="player-header-info">
              <h1>Anna Carolina</h1>
              <p className="player-position">Meio-campo (Volante)</p>
              <div className="player-profile-actions">
                <a href="#" className="btn btn-secondary btn-small">
                  Entrar em Contato
                </a>
                <a href="#" className="btn btn-small">
                  Ver Highlights
                </a>
              </div>
            </div>
          </div>

          <div className="player-profile-details">
            <div className="details-block personal-info-block">
              <h3>Informações Pessoais</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span>Nascimento:</span> <span>01/01/2000</span>
                </div>
                <div className="info-item">
                  <span>Idade:</span> <span>24 anos</span>
                </div>
                <div className="info-item">
                  <span>Nacionalidade:</span> <span>Brasileira</span>
                </div>
                <div className="info-item">
                  <span>Altura:</span> <span>1.70m</span>
                </div>
                <div className="info-item">
                  <span>Peso:</span> <span>65kg</span>
                </div>
                <div className="info-item">
                  <span>Pé Preferencial:</span> <span>Direito</span>
                </div>
              </div>
            </div>

            <div className="details-block career-stats-block">
              <h3>Estatísticas de Carreira</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-value">120</span>
                  <span className="stat-label">Jogos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">30</span>
                  <span className="stat-label">Gols</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">45</span>
                  <span className="stat-label">Assistências</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">15</span>
                  <span className="stat-label">Cartões Amarelos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">5</span>
                  <span className="stat-label">Cartões Vermelhos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">85%</span>
                  <span className="stat-label">Acerto Passes</span>
                </div>
              </div>
            </div>

            <div className="details-block description-block">
              <h3>Sobre a Jogadora</h3>
              <p>
                Anna Carolina é uma meio-campista versátil e com excelente visão
                de jogo. Capaz de atuar tanto na proteção da defesa quanto na
                criação de jogadas ofensivas, destaca-se pela sua técnica
                apurada, passes precisos e forte marcação. Sua liderança em
                campo e dedicação nos treinos a tornam uma peça fundamental em
                qualquer equipe.
              </p>
            </div>

            <div className="details-block social-media-block">
              <h3>Contato e Redes Sociais</h3>
              <div className="social-links">
                {/* Estes ícones 'i' vão funcionar por causa do 
                  link que adicionamos no 'layout.jsx'
                */}
                <a
                  href="#"
                  className="social-icon facebook"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="social-icon instagram"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="social-icon twitter"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="social-icon linkedin"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p>Email: annacarolina@example.com</p>
              <p>Telefone: +55 (XX) XXXXX-XXXX</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}