"use client"; // Necessário para os filtros (useState)

import { useState } from "react";
import PlayerList from "../components/PlayerList"; // Importe sua lista de jogadoras

export default function BuscarTalentosPage() {
  // Estados para controlar os filtros
  // (A lógica de filtragem real precisaria ser adicionada ao PlayerList,
  // mas por enquanto, os filtros são apenas visuais e controlados)
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [filterAge, setFilterAge] = useState("");

  const handleFilter = () => {
    // Lógica para aplicar os filtros (ex:
    // console.log(searchTerm, filterPosition, filterAge)
    alert("Lógica de filtragem ainda não implementada.");
  };

  return (
    // Conteúdo do <main> do seu 'buscar_talentos.html'
    <main className="talents-main">
      <section className="section">
        <h2 className="buscar-talentos">Buscar Talentos</h2>
        <p>
          Explore o perfil de milhares de jogadoras e encontre o talento ideal
          para o seu time.
        </p>

        {/* --- Barra de Filtros --- */}
        <div className="search-filter-bar">
          <input
            type="text"
            id="searchPlayer"
            placeholder="Buscar por nome, posição, clube..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            id="filterPosition"
            value={filterPosition}
            onChange={(e) => setFilterPosition(e.target.value)}
          >
            <option value="">Todas as Posições</option>
            <option value="Goleira">Goleira</option>
            <option value="Zagueira">Zagueira</option>
            <option value="Lateral">Lateral</option>
            <option value="Meio-Campo">Meio-Campo</option>
            <option value="Atacante">Atacante</option>
          </select>
          <select
            id="filterAge"
            value={filterAge}
            onChange={(e) => setFilterAge(e.target.value)}
          >
            <option value="">Todas as Idades</option>
            <option value="U17">Sub-17</option>
            <option value="U20">Sub-20</option>
            <option value="Senior">Sênior</option>
          </select>
          <button
            className="btn btn-small btn-secondary"
            onClick={handleFilter}
          >
            Aplicar Filtros
          </button>
        </div>

        {/* --- Lista de Jogadoras ---
          Reutilizamos o componente, mas desta vez:
          1. Sem a prop 'limit', para mostrar todas as jogadoras.
          2. Passando a classe correta para a grid.
        */}
        <PlayerList gridClassName="player-cards-grid full-width-grid" />
      </section>
    </main>
  );
}