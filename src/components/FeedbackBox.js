import React from 'react';

function FeedbackBox({ message, type = 'success', onClose, showConsultButton, onConsult, actionLabel }) {
  const colors = {
    success: '#28a745',
    error: '#dc3545',
    info: '#dc3545', // vermelho para falha
    warning: '#ffc107',
  };

  return (
    <div
      style={{
        backgroundColor: colors[type] || colors.success,
        color: '#fff',
        padding: '16px 24px',
        borderRadius: '6px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '16px auto',
        maxWidth: 400,
        position: 'relative',
      }}
    >
      <span>{message}</span>
      {showConsultButton && type === 'success' && (
        <button
          style={{
            marginTop: 12,
            padding: '8px 16px',
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onClick={onConsult}
        >
          {actionLabel}
        </button>
      )}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 8,
            right: 12,
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: 18,
            cursor: 'pointer',
          }}
          aria-label="Fechar"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default FeedbackBox;
