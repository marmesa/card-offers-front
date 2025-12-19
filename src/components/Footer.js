import { useEffect, useState } from 'react';

export default function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer
      style={{
        marginTop: 32,
        textAlign: 'center',
        fontSize: '0.95rem',
        color: '#555',
        padding: '12px 0',
        background: 'transparent',
      }}
    >
      <p>
        © 2025 - MVP Desenvolvimento Front-end Avançado - Marcelo Mendes de Sant'Anna<br />
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </p>
    </footer>
  );
}
