'use client'; // Para usar hooks

import { useState } from 'react';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import { User, Mail, Calendar, MapPin, Grid, Play, LineChart } from 'lucide-react'; // Ícones

export const metadata = {
  title: 'Cadastrar Jogadora - Passa-a-Bola',
  description: 'Crie seu perfil detalhado no Passa-a-Bola para ganhar visibilidade.',
};

export default function PlayerProfilePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    region: '',
    position: '',
    mainVideoLink: '',
    highlightVideoLink2: '',
    goals: '',
    assists: '',
    gamesPlayed: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula o envio de dados
    console.log('Dados do Perfil da Jogadora:', formData);
    alert('Perfil simulado salvo! (Verifique o console para os dados)');
    // Aqui você integraria com um backend para salvar os dados
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border-t-8 border-emerald-600 w-full max-w-3xl">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Crie Seu Perfil de Jogadora</h1>
      <p className="text-center text-gray-700 mb-8">
        Preencha suas informações para que clubes e olheiros possam te encontrar.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-emerald-700 border-b pb-2 mb-4">Dados Pessoais</h2>
        <InputField
          label="Nome Completo"
          id="name"
          placeholder="Maria da Silva"
          value={formData.name}
          onChange={handleChange}
          icon={User}
          required
        />
        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="seu.email@exemplo.com"
          value={formData.email}
          onChange={handleChange}
          icon={Mail}
          required
        />
        <InputField
          label="Data de Nascimento"
          id="birthDate"
          type="date"
          value={formData.birthDate}
          onChange={handleChange}
          icon={Calendar}
          required
        />
        <InputField
          label="Cidade/Estado (Região)"
          id="region"
          placeholder="São Paulo, SP"
          value={formData.region}
          onChange={handleChange}
          icon={MapPin}
          required
        />
        <InputField
          label="Posição Principal"
          id="position"
          placeholder="Atacante, Meio-campo, Defensora, Goleira"
          value={formData.position}
          onChange={handleChange}
          icon={Grid}
          required
        />

        <h2 className="text-2xl font-semibold text-emerald-700 border-b pb-2 mb-4 mt-8">Vídeos de Destaque</h2>
        <InputField
          label="Link do Vídeo Principal (YouTube/Google Drive)"
          id="mainVideoLink"
          placeholder="https://youtube.com/link-do-seu-video"
          value={formData.mainVideoLink}
          onChange={handleChange}
          icon={Play}
        />
        <InputField
          label="Link do Vídeo Secundário (Opcional)"
          id="highlightVideoLink2"
          placeholder="https://drive.google.com/link-do-video"
          value={formData.highlightVideoLink2}
          onChange={handleChange}
          icon={Play}
        />

        <h2 className="text-2xl font-semibold text-emerald-700 border-b pb-2 mb-4 mt-8">Estatísticas (Última Temporada)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            label="Gols"
            id="goals"
            type="number"
            placeholder="0"
            value={formData.goals}
            onChange={handleChange}
            icon={LineChart}
          />
          <InputField
            label="Assistências"
            id="assists"
            type="number"
            placeholder="0"
            value={formData.assists}
            onChange={handleChange}
            icon={LineChart}
          />
          <InputField
            label="Jogos Disputados"
            id="gamesPlayed"
            type="number"
            placeholder="0"
            value={formData.gamesPlayed}
            onChange={handleChange}
            icon={LineChart}
          />
        </div>
        
        <h2 className="text-2xl font-semibold text-emerald-700 border-b pb-2 mb-4 mt-8">Sobre Você</h2>
        <div>
          <label htmlFor="bio" className="block text-gray-700 text-sm font-semibold mb-2">
            Mini Biografia / Descrição
          </label>
          <textarea
            id="bio"
            rows="4"
            placeholder="Fale um pouco sobre seu estilo de jogo, suas qualidades e o que busca..."
            value={formData.bio}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
          ></textarea>
        </div>


        <div className="flex justify-center mt-8">
          <Button type="submit" variant="primary">
            Salvar Meu Perfil
          </Button>
        </div>
      </form>
    </div>
  );
}