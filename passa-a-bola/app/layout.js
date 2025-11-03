import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Passa a Bola - Conectando Talentos",
  description: "Revolucione sua Carreira no Futebol Feminino.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ADICIONE ESTA LINHA: 
          Link para o Font Awesome, que você usou na página 'jogadora.html'.
          Isso fará os ícones de rede social funcionarem.
        */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        <header>
          <Link href="/" className="logo">
            Passa a Bola
          </Link>
          <nav>
            <ul>
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/#features">Recursos</Link></li>
              <li><Link href="/#available-players">Jogadoras</Link></li>
              <li><Link href="/cadastrar-jogadora">Cadastrar Jogadora</Link></li>
              <li><Link href="/buscar-talentos">Buscar Talentos</Link></li>
              <li><Link href="/login">Entrar</Link></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <p>
            &copy; 2025 Passa a Bola. Todos os direitos reservados. Projeto
            desenvolvido por Daniel Brito, Gustavo Palomares, Vitor Rampazzi.
          </p>
        </footer>
      </body>
    </html>
  );
}