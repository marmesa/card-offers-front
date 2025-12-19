import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import BlockButton from '../components/Button';
import FeedbackBox from '../components/FeedbackBox';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usuario: '',
    senha: '',
  });
  const [error, setError] = useState('');
  const [showFeedback, setShowFeedback] = useState(null); // null | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.usuario === formData.usuario && storedUser.senha === formData.senha) {
      setError('');
      setShowFeedback('success');
    } else {
      setError('Usuário ou senha inválidos.');
      setShowFeedback('error');
      setTimeout(() => setShowFeedback(null), 3000);
    }
  };

  return (
    <div className="content-card">
      <Header user={null} />
      <section className="form-section">
        {showFeedback === 'success' && (
          <FeedbackBox
            message={"Login realizado com sucesso!"}
            type="success"
            showConsultButton={true}
            actionLabel={"Escolha o cartão de crédito ideal para você."}
            onConsult={() => {
              setShowFeedback(null);
              navigate(`/login/${formData.usuario}`, { state: { from: 'login' } });
            }}
            onClose={() => setShowFeedback(null)}
          />
        )}
        {showFeedback === 'error' && (
          <FeedbackBox
            message={"Usuário ou senha inválidos. "}
            type="error"
            onClose={() => setShowFeedback(null)}
          />
        )}
        {!showFeedback && (
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
            <BlockButton type="submit">Login</BlockButton>
          </form>
        )}
        {/* Botão Voltar usando BackButton */}
        {!showFeedback && (
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <BackButton onClick={() => navigate('/')} />
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
