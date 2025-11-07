import Link from "next/link";
import "./globals.css";
import Header from "./components/Header.js"; 

export const metadata = {
  title: "Passa a Bola - Conectando Talentos",
  description: "Revolucione sua Carreira no Futebol Feminino.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        
        <Header />

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