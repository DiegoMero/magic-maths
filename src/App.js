import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Calculator />
        <Footer />
      </div>
    );
  }
}
