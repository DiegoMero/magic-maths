import React from 'react';
import './Header.css';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <h1>Math Magicians</h1>
        <div className="linksContainer">
          <h3 className="home">Home</h3>
          <span />
          <h3>Calculator</h3>
          <span />
          <h3>Quote</h3>
        </div>
      </header>
    );
  }
}

export default Header;
