import { useState } from 'react';

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowInput(false);
      setBgColor('white');
      return;
    }

    setBgColor('#1a1a1a');
  };

  const handleSearchClick = (e) => {
    e.stopPropagation();
    setShowInput(true);
    setBgColor('#1a1a1a');
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowInput(false);
      setBgColor('white');
    }
  };

  return (
    <section
      className="container"
      style={{
        backgroundColor: bgColor,
        width: 'min(360px, 90vw)',
        minHeight: '54px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        padding: '0 18px',
        borderRadius: '28px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
        transition: 'background-color 200ms ease, box-shadow 200ms ease',
        cursor: 'text',
      }}
      onClick={handleClick}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          autoFocus
          onKeyDown={handleInputKeyDown}
          style={{
            width: '100%',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            color: 'white',
            fontSize: '16px',
          }}
        />
      ) : (
        <button
          onClick={handleSearchClick}
          type="button"
          aria-label="Open search"
          aria-expanded={showInput}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 0,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: '#1a1a1a',
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              fill="currentColor"
              d="M10 2a8 8 0 015.96 13.13l4.39 4.39 1.41-1.41-4.39-4.39A8 8 0 1110 2zm0 2a6 6 0 104.24 10.24A6 6 0 0010 4z"
            />
          </svg>
        </button>
      )}
    </section>
  );
};

export default HiddenSearchBar;
