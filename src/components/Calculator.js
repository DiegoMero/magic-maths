import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleEvent = (event) => {
    const result = calculate(this.state, event.target.textContent);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <div className="calculator">
          <input className="calculator-input" type="input" placeholder={next || total} />
          <div className="line1">
            <button className="AC-button" type="button" onClick={this.handleEvent}>AC</button>
            <button className="change-sing-button" type="button" onClick={this.handleEvent}>+/-</button>
            <button className="percentage-button" type="button" onClick={this.handleEvent}>%</button>
            <button className="division-button" type="button" onClick={this.handleEvent}>÷</button>
          </div>
          <div className="line2">
            <button className="seven-button" type="button" onClick={this.handleEvent}>7</button>
            <button className="eight-button" type="button" onClick={this.handleEvent}>8</button>
            <button className="nine-button" type="button" onClick={this.handleEvent}>9</button>
            <button className="multiplication-button" type="button" onClick={this.handleEvent}>x</button>
          </div>
          <div className="line3">
            <button className="four-button" type="button" onClick={this.handleEvent}>4</button>
            <button className="five-button" type="button" onClick={this.handleEvent}>5</button>
            <button className="six-button" type="button" onClick={this.handleEvent}>6</button>
            <button className="substraction-button" type="button" onClick={this.handleEvent}>-</button>
          </div>
          <div className="line4">
            <button className="one-button" type="button" onClick={this.handleEvent}>1</button>
            <button className="two-button" type="button" onClick={this.handleEvent}>2</button>
            <button className="three-button" type="button" onClick={this.handleEvent}>3</button>
            <button className="addition-button" type="button" onClick={this.handleEvent}>+</button>
          </div>
          <div className="line5">
            <button className="zero-button" type="button" onClick={this.handleEvent}>0</button>
            <button className="dot-button" type="button" onClick={this.handleEvent}>.</button>
            <button className="equal-button" type="button" onClick={this.handleEvent}>=</button>
          </div>
        </div>
      </>
    );
  }
}
