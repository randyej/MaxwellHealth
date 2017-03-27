import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">
          <img src="/img/maxwell.logo-horiz-blue@2x.png" alt="Maxwell Health" width="190" />
          News Reader
        </div>
      </div>
    );
  }
}

export default Header;
