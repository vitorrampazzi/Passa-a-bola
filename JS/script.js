
async function loadPage(url, pushState = true) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const newMain = doc.querySelector('main');
        const newTitle = doc.querySelector('title').textContent;

        if (newMain) {
            const currentMain = document.querySelector('main');

            currentMain.classList.remove('content-entering');
            void currentMain.offsetWidth; 
            
            currentMain.innerHTML = newMain.innerHTML;
            document.title = newTitle;
            
            currentMain.classList.add('content-entering');

            if (pushState) {
                history.pushState({ path: url }, newTitle, url);
            }

            initPageSpecificScripts();
            window.scrollTo(0, 0);

        } else {
            console.error('Conteúdo <main> não encontrado na página carregada:', url);
            window.location.href = url;
        }

    } catch (error) {
        console.error('Erro ao carregar a página:', error);
        window.location.href = url;
    }
}

function setupLoginFormValidation() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
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


            if (dateOfBirthInput.value.trim() === '') {
                document.getElementById('dateOfBirthError').textContent = 'Por favor, digite sua data de nascimento.';
                isValid = false;
            } else {
                const dob = new Date(dateOfBirthInput.value);
                const today = new Date();
                let age = today.getFullYear() - dob.getFullYear();
                const m = today.getMonth() - dob.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                    age--;
                }
                if (age < 12) { 
                    document.getElementById('dateOfBirthError').textContent = 'A jogadora deve ter pelo menos 12 anos.';
                    isValid = false;
                }
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
                if (file.size > 2 * 1024 * 1024) { // 2MB
                    document.getElementById('profilePictureError').textContent = 'A imagem deve ter no máximo 2MB.';
                    isValid = false;
                }
            }


            if (isValid) {
                const formData = {
                    fullName: fullNameInput.value,
                    email: emailInput.value,
                    
                    preferredFoot: preferredFootInput.value,
                    dateOfBirth: dateOfBirthInput.value,
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


function setupPlayerProfilePage() {
    const playerRatingContainer = document.getElementById('playerRating');
    if (playerRatingContainer) {
        const playerCurrentRating = 4.5;
        renderStars('playerRating', playerCurrentRating);
    }
}


function initPageSpecificScripts() {
    setupLoginFormValidation();
    setupRegistrationFormValidation();
    setupPlayerProfilePage();
}


document.addEventListener('DOMContentLoaded', () => {
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
        if (event.state && event.state.path) {
            loadPage(event.state.path, false);
        } else {
            loadPage(window.location.href, false);
        }
    });

    initPageSpecificScripts();
});