function renderStars(containerId, rating) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const maxStars = 5;
    for (let i = 1; i <= maxStars; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = '&#9733;';
        if (i <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.add('empty');
        }
        container.appendChild(star);
    }
}

function calculateAge(dobString) {
    if (!dobString) return null;
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

const playerCurrentRating = 4.5;

function loadPlayerCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`[loadPlayerCards] Contêiner com ID '${containerId}' não encontrado.`);
        return;
    }
    console.log(`[loadPlayerCards] Carregando cards para o contêiner: '${containerId}'`);
    const players = [
        {
            name: "Maria Silva",
            position: "Atacante",
            age: 20,
            photo: "../img/mulher1.jpg",
            profileLink: "perfil_jogadora.html?id=maria-silva"
        },
        {
            name: "Ana Santos",
            position: "Meio-Campo",
            age: 22,
            photo: "../img/mulher2.jpg",
            profileLink: "perfil_jogadora.html?id=ana-santos"
        },
        {
            name: "Beatriz Costa",
            position: "Zagueira",
            age: 19,
            photo: "../img/mulher3.jpg",
            profileLink: "perfil_jogadora.html?id=beatriz-costa"
        },
        {
            name: "Carla Oliveira",
            position: "Goleira",
            age: 25,
            photo: "../img/mulher3.jpg",
            profileLink: "perfil_jogadora.html?id=carla-oliveira"
        },
        {
            name: "Daniela Pereira",
            position: "Lateral Esquerda",
            age: 21,
            photo: "../img/mulher2.jpg",
            profileLink: "perfil_jogadora.html?id=daniela-pereira"
        },
        {
            name: "Fernanda Lima",
            position: "Atacante",
            age: 18,
            photo: "../img/mulher1.jpg",
            profileLink: "perfil_jogadora.html?id=fernanda-lima"
        },
    ];
    container.innerHTML = '';
    players.forEach((player, index) => {
        const card = document.createElement('div');
        card.classList.add('player-card');
        const imgElement = new Image();
        imgElement.src = player.photo;
        imgElement.alt = `Foto de ${player.name}`;
        imgElement.classList.add('player-card-photo');
        imgElement.onerror = () => {
            console.error(`[loadPlayerCards] ERRO: Imagem para ${player.name} (${player.photo}) não encontrada!`);
        };
        imgElement.onload = () => {
            console.log(`[loadPlayerCards] Imagem para ${player.name} (${player.photo}) carregada com sucesso.`);
        };
        card.innerHTML = `
            <h3>${player.name}</h3>
            <p class="player-card-position">${player.position} - ${player.age} anos</p>
            <div class="player-card-actions">
                <a href="${player.profileLink}" class="btn btn-small btn-secondary">Ver Perfil</a>
            </div>
        `;
        card.prepend(imgElement);
        container.appendChild(card);
        console.log(`[loadPlayerCards] Card da jogadora ${player.name} (Índice: ${index}) adicionado.`);
    });
    console.log(`[loadPlayerCards] Finalizou o carregamento de ${players.length} cards.`);
}

