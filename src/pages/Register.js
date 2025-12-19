import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FeedbackBox from '../components/FeedbackBox';
import Footer from '../components/Footer';
import BlockButton from '../components/Button';

export default function Register() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    usuario: '',
    senha: '',
    email: '',
    telefone: '',
    renda: '',
  });
  const [feedback, setFeedback] = useState({ show: false, message: '', type: 'success', showLoginButton: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === 'telefone') {
      // Remove non-digits
      const digits = value.replace(/\D/g, '');
      if (digits.length === 11) {
        // Format to (99) 99999-9999
        newValue = `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7,11)}`;
      } else {
        newValue = value;
      }
    }
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validações
    if (formData.senha.length < 6) {
      setFeedback({ show: true, message: 'A senha deve ter no mínimo 6 dígitos.', type: 'error', showLoginButton: false });
      return;
    }
    if (!formData.email.includes('@')) {
      setFeedback({ show: true, message: 'O email deve conter "@".', type: 'error', showLoginButton: false });
      return;
    }
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phoneRegex.test(formData.telefone)) {
      setFeedback({ show: true, message: 'O telefone deve estar no formato (61) 91234-5678.', type: 'error', showLoginButton: false });
      return;
    }
    // Salva os dados do usuário no Local Storage
    try {
      localStorage.setItem('user', JSON.stringify(formData));
      setFeedback({ show: true, message: 'Cadastro realizado com sucesso!', type: 'success', showLoginButton: true });
    } catch (err) {
      setFeedback({ show: true, message: 'Erro ao realizar cadastro. Tente novamente.', type: 'error', showLoginButton: false });
    }
  };

  return (
    <div className="content-card">
      <Header user={null} />
      <section className="form-section">
        {feedback.show && (
          <FeedbackBox
            message={feedback.message}
            type={feedback.type}
            onClose={() => setFeedback({ ...feedback, show: false })}
            showConsultButton={feedback.showLoginButton}
            actionLabel="Ir para tela de login."
            onConsult={() => navigate('/login')}
          />
        )}
        <form onSubmit={handleSubmit} className="form-container">
          {/* ...existing code... */}
          <label className="form-label">
            Usuário:
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="marcelo123"
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
              placeholder="123456"
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
              placeholder="Marcelo Mendes"
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
              placeholder="marcelo@gmail.com"
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
              placeholder="(61) 91234-5678"
            />
          </label>
          <label className="form-label">
            Renda:
            <input
              type="number"
              name="renda"
              value={formData.renda}
              onChange={handleChange}
              required
              className="form-input"
              min="0"
              step="0.01"
              placeholder="5000.00"
            />
          </label>
          <BlockButton type="submit">Cadastrar</BlockButton>
        </form>
      </section>
      <Footer />
    </div>
  );
}