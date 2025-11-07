import Link from "next/link";
import PlayerList from "./components/PlayerList";

export default function Home() {
  return (
    <main>
      <section id="home" className="hero">
        <h1>Revolucione sua Carreira no Futebol Feminino.</h1>
        <p>
          Conectamos jogadoras, clubes e olheiros para criar oportunidades e dar
          visibilidade ao talento brasileiro.
        </p>
        <Link href="/cadastrar-jogadora" className="btn">
          Cadastre-se Já
        </Link>
      </section>

      <section id="features" className="section">
        <h2>Como o Passa a Bola Funciona</h2>
        <p>
          Nossa plataforma é intuitiva e poderosa, desenhada para colocar seu
          talento em evidência.
        </p>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Crie seu Perfil</h3>
            <p>
              Detalhe sua história, habilidades, estatísticas e carregue seus
              melhores vídeos.
            </p>
          </div>
          <div className="feature-item">
            <h3>Visibilidade Ilimitada</h3>
            <p>
              Seja vista por clubes e olheiros de todo o Brasil buscando novos
              talentos.
            </p>
          </div>
          <div className="feature-item">
            <h3>Conexão Direta</h3>
            <p>
              Facilitamos o contato entre você e as equipes técnicas que querem
              te contratar.
            </p>
          </div>
        </div>
      </section>

      <section id="available-players" className="section">
        <h2>Jogadoras em Destaque</h2>
        <p>Conheça algumas das jogadoras que já estão no Passa a Bola.</p>

        <PlayerList limit={6} />

        <Link
          href="/buscar-talentos"
          className="btn btn-secondary"
          style={{ marginTop: "2rem" }}
        >
          Ver Todas as Jogadoras
        </Link>
      </section>
    </main>
  );
}