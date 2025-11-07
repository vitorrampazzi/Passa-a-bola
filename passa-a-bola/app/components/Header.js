"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <Link href="/" className="logo" onClick={handleLinkClick}>
        Passa a Bola
      </Link>
      <nav className={isMenuOpen ? "menu-open" : ""}>
        <ul>
          <li>
            <Link href="/#home" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link href="/#features" onClick={handleLinkClick}>Recursos</Link>
          </li>
          <li>
            <Link href="/#available-players" onClick={handleLinkClick}>Jogadoras</Link>
          </li>
          <li>
            <Link href="/cadastrar-jogadora" onClick={handleLinkClick}>Cadastrar Jogadora</Link>
          </li>
          <li>
            <Link href="/buscar-talentos" onClick={handleLinkClick}>Buscar Talentos</Link>
          </li>
          <li>
            <Link href="/login" onClick={handleLinkClick}>Entrar</Link>
          </li>
        </ul>
      </nav>

      <button
        className={`menu-toggle ${isMenuOpen ? "menu-open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}