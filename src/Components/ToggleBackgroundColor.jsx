import { useState } from 'react'

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [textColor, setTextColor] = useState('#1b1b1b')
  const [buttonColor, setButtonColor] = useState('white')

  const handleClick = () => {
    const isLightTheme = backgroundColor === 'white'
    setBackgroundColor(isLightTheme ? '#1b1b1b' : 'white')
    setTextColor(isLightTheme ? '#ffa31a' : '#1b1b1b')
    setButtonColor(isLightTheme ? '#1b1b1b' : 'white')
  }

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        minHeight: '100vh',
        padding: '2rem',
        boxSizing: 'border-box',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonColor,
          color: textColor,
          border: `2px solid ${textColor}`,
          borderRadius: '6px',
          padding: '0.7rem 1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        {backgroundColor === '#1b1b1b' ? 'Light Theme' : 'Dark Theme'}
      </button>

      <h1 style={{ textAlign: 'center' }}>
        Welcome To A <br />
        Real World...
      </h1>
    </div>
  )
}

export default ToggleBackgroundColor
