// app/layout.jsx
import './globals.css'; // Importa seu CSS global, incluindo Tailwind
import Header from '../components/layout/Header'; // Importa o componente Header
import Footer from '../components/layout/Footer'; // Importa o componente Footer

export const metadata = {
  title: 'Passa a Bola - Futebol Feminino',
  description: 'Plataforma para conectar jogadoras, clubes e olheiros no futebol feminino brasileiro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen font-sans text-passa-bola-text-dark bg-passa-bola-bg-light">
        {/* Header fixo no topo */}
        <Header />
        
        {/* O conteúdo das suas páginas vai aqui.
            O padding-top no body (em globals.css) já cuida do espaço do header fixo. */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer no final */}
        <Footer />
      </body>
    </html>
  );
}