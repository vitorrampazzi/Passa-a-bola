// components/layout/Header.jsx
import Link from 'next/link';
import Image from 'next/image'; // Importar o componente Image do Next.js para otimização

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-passa-bola-header-footer-bg text-white p-4 flex justify-between items-center shadow-md z-50 h-header-height">
      <Link href="/" className="text-2xl font-bold text-white no-underline transition-colors duration-300 hover:text-passa-bola-yellow">
        Passa a Bola
      </Link>
      <nav>
        <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0">
          <li>
            <Link href="/" className="text-white no-underline font-medium transition-colors duration-300 hover:text-passa-bola-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#features" className="text-white no-underline font-medium transition-colors duration-300 hover:text-passa-bola-secondary">
              Recursos
            </Link>
          </li>
          <li>
            <Link href="/#available-players" className="text-white no-underline font-medium transition-colors duration-300 hover:text-passa-bola-secondary">
              Jogadoras
            </Link>
          </li>
          <li>
            <Link href="/cadastrar-jogadora" className="text-white no-underline font-medium transition-colors duration-300 hover:text-passa-bola-secondary">
              Cadastrar Jogadora
            </Link>
          </li>
          <li>
            <Link href="/buscar-talentos" className="text-white no-underline font-medium transition-colors duration-300 hover:text-passa-bola-secondary">
              Buscar Talentos
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-white no-underline font-medium transition-colors duration-300 hover:text-passa-bola-secondary">
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}