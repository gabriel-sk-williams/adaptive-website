import React, { Component } from 'react';
import NavTopMobile from './NavTopMobile';
import LinkButton from './LinkButton';

class NavMobile extends Component {

  menuToggle = () => { this.props.menuToggle(); }

  render() {
    return (
      <div className={this.props.status}>
        <main className="container">
          <div className="mobile-rails">
            <NavTopMobile menuToggle={this.menuToggle} />
              <LinkButton to='/tech/' onClick={this.menuToggle}>tech</LinkButton>
              <LinkButton to='/contact/' onClick={this.menuToggle}>contact</LinkButton>
              <section className="fake-module" />
          </div>
        </main>
      </div>
    );
  }
}

export default NavMobile;