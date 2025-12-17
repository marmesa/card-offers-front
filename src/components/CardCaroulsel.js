export default function CardCarousel({ cards, onSelect }) {
  return (
    <div style={{ display: "flex", gap: 16, overflowX: "auto" }}>
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => onSelect(card)}
          style={{
            minWidth: 180,
            cursor: "pointer",
            borderRadius: 12,
            padding: 8,
            border: "2px solid transparent",
            transition: "0.2s",
          }}
        >
          <img
            src={card.image[0]}
            alt={card.name}
            style={{ width: "100%", borderRadius: 12 }}
          />
        </div>
      ))}
    </div>
  );
}