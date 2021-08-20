import React, { Component } from 'react';

import LandscapeMain from './svg/landscape_main.svg';

import DataConversion from './svg/data_conversion.svg';
import HousingAssessment from './svg/housing_assessment.svg';
import FifteenMinuteCities from './svg/fifteen_minute_cities.svg';
import PolicyCompliance from './svg/policy_compliance.svg';
import ZonedCapacity from './svg/zoned_capacity.svg';
import InteractiveInfo from './svg/interactive_info.svg';

import UrbanEconomic from './svg/urban_economic.svg';
import GraphNeural from './svg/graph_neural.svg';
import PredictiveAnalytics from './svg/predictive_analytics.svg';

import Footer from './Footer';
import './Astyles.css';

class Adaptive extends Component {

  constructor () {
    super();
    this.state = {
      scroll: 0,
      trigger: false
    }
  }

  componentDidMount() { window.addEventListener('scroll', this.listenToScroll) }
  componentWillUnmount() { window.removeEventListener('scroll', this.listenToScroll) }
  
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = winScroll / height;
    if (scroll > 0.075) {
      this.setState({ scroll: scroll })
    }
  }

  renderScript(int) {
    const sup = this.state.superLinks[int-1];
    return (
      <sup>
        <a rel="noopener noreferrer" href={sup.link} target="_blank">{int}</a>
      </sup>
    );
  }

  render() {
    //const { scroll } = this.state;
    //const scootOnScroll = scroll > 0.075 ? "svg-appear scoot-in" : "svg-appear";
    //const appearOnScroll = scroll > 0.075 ? "svg-appear fade-in" : "svg-appear";
    //const appearWithDelay = "svg-appear fade-delay";

    return (
      <main className="container">
        <img className="svg-base" src={LandscapeMain} alt="Main" />
        
        <div className="flex-column">
          <section className="module-diagram send-right inner-rails">
            <h1>Introducing the world's first urban graph network.</h1>
            <div className="gap-top"/>
          </section>

          <section className="module-half inner-rails">
            <h1 className="indent mini-bottom">Move beyond mapping with a new data structure.</h1>
            <h4 className="left indent paragraph gap-bottom">
              Adaptive is a virtual graph database that aggregrates inputs from distributed sources and gives them a common data model.
              <br/><br/>
              In plain English, this means that urban data of all shapes and sizes can be connected, retrieved, and analyzed in tandem for the first time.
              <br/><br/>
              Stop switching between maps, and tap into a rich new framework for cities and developers.
            </h4>
          </section>

          <section className="module inner-rails">
            <h1 className="indent underline">Now offering:</h1>
            <div className="mini-top" />
            <div className="flex indent icons">
              <div className ="flex-column col-6-12">
                <div className="flex channel">
                  <img className="svg-large" src={DataConversion} alt="Data Conversion" />
                  <h3 className="gap-left">Data conversion</h3>
                </div>
                <div className="flex channel">
                  <img className="svg-large" src={HousingAssessment} alt="Housing Assessment" />
                  <h3 className="gap-left">Housing assessment</h3>
                </div>
                <div className="flex channel">
                  <img className="svg-large" src={FifteenMinuteCities} alt="15 Minute Cities" />
                  <h3 className="gap-left">15-minute cities</h3>
                </div>
              </div>

              <div className="flex-column col-6-12">
                <div className="flex channel">
                  <img className="svg-large" src={PolicyCompliance} alt="Policy Compliance" />
                  <h3 className="gap-left">Policy compliance</h3>
                </div>
                <div className="flex channel">
                  <img className="svg-large" src={ZonedCapacity} alt="Zoned Capacity" />
                  <h3 className="gap-left">Zoned capacity</h3>
                </div>
                <div className="flex channel">
                  <img className="svg-large" src={InteractiveInfo} alt="Infographics" />
                  <h3 className="gap-left">Interactive infographics</h3>
                </div>
              </div>
            </div>

            <div className="mini-bottom" />
            <h1 className="indent underline">Coming soon:</h1>
            <div className="mini-top" />
            <div className="flex indent icons">
              <div className ="flex-column col-6-12">
                <div className="flex channel">
                  <img className="svg-large" src={UrbanEconomic} alt="Economic Modeling" />
                  <h3 className="gap-left">Urban economic modeling</h3>
                </div>
                <div className="flex channel">
                  <img className="svg-large" src={PredictiveAnalytics} alt="Analytics" />
                  <h3 className="gap-left">Predictive analytics</h3>
                </div>
              </div>
              <div className ="flex-column col-6-12">
                <div className="flex channel">
                  <img className="svg-large" src={GraphNeural} alt="Graph Neural Networks" />
                  <h3 className="gap-left">Graph neural networks</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Adaptive;