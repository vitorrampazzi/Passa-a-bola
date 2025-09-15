 /*
        ******************************************************************
        JAVASCRIPT PURO - LÓGICA DA PÁGINA DE PERFIL E AVALIAÇÃO POR ESTRELAS
        ******************************************************************
        */

        // Função para renderizar as estrelas de avaliação
        function renderStars(containerId, rating) {
            const container = document.getElementById(containerId);
            if (!container) return;

            container.innerHTML = ''; // Limpa o conteúdo existente

            const maxStars = 5;
            for (let i = 1; i <= maxStars; i++) {
                const star = document.createElement('span');
                star.classList.add('star');
                // Usa um caractere Unicode para a estrela
                star.innerHTML = '&#9733;'; // Estrela preenchida

                if (i <= rating) {
                    star.classList.add('selected'); // Estrela preenchida (cor amarela)
                } else {
                    star.classList.add('empty'); // Estrela vazia (cor cinza)
                }
                container.appendChild(star);
            }
        }

        // Simula uma avaliação vinda do "backend" ou de um banco de dados
        const playerCurrentRating = 4.5; // Exemplo: 4.5 de 5 estrelas

        // Renderiza as estrelas quando a página carregar
        document.addEventListener('DOMContentLoaded', () => {
            renderStars('playerRating', playerCurrentRating);
        });

        // --- Para um sistema de recomendação completo, o JavaScript puro precisaria: ---
        // 1. Enviar a avaliação do usuário para um servidor (Backend)
        //    Ex: usando `fetch()` para fazer uma requisição POST com a nova avaliação.
        // 2. Receber a média das avaliações do servidor para exibir.
        // 3. Implementar a lógica de 'hover' e 'click' para que o *usuário* possa dar a avaliação.
        //    (No momento, as estrelas são apenas para exibição da avaliação *existente*.)
        // 4. Armazenar a avaliação no navegador (localStorage/sessionStorage) para um feedback visual imediato.

        // Exemplo (comentado) de como a interação de clique poderia ser implementada para um usuário avaliador:
        /*
        document.addEventListener('DOMContentLoaded', () => {
            const ratingContainer = document.getElementById('playerRating');
            if (ratingContainer) {
                // Renderiza as estrelas inicialmente
                renderStars('playerRating', playerCurrentRating);

                ratingContainer.addEventListener('mouseover', (event) => {
                    if (event.target.classList.contains('star')) {
                        const stars = Array.from(ratingContainer.children);
                        const hoveredStarIndex = stars.indexOf(event.target);
                        stars.forEach((star, index) => {
                            if (index <= hoveredStarIndex) {
                                star.classList.add('hover-selected'); // Uma classe para hover
                            } else {
                                star.classList.remove('hover-selected');
                            }
                        });
                    }
                });

                ratingContainer.addEventListener('mouseout', () => {
                    const stars = Array.from(ratingContainer.children);
                    stars.forEach(star => star.classList.remove('hover-selected'));
                });

                ratingContainer.addEventListener('click', (event) => {
                    if (event.target.classList.contains('star')) {
                        const stars = Array.from(ratingContainer.children);
                        const clickedStarIndex = stars.indexOf(event.target);
                        const newRating = clickedStarIndex + 1; // 1-based rating

                        // Aqui você enviaria 'newRating' para o seu backend
                        console.log(`Nova avaliação: ${newRating} estrelas`);

                        // Atualiza a exibição local (simulando uma resposta do servidor)
                        playerCurrentRating = newRating; // Atualiza a variável global (apenas para este exemplo)
                        renderStars('playerRating', playerCurrentRating);
                    }
                });
            }
        });
        */