import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import CardData from '../creditCards.json';

export default function ConfirmationScreen() {
  const { id } = useParams(); // Recupera o ID do cartão contratado da URL
  const navigate = useNavigate();
  const location = useLocation();
  const [card, setCard] = useState(null); // Dados do cartão contratado
  const [user, setUser] = useState(null); // Dados do cliente logado

  // Recupera os dados do cliente logado e do cartão contratado
  useEffect(() => {
    // Se não veio da Cards.js, redireciona para Cards.js e mostra mensagem
    if (!location.state || location.state.from !== 'cards') {
      navigate('/login/' + (user?.usuario || ''), { replace: true, state: { error: 'É necessário fazer login antes de acessar a contratação de cartão.' } });
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    // Recupera os dados do cartão contratado do arquivo creditCards.json
    const selectedCard = CardData.creditCards.find((c) => c.id === parseInt(id));
    setCard(selectedCard);
  }, [id, location.state, navigate]);

  return (
    <div className="content-card">
      <Header user={user} />

      <section className="main-Card">
        {card && (
          <div className="card-details">
            <h2>Detalhes do Cartão Contratado</h2>
            <img
              src={card.image[0]}
              alt={card.title}
              style={{ maxWidth: 300, height: 'auto', marginBottom: 16, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <p><strong>Nome do Cartão:</strong> {card.title}</p>
            <p><strong>Descrição:</strong> {card.description}</p>
            <p><strong>Anuidade:</strong> R${card.annuity.toFixed(2)}</p>
            <p><strong>Limite:</strong> R${card.limit.toFixed(2)}</p>
            <p><strong>Benefícios:</strong></p>
            <ul>
              {card.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {user && (
          <div className="user-details">
            <h2>Informações do Cliente</h2>
            <p><strong>Nome:</strong> {user.nome}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telefone:</strong> {user.telefone}</p>
            <p><strong>Renda:</strong> R${user.renda}</p>
          </div>
        )}
        {/* Botão Voltar usando BackButton */}
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <BackButton onClick={() => navigate(-1)} />
        </div>
      </section>

      <Footer />
    </div>
  );
}