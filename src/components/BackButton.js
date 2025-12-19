import React from 'react';

export default function BackButton({ onClick, children = 'Voltar', style = {} }) {
  return (
    <button
      type="button"
      style={{
        padding: '8px 24px',
        fontSize: '16px',
        backgroundColor: '#6c757d',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
