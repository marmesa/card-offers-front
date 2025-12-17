import { useEffect, useState } from "react";
import CardData from "../creditCards.json";
import Carousel from 'react-bootstrap/Carousel';
import bankoLogo from '../assets/banko.jpg';

export default function Cards() {
  const [cardList, setCardList] = useState(CardData.creditCards);
  const [selectedCard, setSelectedCard] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="content-card">
      <header>
        <div className="user">
          {user && (
            <span>
              Bem-vindo, {user.nome} ({user.email})
            </span>
          )}
        </div>
      </header>

      <section className="main-Card">
        <Carousel onSelect={idx => setSelectedCard(cardList[idx])}>
          {cardList.map((card, idx) => (
            <Carousel.Item key={card.id}>
              <img
                className="d-block w-100"
                src={card.image[0]}
                alt={card.title}
                style={{ maxHeight: 300, objectFit: "contain" }}
              />
              <Carousel.Caption>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {selectedCard && (
          <div className="card-description">
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.description}</p>
          </div>
        )}
      </section>

      <footer></footer>
    </div>
  );
}