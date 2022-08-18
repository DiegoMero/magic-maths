import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleEvent = (event) => {
    setState((previusState) => ({
      previusState, ...calculate(previusState, event.target.textContent),
    }));
  };

  const { total, next } = state;
  return (
    <div className="calcultatorSection">
      <h2>Let´s do some Math!</h2>
      <div className="calculator">
        <input className="calculator-input" type="input" placeholder={next || total || 0} readOnly="true" />
        <div className="line1">
          <button className="AC-button" type="button" onClick={handleEvent}>AC</button>
          <button className="change-sing-button" type="button" onClick={handleEvent}>+/-</button>
          <button className="percentage-button" type="button" onClick={handleEvent}>%</button>
          <button className="division-button" type="button" onClick={handleEvent}>÷</button>
        </div>
        <div className="line2">
          <button className="seven-button" type="button" onClick={handleEvent}>7</button>
          <button className="eight-button" type="button" onClick={handleEvent}>8</button>
          <button className="nine-button" type="button" onClick={handleEvent}>9</button>
          <button className="multiplication-button" type="button" onClick={handleEvent}>x</button>
        </div>
        <div className="line3">
          <button className="four-button" type="button" onClick={handleEvent}>4</button>
          <button className="five-button" type="button" onClick={handleEvent}>5</button>
          <button className="six-button" type="button" onClick={handleEvent}>6</button>
          <button className="substraction-button" type="button" onClick={handleEvent}>-</button>
        </div>
        <div className="line4">
          <button className="one-button" type="button" onClick={handleEvent}>1</button>
          <button className="two-button" type="button" onClick={handleEvent}>2</button>
          <button className="three-button" type="button" onClick={handleEvent}>3</button>
          <button className="addition-button" type="button" onClick={handleEvent}>+</button>
        </div>
        <div className="line5">
          <button className="zero-button" type="button" onClick={handleEvent}>0</button>
          <button className="dot-button" type="button" onClick={handleEvent}>.</button>
          <button className="equal-button" type="button" onClick={handleEvent}>=</button>
        </div>
      </div>
    </div>
  );
}
