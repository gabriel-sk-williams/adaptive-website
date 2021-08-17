import React, { Component } from 'react';
import NavTop from './NavTop';
import Footer from './Footer';
import './Astyles.css';

class About extends Component {

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
      <div className="main-rails">
        <NavTop activePage="about"/>
        <main className="container">
          <div className="inner-rails">

            <section className="flex-column">
              <h1 className="left gap-bottom">
                It's deeper than data structures.
              </h1>

              <h4 className="left indent paragraph"> 
              We are perhaps the rare startup built by urbanists, for urbanists. Our platform is built on the premise that there is no silver bullet for urban problems: every place is the dynamic expression of political and socio-economic circumstances, and every project demands a unique approach. We don't believe there is a standardized, scalable VC-backed product that would singlehandedly meet the needs of every city in the country—but we do believe planning and development can be more informed, effective, and dynamic. <br/><br/>
              Adaptive is at once a product, a platform, and a service. We're open to opportunities of all shapes and sizes. Contact us if you believe your planning department or business would benefit from a partnership.
              </h4>
            </section>
          
          </div> 
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;