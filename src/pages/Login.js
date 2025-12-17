import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bankoLogo from '../assets/banko.jpg';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usuario: '',
    senha: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recupera os dados do usuário do Local Storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Valida o usuário e a senha
    if (storedUser && storedUser.usuario === formData.usuario && storedUser.senha === formData.senha) {
      setError('');
      navigate(`/login/${formData.usuario}`); // Redireciona para a próxima tela
    } else {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div className="content-card">
      <header>
        <img src={bankoLogo} alt="Banko Logo" className="banko-logo" />
        <h1>Login</h1>
      </header>

      <section className="form-section">
        <form onSubmit={handleSubmit} className="form-container">
          <label className="form-label">
            Usuário:
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Senha:
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit"className="form-button">Login</button>
        </form>
      </section>
      <footer>
        <p>© 2025 - MVP Desenvolvimento Front-end Avançado - Marcelo Mendes de Sant'Anna</p>
      </footer>
    </div>
  );
}