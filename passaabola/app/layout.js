import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Passa-a-Bola: Conectando o Futebol Feminino',
  description: 'Plataforma para revolucionar o futebol feminino no Brasil, conectando jogadoras, clubes e olheiros. Visibilidade e oportunidades para todas as atletas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}