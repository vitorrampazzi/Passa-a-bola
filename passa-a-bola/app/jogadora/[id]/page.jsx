"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function JogadoraDinamicaPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (id) {
      fetch('/api/jogadoras.json')
        .then((res) => res.json())
        .then((data) => {
          const foundPlayer = data.find((p) => p.id === id);
          setPlayer(foundPlayer);
        });
    }
  }, [id]);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!player) {
    return (
      <main className="content-entering">
        <section className="section player-profile-section">
          <p>Carregando perfil da jogadora...</p>
        </section>
      </main>
    );
  }

  return (
    <main className="content-entering">
      <section className="section player-profile-section">
        <div className="player-profile-container">
          <div className="player-profile-header">
            <Image
              src={player.photo}
              alt={`Foto de ${player.name}`}
              className="player-profile-image"
              width={180}
              height={180}
            />
            <div className="player-header-info">
              <h1>{player.name}</h1>
              <p className="player-position">{player.position}</p>
              <div className="player-profile-actions">
                <button
                  type="button"
                  className="btn btn-secondary btn-small"
                  onClick={handleScrollToContact}
                >
                  Entrar em Contato
                </button>
              </div>
            </div>
          </div>

          <div className="player-profile-details">
            <div className="details-block personal-info-block">
              <h3>Informações Pessoais</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span>Nascimento:</span> <span>{player.info.nascimento}</span>
                </div>
                <div className="info-item">
                  <span>Idade:</span> <span>{player.info.idade} anos</span>
                </div>
                <div className="info-item">
                  <span>Nacionalidade:</span> <span>{player.info.nacionalidade}</span>
                </div>
                <div className="info-item">
                  <span>Altura:</span> <span>{player.info.altura}</span>
                </div>
                <div className="info-item">
                  <span>Peso:</span> <span>{player.info.peso}kg</span>
                </div>
                <div className="info-item">
                  <span>Pé Preferencial:</span> <span>{player.info.pe}</span>
                </div>
              </div>
            </div>

            <div className="details-block career-stats-block">
              <h3>Estatísticas de Carreira</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-value">{player.stats.jogos}</span>
                  <span className="stat-label">Jogos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{player.stats.gols}</span>
                  <span className="stat-label">Gols</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{player.stats.assistencias}</span>
                  <span className="stat-label">Assistências</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{player.stats.amarelos}</span>
                  <span className="stat-label">Cartões Amarelos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{player.stats.vermelhos}</span>
                  <span className="stat-label">Cartões Vermelhos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{player.stats.passes}</span>
                  <span className="stat-label">Acerto Passes</span>
                </div>
              </div>
            </div>

            <div className="details-block description-block">
              <h3>Sobre a Jogadora</h3>
              <p>{player.bio}</p>
            </div>

            <div
              className="details-block social-media-block"
              ref={contactRef}
            >
              <h3>Contato e Redes Sociais</h3>
              <div className="social-links">
                <a href="#" className="social-icon facebook" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon instagram" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon twitter" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p>Email: {player.contact.email}</p>
              <p>Telefone: {player.contact.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}