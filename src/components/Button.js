import Button from 'react-bootstrap/Button';

// Componente reutilizável para botão em bloco
function BlockButton({ children, variant = "primary", size = "lg", onClick, style, ...props }) {
  return (
    <div className="d-grid gap-2" style={{ width: '100%' }}>
      <Button
        variant={variant}
        size={size}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#ffffff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          alignSelf: 'center',
          ...style
        }}
        onClick={onClick}
        onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.target.style.backgroundColor = '#007bff'}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}

export default BlockButton;