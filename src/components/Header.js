import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <h1>Math Magicians</h1>
        <div className="linksContainer">
          <Link to="/">Home</Link>
          <span />
          <Link to="/Calculator">Calculator</Link>
          <span />
          <Link to="/Quote">Quote</Link>
        </div>
      </header>
    );
  }
}

export default Header;
