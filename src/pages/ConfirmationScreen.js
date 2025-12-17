import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ConfirmationScreen() {
  const { id } = useParams(); // Recupera o ID do cartão contratado da URL
  const [card, setCard] = useState(null); // Dados do cartão contratado
  const [user, setUser] = useState(null); // Dados do cliente logado

  // Recupera os dados do cliente logado e do cartão contratado
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }

    // Recupera os dados do cartão contratado (simulação)
    const storedCards = JSON.parse(localStorage.getItem("creditCards"));
    if (storedCards) {
      const selectedCard = storedCards.find((c) => c.id === parseInt(id));
      setCard(selectedCard);
    }
  }, [id]);

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
        {card && (
          <div className="card-details">
            <h2>Detalhes do Cartão Contratado</h2>
            <p><strong>Nome do Cartão:</strong> {card.title}</p>
            <p><strong>Descrição:</strong> {card.description}</p>
            <p><strong>Anuidade:</strong> R$ {card.annuity.toFixed(2)}</p>
            <p><strong>Limite:</strong> R$ {card.limit.toFixed(2)}</p>
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
            <p><strong>CEP:</strong> {user.cep}</p>
            <p><strong>Endereço:</strong> {user.endereco}</p>
            <p><strong>Telefone:</strong> {user.telefone}</p>
          </div>
        )}
      </section>

      <footer></footer>
    </div>
  );
}