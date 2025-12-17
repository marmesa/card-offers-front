import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bankoLogo from '../assets/banko.jpg';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    usuário: '',
    senha: '',
    email: '',
    cep: '',
    endereco: '',
    telefone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);

    // Salva os dados do usuário no Local Storage
    localStorage.setItem('user', JSON.stringify(formData));
    
    navigate('/login'); // Redireciona para a página de login após o cadastro
  };

  return (
    <div className="content-card">
      <header>
        <img src={bankoLogo} alt="Banko Logo" className="banko-logo" />
        <h1>Cadastre-se</h1>
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
          <label className="form-label">
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            CEP:
            <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Endereço:
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Telefone:
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <button type="submit" className="form-button">Cadastrar</button>
        </form>
      </section>

      <footer>
        <p>© 2025 - MVP Desenvolvimento Front-end Avançado - Marcelo Mendes de Sant'Anna</p>
      </footer>
    </div>
  );
}