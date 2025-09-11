import Button from '@/components/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Importando ícone

export default function HomePage() {
  return (
    <div className="text-center py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-emerald-50 to-white rounded-lg shadow-xl border-t-8 border-emerald-600">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-800 mb-6 leading-tight">
        Bem-vindo ao <span className="block text-emerald-600">Passa-a-Bola!</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-10">
        Revolucionamos o futebol feminino no Brasil, conectando talentos, clubes e olheiros. Sua oportunidade começa aqui.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="/player-profile" passHref>
          <Button variant="primary" className="flex items-center">
            Cadastrar Minha Carreira <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        <Link href="/search-talents" passHref>
          <Button variant="outline" className="flex items-center">
            Buscar Novas Jogadoras <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>

      <div className="mt-20 px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Nossa Missão</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Visibilidade Ampliada</h3>
            <p className="text-gray-600">Damos voz e espaço para jogadoras de todas as regiões e níveis se destacarem.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Conexões Estratégicas</h3>
            <p className="text-gray-600">Facilitamos a interação direta entre atletas, clubes e olheiros de forma eficiente.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Dados Centralizados</h3>
            <p className="text-gray-600">Uma única plataforma com vídeos, estatísticas e histórico completo para decisões informadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}