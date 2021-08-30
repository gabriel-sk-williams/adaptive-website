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
        <section className="flex-column inner-rails">
          <h1 className="center hero">
          We're online!
          </h1>
          <h4 className="center blurb">
          Adaptive is now in private beta and open to projects of all shapes and sizes. Contact us if you believe your planning department or business would benefit from a partnership.
          </h4>
          <h4 className="center contact"> New York City </h4>
          <a href="mailto:office@adaptivecity.io">
            <h4 className="center select contact">office@adaptivecity.io</h4>
          </a>
          <h4 className="center contact">917.755.8500</h4>
        </section>
        <Footer />
      </main>
    );
  }
}

export default Contact;