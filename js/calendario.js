console.log("JSSSSSS");

const url = 'https://api.football-data.org/v4/competitions/BRF/fixtures'
const API_KEY = '9d0e6448d94f4a89955b28bbc3896865';
const season = 2024;

let leagueId;
let titulo;

if (path.includes("BrasileiraoA.html")) {
  leagueId = 1109;
  titulo = "Brasileirão Feminino A1";
} else if (path.includes("ChampionsLeague.html")) {
  leagueId = 1281;
  titulo = "UEFA Women's Champions League";
} else {
  document.getElementById("jogos").innerText = "Liga não reconhecida.";
}

document.getElementById("titulo").innerText = titulo;

if (leagueId) {
  fetch(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=${season}`, {
    headers: {
      "x-apisports-key": API_KEY
    }
  })
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("jogos");
      container.innerHTML = "";

      if (data.response.length === 0) {
        container.innerText = "Nenhum jogo encontrado.";
        return;
      }

      data.response.forEach(jogo => {
        const jogoEl = document.createElement("div");
        jogoEl.className = "jogo";

        const timeCasa = jogo.teams.home;
        const timeFora = jogo.teams.away;
        const dataHora = new Date(jogo.fixture.date).toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });

        jogoEl.innerHTML = `
          <div class="time"><img src="${timeCasa.logo}" alt=""> ${timeCasa.name}</div>
          <div class="versus">x</div>
          <div class="time">${timeFora.name} <img src="${timeFora.logo}" alt=""></div>
          <div class="data">${dataHora}</div>
        `;

        container.appendChild(jogoEl);
      });
    })
    .catch(err => {
      console.error(err);
      document.getElementById("jogos").innerText = "Erro ao carregar os jogos.";
    });
}