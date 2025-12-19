import bankoLogo from '../assets/banko.jpg';

export default function Header({ user }) {
  return (
    <header
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        boxSizing: 'border-box',
        marginBottom: 32,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <img
          src={bankoLogo}
          alt="Banko Logo"
          className="banko-logo"
          style={{
            width: '125px',
            height: 'auto',
            marginLeft: 100,
            marginRight: 0,
            borderRadius: 12,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
          <h1
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              color: '#333',
              textAlign: 'left',
              margin: 0,
              wordBreak: 'break-word',
            }}
          >
            Banko
          </h1>
          {user && (
            <div className="user" style={{ fontSize: '1rem', color: '#333', marginTop: 4, textAlign: 'left' }}>
              Bem-vindo,<br />{user.nome}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
