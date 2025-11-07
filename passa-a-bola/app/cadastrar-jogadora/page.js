
"use client";

import { useState } from "react";
import Link from "next/link";


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


export default function RegisterPlayerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    nationality: "",
    currentClub: "",
    position: "",
    preferredFoot: "",
    bio: "",
    googleDriveLink: "",
    goals: "",
    assists: "",
    games: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);

  const [calculatedAge, setCalculatedAge] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleDateChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, dateOfBirth: value }));

    const age = calculateAge(value);
    if (age !== null && !isNaN(age) && age >= 0) {
      setCalculatedAge(`Idade: ${age} anos`);
      setErrors((prevErrors) => ({ ...prevErrors, dateOfBirth: "" })); 
    } else {
      setCalculatedAge("");
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    } else {
      setProfilePicture(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    let isValid = true;
    const newErrors = {}; 
    const {
      fullName,
      email,
      password,
      confirmPassword,
      position,
      preferredFoot,
      dateOfBirth,
      height,
      weight,
      nationality,
      bio,
      googleDriveLink,
      goals,
      assists,
      games,
    } = formData;

    if (fullName.trim() === "") {
      newErrors.fullName = "Por favor, digite seu nome completo.";
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Por favor, digite seu email.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Por favor, digite um email válido.";
      isValid = false;
    }

    if (password.trim() === "") {
      newErrors.password = "Por favor, digite sua senha.";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter no mínimo 6 caracteres.";
      isValid = false;
    }

    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Por favor, confirme sua senha.";
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
      isValid = false;
    }

    if (position === "") {
      newErrors.position = "Por favor, selecione sua posição principal.";
      isValid = false;
    }

    if (preferredFoot === "") {
      newErrors.preferredFoot = "Por favor, selecione seu pé preferencial.";
      isValid = false;
    }

    const age = calculateAge(dateOfBirth);
    if (dateOfBirth.trim() === "") {
      newErrors.dateOfBirth = "Por favor, digite sua data de nascimento.";
      isValid = false;
    } else if (age === null || isNaN(age) || age < 12) {
      newErrors.dateOfBirth = "A jogadora deve ter pelo menos 12 anos.";
      isValid = false;
    }

    if (height.trim() === "" || isNaN(height) || parseInt(height) < 120) {
      newErrors.height = "Altura inválida (mín. 120cm).";
      isValid = false;
    }

    if (weight.trim() === "" || isNaN(weight) || parseInt(weight) < 30) {
      newErrors.weight = "Peso inválido (mín. 30kg).";
      isValid = false;
    }

    if (nationality.trim() === "") {
      newErrors.nationality = "Por favor, digite sua nacionalidade.";
      isValid = false;
    }

    if (bio.trim().length < 50) {
      newErrors.bio = "A biografia deve ter no mínimo 50 caracteres.";
      isValid = false;
    }

    if (
      googleDriveLink.trim() !== "" &&
      !googleDriveLink.startsWith("https://drive.google.com")
    ) {
      newErrors.googleDriveLink = "Por favor, insira um link de Google Drive válido.";
      isValid = false;
    }
    
    if (goals.trim() !== "" && (isNaN(goals) || parseInt(goals) < 0)) {
        newErrors.goals = "Gols deve ser um número válido e não negativo.";
        isValid = false;
    }
    if (assists.trim() !== "" && (isNaN(assists) || parseInt(assists) < 0)) {
        newErrors.assists = "Assistências deve ser um número válido e não negativo.";
        isValid = false;
    }
    if (games.trim() !== "" && (isNaN(games) || parseInt(games) < 0)) {
        newErrors.games = "Jogos deve ser um número válido e não negativo.";
        isValid = false;
    }


    if (profilePicture) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(profilePicture.type)) {
        newErrors.profilePicture = "Apenas arquivos de imagem (JPG, PNG, GIF) são permitidos.";
        isValid = false;
      }
      if (profilePicture.size > 2 * 1024 * 1024) { // 2MB
        newErrors.profilePicture = "A imagem deve ter no máximo 2MB.";
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Registro de Jogadora Submetido:", {
        ...formData,
        profilePicture: profilePicture ? profilePicture.name : "Nenhuma imagem",
      });
      alert(
        `Cadastro de ${formData.fullName} realizado com sucesso! (Dados enviados para o console.)`
      );
    } else {
        console.log("Formulário inválido, verifique os erros:", newErrors);
    }
  };

  return (
    <main className="register-main">
      <div className="form-container large-form">
        <h2>Crie seu perfil de Jogadora no Passa a Bola</h2>
        
        <form id="registerForm" onSubmit={handleSubmit} noValidate>
          <div className="form-section-block">
            <h3>Informações de Acesso</h3>
            <div className="form-group">
              <label htmlFor="fullName">Nome Completo:</label>
              <input
                type="text"
                id="fullName"
                name="fullName" 
                placeholder="Seu nome completo"
                value={formData.fullName} 
                onChange={handleChange}
                required
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Senha:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirme sua senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
            </div>
          </div>

          <div className="form-section-block">
            <h3>Dados Pessoais e Físicos</h3>
            <div className="form-grid-3">
              <div className="form-group">
                <label htmlFor="dateOfBirth">Data de Nascimento:</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleDateChange}
                  required
                />
                {calculatedAge && <span className="calculated-age">{calculatedAge}</span>}
                {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="height">Altura (cm):</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  placeholder="Ex: 165"
                  min="120"
                  max="220"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
                {errors.height && <span className="error-message">{errors.height}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="weight">Peso (kg):</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  placeholder="Ex: 60"
                  min="30"
                  max="150"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
                {errors.weight && <span className="error-message">{errors.weight}</span>}
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="nationality">Nacionalidade:</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  placeholder="Ex: Brasileira"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                />
                {errors.nationality && <span className="error-message">{errors.nationality}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="currentClub">Clube Atual (se houver):</label>
                <input
                  type="text"
                  id="currentClub"
                  name="currentClub"
                  placeholder="Ex: Meu Clube FC"
                  value={formData.currentClub}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* --- Características de Jogo --- */}
          <div className="form-section-block">
            <h3>Características de Jogo</h3>
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="position">Posição Principal:</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma posição</option>
                  <option value="Goleira">Goleira</option>
                  <option value="Zagueira">Zagueira</option>
                  <option value="Lateral Direita">Lateral Direita</option>
                  <option value="Lateral Esquerda">Lateral Esquerda</option>
                  <option value="Meio-Campo">Meio-Campo</option>
                  <option value="Atacante">Atacante</option>
                </select>
                {errors.position && <span className="error-message">{errors.position}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="preferredFoot">Pé Preferencial:</label>
                <select
                  id="preferredFoot"
                  name="preferredFoot"
                  value={formData.preferredFoot}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um pé</option>
                  <option value="Direito">Direito</option>
                  <option value="Esquerdo">Esquerdo</option>
                  <option value="Ambos">Ambos</option>
                </select>
                {errors.preferredFoot && <span className="error-message">{errors.preferredFoot}</span>}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="bio">Breve Biografia / Estilo de Jogo:</label>
              <textarea
                id="bio"
                name="bio"
                rows="5"
                placeholder="Conte um pouco sobre você, seu estilo de jogo, suas qualidades..."
                value={formData.bio}
                onChange={handleChange}
                required
              ></textarea>
              {errors.bio && <span className="error-message">{errors.bio}</span>}
            </div>
          </div>

          <div className="form-section-block">
            <h3>Vídeos de Destaque</h3>
            <p className="form-help-text">
              Compartilhe links dos seus melhores momentos em campo.
            </p>
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="googleDriveLink">
                  Link de Vídeo (Google Drive):
                </label>
                <input
                  type="url"
                  id="googleDriveLink"
                  name="googleDriveLink"
                  placeholder="https://drive.google.com/file/d/seu-video"
                  value={formData.googleDriveLink}
                  onChange={handleChange}
                />
                {errors.googleDriveLink && <span className="error-message">{errors.googleDriveLink}</span>}
              </div>
            </div>
          </div>

          <div className="form-section-block">
            <h3>Estatísticas Principais</h3>
            <p className="form-help-text">Seja honesta sobre seus números!</p>
            <div className="form-grid-3">
              <div className="form-group">
                <label htmlFor="goals">Gols Marcados:</label>
                <input
                  type="number"
                  id="goals"
                  name="goals"
                  min="0"
                  placeholder="Ex: 25"
                  value={formData.goals}
                  onChange={handleChange}
                />
                {errors.goals && <span className="error-message">{errors.goals}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="assists">Assistências:</label>
                <input
                  type="number"
                  id="assists"
                  name="assists"
                  min="0"
                  placeholder="Ex: 10"
                  value={formData.assists}
                  onChange={handleChange}
                />
                {errors.assists && <span className="error-message">{errors.assists}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="games">Jogos Disputados:</label>
                <input
                  type="number"
                  id="games"
                  name="games"
                  min="0"
                  placeholder="Ex: 50"
                  value={formData.games}
                  onChange={handleChange}
                />
                {errors.games && <span className="error-message">{errors.games}</span>}
              </div>
            </div>
          </div>

          <div className="form-section-block">
            <h3>Foto de Perfil</h3>
            <div className="form-group">
              <label htmlFor="profilePicture">Selecione sua foto:</label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
              />
              {errors.profilePicture && <span className="error-message">{errors.profilePicture}</span>}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-secondary">
              Criar Perfil
            </button>
          </div>
        </form>

        <div className="form-links">
          <span>Já tem uma conta?</span>
          <Link href="/login">Faça login</Link>
        </div>
      </div>
    </main>
  );
}