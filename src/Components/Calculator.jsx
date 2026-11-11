import { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const display = (value) => {
    setInputValue((prev) => prev + value);
  };

  const calculator = () => {
    try {
      setInputValue(String(eval(inputValue)));
    } catch {
      setInputValue('Error');
    }
  };

  const clear = () => setInputValue('');

  return (
    <>
      <style>{`
        .calculator {
          width: min(100%, 320px);
          margin: 2rem auto;
          padding: 1rem;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.65rem;
          border-radius: 1rem;
          background: #18212f;
          box-shadow: 0 12px 30px rgb(15 23 42 / 25%);
        }
        .calculator .value {
          grid-column: 1 / -1;
          width: 100%;
          box-sizing: border-box;
          padding: 1rem;
          margin-bottom: 0.35rem;
          border: 0;
          border-radius: 0.65rem;
          background: #f8fafc;
          color: #172033;
          font-size: 1.8rem;
          text-align: right;
        }
        .calculator > span {
          min-height: 3.25rem;
          display: grid;
          place-items: center;
          border-radius: 0.65rem;
          background: #334155;
          color: #fff;
          font-size: 1.15rem;
          cursor: pointer;
          user-select: none;
          transition: background 150ms ease, transform 150ms ease;
        }
        .calculator > span:hover { background: #475569; }
        .calculator > span:active { transform: scale(0.96); }
        .calculator > .clear { background: #dc5460; }
        .calculator > .clear:hover { background: #c83e4a; }
        .calculator > .plus,
        .calculator > .equal { background: #3182ce; }
        .calculator > .plus:hover,
        .calculator > .equal:hover { background: #2563a8; }
        .calculator > .equal { grid-column: span 2; }
      `}</style>


      <form className="calculator" name="calc">
        <input type="text" className="value" value={inputValue} readOnly />

        <span className="num clear" onClick={clear}>c</span>

        <span onClick={() => display('/')}>/</span>
        <span onClick={() => display('*')}>*</span>
        <span onClick={() => display('7')}>7</span>
        <span onClick={() => display('8')}>8</span>
        <span onClick={() => display('9')}>9</span>
        <span onClick={() => display('-')}>-</span>
        <span onClick={() => display('4')}>4</span>
        <span onClick={() => display('5')}>5</span>
        <span onClick={() => display('6')}>6</span>
        <span className="plus" onClick={() => display('+')}>+</span>

        <span onClick={() => display('1')}>1</span>
        <span onClick={() => display('2')}>2</span>
        <span onClick={() => display('3')}>3</span>
        <span onClick={() => display('0')}>0</span>
        <span onClick={() => display('00')}>00</span>
        <span onClick={() => display('.')}>.</span>
        <span className="num equal" onClick={calculator}>=</span>
      </form>
    </>
  );
};

export default Calculator;

