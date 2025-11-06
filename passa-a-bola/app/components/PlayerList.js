"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PlayerList({ limit, gridClassName }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/api/jogadoras.json')
      .then((response) => response.json())
      .then((data) => {
        const loadedPlayers = limit ? data.slice(0, limit) : data;
        setPlayers(loadedPlayers);
      })
      .catch((error) => console.error("Erro ao buscar jogadoras:", error));
  }, [limit]);

  const gridClass = gridClassName || "player-cards-grid";

  if (players.length === 0) {
    return <p>Carregando jogadoras...</p>;
  }

  return (
    <div className={gridClass}>
      {players.map((player, index) => (
        <div className="player-card" key={index}>
          <Image
            src={player.photo}
            alt={`Foto de ${player.name}`}
            className="player-card-photo"
            width={150}
            height={150}
          />
          <h3>{player.name}</h3>
          <p className="player-card-position">
            {player.position} - {player.age} anos
          </p>
          <div className="player-card-actions">
            <Link href={player.profileLink} className="btn btn-small btn-secondary">
              Ver Perfil
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}