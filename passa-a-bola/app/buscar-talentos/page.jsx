"use client";

import { useState } from "react";
import PlayerList from "../components/PlayerList";

export default function BuscarTalentosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [filterAge, setFilterAge] = useState("");

  return (
    <main className="talents-main">
      <section className="section">
        <h2 className="buscar-talentos">Buscar Talentos</h2>
        <p>
          Explore o perfil de milhares de jogadoras e encontre o talento ideal
          para o seu time.
        </p>

        <div className="search-filter-bar">
          <input
            type="text"
            id="searchPlayer"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            id="filterPosition"
            value={filterPosition}
            onChange={(e) => setFilterPosition(e.target.value)}
          >
            <option value="">Todas as Posições</option>
            <option value="Atacante">Atacante</option>
            <option value="Atacante (Ponta)">Atacante (Ponta)</option>
            <option value="Meio-Campo (Volante)">Meio-Campo (Volante)</option>
            <option value="Zagueira">Zagueira</option>
            <option value="Lateral Esquerda">Lateral Esquerda</option>
            <option value="Goleira">Goleira</option>
          </select>
          <select
            id="filterAge"
            value={filterAge}
            onChange={(e) => setFilterAge(e.target.value)}
          >
            <option value="">Todas as Idades</option>
            <option value="U23">Sub-23 (até 23 anos)</option>
            <option value="24+">24+ anos</option>
          </select>
        </div>

        <PlayerList
          gridClassName="player-cards-grid full-width-grid"
          filters={{
            name: searchTerm,
            position: filterPosition,
            age: filterAge,
          }}
        />
      </section>
    </main>
  );
}