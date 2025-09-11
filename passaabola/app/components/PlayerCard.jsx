export default function PlayerCard({ player }) {
  return (
    <div className="bg-emerald-50 p-6 rounded-lg shadow-md border-t-4 border-emerald-600 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-emerald-800 mb-2">{player.name}</h3>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Posição:</span> {player.position}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Idade:</span> {player.age} anos
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Região:</span> {player.region}
      </p>
      <p className="text-gray-600 mt-3 text-sm italic">
        "{player.bio}"
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-sm">
        Ver Perfil Completo
      </button>
    </div>
  );
}