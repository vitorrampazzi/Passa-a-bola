// app/page.jsx
import Link from 'next/link'; // Importe Link para os botões

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative bg-passa-bola-header-footer-bg text-white text-center min-h-[calc(100vh-theme(spacing.header-height))] flex flex-col items-center justify-center p-8 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/bc7644bc-4afa-44b0-bccd-e8876bf98d54.png')`,
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
          Revolucione sua Carreira no Futebol Feminino.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl drop-shadow-md">
          Conectamos jogadoras, clubes e olheiros para criar oportunidades e dar visibilidade ao talento brasileiro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/cadastrar-jogadora" className="btn bg-passa-bola-primary hover:bg-passa-bola-primary-hover text-white py-3 px-8 rounded-md text-lg font-bold transition duration-300 transform hover:-translate-y-1 shadow-lg">
            Cadastre-se Já
          </Link>
          <Link href="/buscar-talentos" className="btn bg-passa-bola-accent hover:bg-passa-bola-accent-hover text-white py-3 px-8 rounded-md text-lg font-bold transition duration-300 transform hover:-translate-y-1 shadow-lg">
            Buscar Talentos
          </Link>
        </div>
      </section>

      {/* As próximas seções (Features, Jogadoras em Destaque, CTA Final) virão aqui */}
      {/* Por enquanto, pode deixar o restante vazio ou com um placeholder */}
    </div>
  );
}