import React, { Component } from 'react';

import LandscapeContact from './svg/landscape_contact.svg';
import Footer from './Footer';
import './Astyles.css';

class Contact extends Component {

  constructor () {
    super();

    this.state = {
      isFirefox: (/Firefox/i.test(navigator.userAgent)),
      isIe: (/MSIE/i.test(navigator.userAgent))
      // || (/Trident.*rv\:11\./i.test(navigator.userAgent)),
    }
  }

  render() {
    return (
      <main className="container">
        <img className="svg-base" src={LandscapeContact} alt="Contact" />
        <div className="inner-rails">
          <section className="module-half flex-column">
            <h1 className="center gap-bottom">Contact us any time</h1>
            <h4 className="center"> New York City </h4>
            <a href="mailto:office@adaptivecity.io">
              <h4 className="center select">office@adaptivecity.io</h4>
            </a>
            <h4 className="center">917.755.8500</h4>
          </section>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Contact;