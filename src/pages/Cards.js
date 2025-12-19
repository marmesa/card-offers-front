import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CardData from "../creditCards.json";
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import FeedbackBox from '../components/FeedbackBox';

export default function Cards() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cardList, setCardList] = useState(CardData.creditCards);
  const [selectedCard, setSelectedCard] = useState(null);
  const [user, setUser] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    // Se não veio da Login.js, redireciona para Login.js e mostra mensagem
    if (!location.state || location.state.from !== 'login') {
      navigate('/login', { replace: true, state: { error: 'É necessário fazer login antes de acessar a seleção de cartão.' } });
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      // Seleciona o cartão cujo limite é mais próximo da renda do usuário
      if (storedUser.renda) {
        const renda = parseFloat(storedUser.renda);
        let bestCard = null;
        let minDiff = Infinity;
        let bestIdx = 0;
        CardData.creditCards.forEach((card, idx) => {
          const limite = parseFloat(card.limit);
          const diff = Math.abs(limite - renda);
          if (diff < minDiff) {
            minDiff = diff;
            bestCard = card;
            bestIdx = idx;
          }
        });
        setSelectedCard(bestCard);
        setCarouselIndex(bestIdx);
      }
    }
  }, [location.state, navigate]);

  return (
    <div className="content-card">
      <Header user={user} />

      <section className="main-Card">
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Escolha o seu cartão</h2>
        <Carousel activeIndex={carouselIndex} onSelect={idx => {
          setCarouselIndex(idx);
          setSelectedCard(cardList[idx]);
        }}>
          {cardList.map((card, idx) => (
            <Carousel.Item key={card.id} style={{ paddingBottom: 64 }}>
              <img
                className="d-block w-100"
                src={card.image[0]}
                alt={card.title}
                style={{ maxHeight: 300, objectFit: "contain" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {selectedCard && (
          <div className="card-description">
            <h2>{selectedCard.title}</h2>
            <p><strong>Descrição:</strong> {selectedCard.description}</p>
            <p><strong>Anuidade:</strong> R$ {selectedCard.annuity?.toFixed(2)}</p>
            <p><strong>Limite:</strong> R$ {selectedCard.limit?.toFixed(2)}</p>
            <p><strong>Nota:</strong> {selectedCard.rating ?? '-'}</p>
            <p><strong>Benefícios:</strong></p>
            <ul>
              {selectedCard.benefits?.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            {showFeedback === 'success' && (
              <FeedbackBox
                message={"Cartão contratado com sucesso!"}
                type="success"
                onClose={() => setShowFeedback(false)}
                showConsultButton={true}
                actionLabel={"Consultar mais informações"}
                onConsult={() => {
                  setShowFeedback(false);
                  navigate(`/login/${user?.usuario}/${selectedCard.id}`, { state: { from: 'cards' } });
                }}
              />
            )}
            {!showFeedback && (
              <div className="d-grid gap-2" style={{ marginTop: 16 }}>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ width: '100%' }}
                  onClick={() => {
                    if (parseFloat(user?.renda) < parseFloat(selectedCard.limit)) {
                      setShowFeedback('info');
                      setTimeout(() => setShowFeedback(false), 3000);
                    } else {
                      setShowFeedback('success');
                    }
                  }}
                >
                  Contratar
                </Button>
              </div>
            )}
            {showFeedback === 'info' && (
              <FeedbackBox
                message={"Não é possível contratar este cartão. Sua renda é menor que o limite exigido. Escolha outro cartão ou aumente sua renda."}
                type="info"
                onClose={() => setShowFeedback(false)}
              />
            )}
          </div>
        )}
        {/* Botão Voltar usando BackButton */}
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <BackButton onClick={() => navigate('/login')} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