async function loadPage(url, pushState = true) {
    console.log(`[loadPage] Tentando carregar: ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newMain = doc.querySelector('main');
        const newTitle = doc.querySelector('title').textContent;
        if (newMain) {
            const currentMain = document.querySelector('main');
            if (currentMain) {
                currentMain.classList.remove('content-entering');
                void currentMain.offsetWidth;
                currentMain.innerHTML = newMain.innerHTML;
                document.title = newTitle;
                currentMain.classList.add('content-entering');
            } else {
                console.error('[loadPage] Elemento <main> atual não encontrado no DOM! Recarregando página completa.');
                window.location.href = url;
                return;
            }
            if (pushState) {
                history.pushState({ path: url }, newTitle, url);
            }
            console.log(`[loadPage] Página '${url}' carregada e DOM atualizado. Inicializando scripts específicos...`);
            initPageSpecificScripts();
            window.scrollTo(0, 0);
        } else {
            console.error('[loadPage] Conteúdo <main> não encontrado na página carregada por AJAX. Recarregando página completa.');
            window.location.href = url;
        }
    } catch (error) {
        console.error('[loadPage] Erro ao carregar a página via AJAX. Recarregando página completa:', error);
        window.location.href = url;
    }
}

function setupLoginFormValidation() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        console.log('[setupLoginFormValidation] Formulário de Login encontrado.');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;
            emailError.textContent = '';
            passwordError.textContent = '';
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Por favor, digite seu email.';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
                emailError.textContent = 'Por favor, digite um email válido.';
                isValid = false;
            }
            if (passwordInput.value.trim() === '') {
                passwordError.textContent = 'Por favor, digite sua senha.';
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                passwordError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
                isValid = false;
            }
            const selectedUserType = document.querySelector('input[name="userType"]:checked');
            const userType = selectedUserType ? selectedUserType.value : 'unknown';
            if (isValid) {
                console.log('Login Submetido:', {
                    email: emailInput.value,
                    password: passwordInput.value,
                    userType: userType
                });
                alert(`Login simulado como ${userType} com sucesso!`);
            }
        });
    }
}

function setupRegistrationFormValidation() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        console.log('[setupRegistrationFormValidation] Formulário de Registro de Jogadora encontrado.');
        const fullNameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const positionInput = document.getElementById('position');
        const preferredFootInput = document.getElementById('preferredFoot');
        const dateOfBirthInput = document.getElementById('dateOfBirth');
        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');
        const nationalityInput = document.getElementById('nationality');
        const bioInput = document.getElementById('bio');
        const youtubeLinkInput = document.getElementById('youtubeLink');
        const googleDriveLinkInput = document.getElementById('googleDriveLink');
        const goalsInput = document.getElementById('goals');
        const assistsInput = document.getElementById('assists');
        const gamesInput = document.getElementById('games');
        const profilePictureInput = document.getElementById('profilePicture');
        const calculatedAgeDisplay = document.getElementById('calculatedAgeDisplay');

        if (dateOfBirthInput && calculatedAgeDisplay) {
            dateOfBirthInput.addEventListener('input', () => {
                const age = calculateAge(dateOfBirthInput.value);
                if (age !== null && !isNaN(age) && age >= 0) {
                    calculatedAgeDisplay.textContent = `Idade: ${age} anos`;
                    document.getElementById('dateOfBirthError').textContent = '';
                } else {
                    calculatedAgeDisplay.textContent = '';
                }
            });
            if (dateOfBirthInput.value) {
                 const age = calculateAge(dateOfBirthInput.value);
                 if (age !== null && !isNaN(age) && age >= 0) {
                     calculatedAgeDisplay.textContent = `Idade: ${age} anos`;
                 }
            }
        }

        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(el => el.textContent = '');

            if (fullNameInput.value.trim() === '') {
                document.getElementById('fullNameError').textContent = 'Por favor, digite seu nome completo.';
                isValid = false;
            }

            if (emailInput.value.trim() === '') {
                document.getElementById('emailError').textContent = 'Por favor, digite seu email.';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
                document.getElementById('emailError').textContent = 'Por favor, digite um email válido.';
                isValid = false;
            }

            if (passwordInput.value.trim() === '') {
                document.getElementById('passwordError').textContent = 'Por favor, digite sua senha.';
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                document.getElementById('passwordError').textContent = 'A senha deve ter no mínimo 6 caracteres.';
                isValid = false;
            }

            if (confirmPasswordInput.value.trim() === '') {
                document.getElementById('confirmPasswordError').textContent = 'Por favor, confirme sua senha.';
                isValid = false;
            } else if (passwordInput.value !== confirmPasswordInput.value) {
                document.getElementById('confirmPasswordError').textContent = 'As senhas não coincidem.';
                isValid = false;
            }

            if (positionInput.value === '') {
                document.getElementById('positionError').textContent = 'Por favor, selecione sua posição principal.';
                isValid = false;
            }

            if (preferredFootInput.value === '') {
                document.getElementById('preferredFootError').textContent = 'Por favor, selecione seu pé preferencial.';
                isValid = false;
            }

            const age = calculateAge(dateOfBirthInput.value);
            if (dateOfBirthInput.value.trim() === '') {
                document.getElementById('dateOfBirthError').textContent = 'Por favor, digite sua data de nascimento.';
                isValid = false;
            } else if (age === null || isNaN(age) || age < 12) {
                document.getElementById('dateOfBirthError').textContent = 'A jogadora deve ter pelo menos 12 anos.';
                isValid = false;
            }

            if (heightInput.value.trim() === '' || isNaN(heightInput.value) || parseInt(heightInput.value) < 120) {
                document.getElementById('heightError').textContent = 'Altura inválida (mín. 120cm).';
                isValid = false;
            }

            if (weightInput.value.trim() === '' || isNaN(weightInput.value) || parseInt(weightInput.value) < 30) {
                document.getElementById('weightError').textContent = 'Peso inválido (mín. 30kg).';
                isValid = false;
            }
            
            if (nationalityInput.value.trim() === '') {
                document.getElementById('nationalityError').textContent = 'Por favor, digite sua nacionalidade.';
                isValid = false;
            }

            if (bioInput.value.trim().length < 50) {
                document.getElementById('bioError').textContent = 'A biografia deve ter no mínimo 50 caracteres.';
                isValid = false;
            }
            if (youtubeLinkInput.value.trim() !== '' && !youtubeLinkInput.checkValidity()) {
                document.getElementById('youtubeLinkError').textContent = 'Por favor, insira um link de YouTube válido.';
                isValid = false;
            }
            if (googleDriveLinkInput.value.trim() !== '' && !googleDriveLinkInput.checkValidity()) {
                document.getElementById('googleDriveLinkError').textContent = 'Por favor, insira um link de Google Drive válido.';
                isValid = false;
            }
            if (goalsInput.value.trim() !== '' && (isNaN(goalsInput.value) || parseInt(goalsInput.value) < 0)) {
                document.getElementById('goalsError').textContent = 'Gols deve ser um número válido e não negativo.';
                isValid = false;
            }
            if (assistsInput.value.trim() !== '' && (isNaN(assistsInput.value) || parseInt(assistsInput.value) < 0)) {
                document.getElementById('assistsError').textContent = 'Assistências deve ser um número válido e não negativo.';
                isValid = false;
            }
            if (gamesInput.value.trim() !== '' && (isNaN(gamesInput.value) || parseInt(gamesInput.value) < 0)) {
                document.getElementById('gamesError').textContent = 'Jogos deve ser um número válido e não negativo.';
                isValid = false;
            }
            if (profilePictureInput.files.length > 0) {
                const file = profilePictureInput.files[0];
                const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
                if (!allowedTypes.includes(file.type)) {
                    document.getElementById('profilePictureError').textContent = 'Apenas arquivos de imagem (JPG, PNG, GIF) são permitidos.';
                    isValid = false;
                }
                if (file.size > 2 * 1024 * 1024) {
                    document.getElementById('profilePictureError').textContent = 'A imagem deve ter no máximo 2MB.';
                    isValid = false;
                }
            }
            if (isValid) {
                const formData = {
                    fullName: fullNameInput.value,
                    email: emailInput.value,
                    position: positionInput.value,
                    preferredFoot: preferredFootInput.value,
                    dateOfBirth: dateOfBirthInput.value,
                    age: age,
                    height: heightInput.value,
                    weight: weightInput.value,
                    nationality: nationalityInput.value,
                    bio: bioInput.value,
                    youtubeLink: youtubeLinkInput.value,
                    googleDriveLink: googleDriveLinkInput.value,
                    goals: goalsInput.value,
                    assists: assistsInput.value,
                    games: gamesInput.value,
                    currentClub: document.getElementById('currentClub').value,
                    profilePicture: profilePictureInput.files.length > 0 ? profilePictureInput.files[0].name : 'Nenhuma imagem'
                };
                console.log('Registro de Jogadora Submetido:', formData);
                alert(`Cadastro de ${fullNameInput.value} realizado com sucesso! (Dados enviados para o console.)`);
            }
        });
    }
}

function setupPlayerProfilePage() {
    const playerRatingContainer = document.getElementById('playerRating');
    if (playerRatingContainer) {
        console.log('[setupPlayerProfilePage] Contêiner de avaliação de jogador encontrado.');
        const playerCurrentRating = 4.5;
        renderStars('playerRating', playerCurrentRating);
    }
}

function setupTalentSearchPage() {
    const playerListings = document.getElementById('playerListings');
    if (playerListings) {
        console.log('[setupTalentSearchPage] Contêiner de listagem de jogadoras (playerListings) encontrado. Carregando cards...');
        loadPlayerCards('playerListings');
    } else {
        console.warn('[setupTalentSearchPage] Contêiner de listagem de jogadoras (playerListings) NÃO encontrado.');
    }
}

function initPageSpecificScripts() {
    console.log('[initPageSpecificScripts] Inicializando scripts para a página atual.');
    setupLoginFormValidation();
    setupRegistrationFormValidation();
    setupPlayerProfilePage();
    
    if (document.querySelector('main.talents-main')) {
        console.log('[initPageSpecificScripts] Página é "Buscar Talentos".');
        setupTalentSearchPage();
    }
    const featuredGrid = document.getElementById('available-players-grid');
    if (featuredGrid) {
        console.log('[initPageSpecificScripts] Seção "Jogadoras em Destaque" na Home encontrada. Carregando cards...');
        loadPlayerCards('available-players-grid');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('[DOMContentLoaded] DOM completamente carregado. Configurando listeners globais e scripts iniciais.');
    document.body.addEventListener('click', event => {
        const { target } = event;
        if (target.tagName === 'A' &&
            target.origin === window.location.origin &&
            !target.hash &&
            !target.classList.contains('btn') &&
            !target.classList.contains('btn-small')) {
            
            event.preventDefault();
            loadPage(target.href);
        } else if (target.tagName === 'BUTTON' && target.form && target.form.id) {
            return; 
        }
    });
    document.body.addEventListener('click', event => {
        const { target } = event;
        if (target.tagName === 'A' && target.hash) {
            const targetId = target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });

    window.addEventListener('popstate', event => {
        console.log('[popstate] Evento popstate disparado. Carregando estado anterior do histórico.');
        if (event.state && event.state.path) {
            loadPage(event.state.path, false);
        } else {
            loadPage(window.location.href, false);
        }
    });

    initPageSpecificScripts();
});