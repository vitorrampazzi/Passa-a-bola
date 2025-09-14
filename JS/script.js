
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') { // Garante que não é apenas '#'
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Habilita a rolagem suave
                    });
                }
            }
        });
    });

});


// Função para configurar a validação do formulário de login
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

            // Validação de email
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Por favor, digite seu email.';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
                emailError.textContent = 'Por favor, digite um email válido.';
                isValid = false;
            }

            // Validação de senha
            if (passwordInput.value.trim() === '') {
                passwordError.textContent = 'Por favor, digite sua senha.';
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                passwordError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
                isValid = false;
            }

            // Pega o tipo de usuário selecionado
            const selectedUserType = document.querySelector('input[name="userType"]:checked');
            const userType = selectedUserType ? selectedUserType.value : 'unknown'; // 'player' ou 'recruiter'

            if (isValid) {
                console.log('Login Submetido:', {
                    email: emailInput.value,
                    password: passwordInput.value,
                    userType: userType // Inclui o tipo de usuário
                });
                alert(`Login simulado como ${userType} com sucesso!`);
                // Em um projeto real, aqui você enviaria os dados para o servidor (incluindo userType)
                // e redirecionaria o usuário para o dashboard apropriado (jogadora ou recrutador).
            }
        });
    }
}

// ... (o restante do seu script.js permanece o mesmo) ...