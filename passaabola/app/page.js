// app/page.js
'use client'; // Indica que este componente é interativo (Client Component)

import { useState } from 'react'; // Para o estado do botão
import { useEffect } from 'react'; // Para simular a "conexão"

export default function HomePage() {
  const [message, setMessage] = useState("Descubra o Poder da Conexão");
  const [isConnecting, setIsConnecting] = useState(false);

  // Efeito para simular a conexão/busca
  useEffect(() => {
    if (isConnecting) {
      const timer = setTimeout(() => {
        setMessage("🎉 Mais de 500 jogadoras e 50 clubes já conectados!");
        setIsConnecting(false);
      }, 2000); // Simula um atraso de 2 segundos para a "busca"
      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
    }
  }, [isConnecting]);

  const handleConnectClick = () => {
    if (!isConnecting) {
      setIsConnecting(true);
      setMessage("Buscando talentos e oportunidades...");
    }
  };

  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-2xl max-w-2xl w-full border-t-4 border-blue-600">
      <h1 className="text-5xl font-extrabold mb-4 text-blue-800">
        Passa-a-Bola: O Talento Encontra a Oportunidade
      </h1>
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Conectando jogadoras de futebol feminino, clubes e olheiros para revolucionar a visibilidade e abrir portas no esporte brasileiro.
      </p>
      
      {/* Botão de Conexão com classes Tailwind */}
      <button
        onClick={handleConnectClick}
        disabled={isConnecting} // Desabilita o botão enquanto está "conectando"
        className={`
          ${isConnecting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}
          text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl 
          transition duration-300 ease-in-out transform hover:scale-105 
          focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75
        `}
      >
        {message}
      </button>

      {isConnecting && (
        <p className="mt-4 text-blue-600 font-semibold animate-pulse">
          Aguarde, estamos construindo pontes...
        </p>
      )}
    </div>
  );
}