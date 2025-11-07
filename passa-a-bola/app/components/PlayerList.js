"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

export default function PlayerList({ limit, gridClassName, filters }) {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch('/api/jogadoras.json')
      .then((response) => response.json())
      .then((data) => {
        setAllPlayers(data);
      })
      .catch((error) => console.error("Erro ao buscar jogadoras:", error));
  }, []);

  const filteredPlayers = useMemo(() => {
    let playersToFilter = [...allPlayers];

    if (filters) {
      if (filters.name) {
        playersToFilter = playersToFilter.filter((player) =>
          player.name.toLowerCase().includes(filters.name.toLowerCase())
        );
      }
      if (filters.position) {
        playersToFilter = playersToFilter.filter(
          (player) => player.position === filters.position
        );
      }
      if (filters.age === "U23") {
        playersToFilter = playersToFilter.filter(
          (player) => player.info.idade <= 23
        );
      } else if (filters.age === "24+") {
        playersToFilter = playersToFilter.filter(
          (player) => player.info.idade >= 24
        );
      }
    }

    if (limit) {
      playersToFilter = playersToFilter.slice(0, limit);
    }

    return playersToFilter;
    
  }, [allPlayers, filters, limit]);

  const gridClass = gridClassName || "player-cards-grid";

  if (allPlayers.length === 0) {
    return <p>Carregando jogadoras...</p>;
  }

  if (filteredPlayers.length === 0) {
    return <p>Nenhuma jogadora encontrada com esses filtros.</p>;
  }

  return (
    <div className={gridClass}>
      {filteredPlayers.map((player) => (
        <div className="player-card" key={player.id}>
          <Image
            src={player.photo}
            alt={`Foto de ${player.name}`}
            className="player-card-photo"
            width={150}
            height={150}
          />
          <h3>{player.name}</h3>
          <p className="player-card-position">
            {player.position} - {player.info.idade} anos
          </p>
          <div className="player-card-actions">
            <Link
              href={`/jogadora/${player.id}`}
              className="btn btn-small btn-secondary"
            >
              Ver Perfil
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}