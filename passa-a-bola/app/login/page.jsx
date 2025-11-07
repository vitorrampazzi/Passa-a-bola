"use client"; 

import { useState } from "react"; 
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("player");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Removemos a tipagem do "event"
  const handleSubmit = (event) => {
    event.preventDefault(); 

    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (email.trim() === "") {
      setEmailError("Por favor, digite seu email.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Por favor, digite um email válido.");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Por favor, digite sua senha.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("A senha deve ter no mínimo 6 caracteres.");
      isValid = false;
    }

    if (isValid) {
      console.log("Login Submetido:", { email, password, userType });
      alert(`Login simulado como ${userType} com sucesso!`);
    }
  };

  return (
    <main className="login-main">
      <div className="form-container">
        <h2>Bem-vindo(a) ao Passa a Bola!</h2>
        
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <span className="error-message">{passwordError}</span>
            )}
          </div>

          <div className="form-group user-type-selection">
            <label>Eu sou:</label>
            <div className="radio-group">
              <input
                type="radio"
                id="userTypePlayer"
                name="userType"
                value="player"
                checked={userType === "player"} 
                onChange={(e) => setUserType(e.target.value)}
              />
              <label htmlFor="userTypePlayer">Jogadora</label>

              <input
                type="radio"
                id="userTypeRecruiter"
                name="userType"
                value="recruiter"
                checked={userType === "recruiter"}
                onChange={(e) => setUserType(e.target.value)}
              />
              <label htmlFor="userTypeRecruiter">Olheiro / Clube</label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-secondary">
              Entrar
            </button>
          </div>
        </form>

        <div className="form-links">
          <Link href="/cadastrar-jogadora">Criar uma conta</Link>
        </div>
      </div>
    </main>
  );
}