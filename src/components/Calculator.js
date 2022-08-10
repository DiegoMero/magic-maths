import React from 'react';
import './Calculator.css';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <>
        <div className="calculator">
          <input className="calculator-input" type="input" placeholder="0" />
          <div className="line1">
            <button className="AC-button" type="button">AC</button>
            <button className="change-sing-button" type="button">+/-</button>
            <button className="percentage-button" type="button">%</button>
            <button className="division-button" type="button">÷</button>
          </div>
          <div className="line2">
            <button className="seven-button" type="button">7</button>
            <button className="eight-button" type="button">8</button>
            <button className="nine-button" type="button">9</button>
            <button className="multiplication-button" type="button">x</button>
          </div>
          <div className="line3">
            <button className="four-button" type="button">4</button>
            <button className="five-button" type="button">5</button>
            <button className="six-button" type="button">6</button>
            <button className="substraction-button" type="button">-</button>
          </div>
          <div className="line4">
            <button className="one-button" type="button">1</button>
            <button className="two-button" type="button">2</button>
            <button className="three-button" type="button">3</button>
            <button className="addition-button" type="button">+</button>
          </div>
          <div className="line5">
            <button className="zero-button" type="button">0</button>
            <button className="dot-button" type="button">.</button>
            <button className="equal-button" type="button">=</button>
          </div>
        </div>
      </>
    );
  }
}
