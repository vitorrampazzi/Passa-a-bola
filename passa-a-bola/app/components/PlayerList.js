"use client";

import Link from "next/link";
import Image from "next/image";

const allPlayers = [
  {
    name: "Maria Silva",
    position: "Atacante",
    age: 20,
    photo: "/img/mulher1.jpg", 
    profileLink: "/jogadora", 
  },
  {
    name: "Ana Carolina Silva",
    position: "Meio-Campo",
    age: 22,
    photo: "/img/mulher2.jpg",
    profileLink: "/jogadora",
  },
  {
    name: "Beatriz Costa",
    position: "Zagueira",
    age: 19,
    photo: "/img/mulher3.jpg",
    profileLink: "/jogadora",
  },
  {
    name: "Carla Oliveira",
    position: "Goleira",
    age: 25,
    photo: "/img/mulher4.jpg",
    profileLink: "/jogadora",
  },
  {
    name: "Daniela Pereira",
    position: "Lateral Esquerda",
    age: 21,
    photo: "/img/mulher5.jpeg",
    profileLink: "/jogadora",
  },
  {
    name: "Fernanda Lima",
    position: "Atacante",
    age: 18,
    photo: "/img/mulher6.jpeg",
    profileLink: "/jogadora",
  },
];

// Removemos a tipagem "PlayerListProps" e só recebemos os props
export default function PlayerList({ limit, gridClassName }) {
  
  const players = limit ? allPlayers.slice(0, limit) : allPlayers;
  const gridClass = gridClassName || "player-cards-grid";

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