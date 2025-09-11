export default function Footer() {
  return (
    <footer className="bg-gray-900 p-6 text-center text-gray-400 text-sm">
      <div className="container mx-auto">
        <p className="mb-2">&copy; {new Date().getFullYear()} Passa-a-Bola. Potencializando o Futebol Feminino no Brasil.</p>
        <p>Visibilidade e oportunidades para todas as atletas.</p>
      </div>
    </footer>
  );
}