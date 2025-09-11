import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 p-4 shadow-lg">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-white tracking-wider mb-2 sm:mb-0 hover:text-blue-200 transition-colors">
          Passa-a-Bola
        </Link>
        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-lg">
          <li>
            <Link href="/" className="text-white hover:text-emerald-300 font-semibold transition-colors duration-200">
              Início
            </Link>
          </li>
          <li>
            <Link href="/player-profile" className="text-white hover:text-emerald-300 font-semibold transition-colors duration-200">
              Cadastrar Jogadora
            </Link>
          </li>
          <li>
            <Link href="/search-talents" className="text-white hover:text-emerald-300 font-semibold transition-colors duration-200">
              Buscar Talentos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}