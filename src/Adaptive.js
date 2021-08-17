import React, { Component } from 'react';
//import { Link } from "react-router-dom";
//import Button from './Button';
import NavTop from './NavTop';
import Footer from './Footer';
import Landscape from './svg/landscape.svg';

import DataConversion from './svg/data_conversion.svg';
import HousingAssessment from './svg/housing_assessment.svg';
import FifteenMinuteCities from './svg/fifteen_minute_cities.svg';
import PolicyCompliance from './svg/policy_compliance.svg';
import ZonedCapazity from './svg/zoned_capacity.svg';
import InteractiveInfo from './svg/interactive_info.svg';

import UrbanEconomic from './svg/urban_economic.svg';
import GraphNeural from './svg/graph_neural.svg';
import PredictiveAnalytics from './svg/predictive_analytics.svg';

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
      <div className="main-rails">
        
        <main className="container">
          <NavTop activePage="home"/>
          <img className="svg-base" src={Landscape} alt="Landscape" />
          
          <div className="flex-column">
            <section className="module-diagram send-right inner-rails">
              <h1>Introducing the world's first urban graph network.</h1>
              <div className="gap-top"/>
            </section>

            <section className="module-half inner-rails">
              <h1 className="indent mini-bottom">
                Move beyond mapping—with a new data structure.
              </h1>
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
              <div className="flex indent">
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
                    <img className="svg-large" src={ZonedCapazity} alt="Zoned Capacity" />
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
              <div className="flex indent">
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
        </main>
        <Footer />
      </div>     
    );
  }
}

export default Adaptive;


/*
<Link to='/tech/'>
  <Button btnColor="mystic" labelColor="coffee">
    What's a graph network?
  </Button>
</Link>
<img className="svg-base" src={ColorBreak} alt="ColorBreak" />
<img className="svg-base" src={Darkness} alt="Darkness" />
<img className={scootOnScroll} src={Arrows} alt="Arrows" />
<img className={appearOnScroll} src={Orbs} alt="Orbs" />
<img className="svg-base" src={Water} alt="Water" />
<img className={appearWithDelay} src={Outlines} alt="Outlines" />

<section className="module-half inner-rails center">
  <h1 className="cyber">A new way to connect urban data.</h1>
  <div className="gap-top" />
  <Button btnColor="mystic" labelColor="black">
    CONTACT US
  </Button>
</section>

<div className="flex-column">
      <h1 className="inner-rails">
        No matter your position, we've got you every step of the way.
      </h1>

      <div className="flex">

        <div className="card">
          <div className="card-header">
            <div className="mini-top"/>
            <h3>Stage 1</h3>
            <h4>Conversion</h4>
          </div>
          <div className="bg-cyber card-base">
            <div className="card-rails">
              <div className="mini-top"/>
              <img className="svg-large" src={Convert} alt="Convert" />
              <div className="mini-top"/>
              <h4>
                Cities today are awash in urban data, much of it disorganized and trapped in different formats. For any initiative, we begin by digitizing, cleaning, every city or developer
              </h4>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-header">
            <div className="mini-top"/>
            <h3>Stage 2</h3>
            <h4>Federation & Integration</h4>
          </div>
          <div className="bg-park card-base">
            <div className="card-rails">
              <div className="gap-top"/>
              <img className="svg-large" src={Integrate} alt="Integrate" />
              <div className="gap-top"/>
              <h4>
                Adaptive creates a virtual graph database that aggregates urban data from distributed sources by giving them a common data model.
              </h4>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="mini-top"/>
            <h3>Stage 3</h3>
            <h4>Virtualization</h4>
          </div>
          <div className="bg-plum card-base">
            <div className="card-rails">
              <div className="gap-top"/>
              <img className="svg-large" src={Visual} alt="Visual" />
              <div className="gap-top"/>
              <h4 className="">
                Adaptive is a web-native, unified view of data
              </h4>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="mini-top"/>
            <h3>Stage 4</h3>
            <h4>Analysis</h4>
          </div>
          <div className="bg-mystic card-base">
            <div className="card-rails">
              <div className="gap-top"/>
              <img className="svg-large" src={Analysis} alt="Analysis" />
              <div className="gap-top"/>
              <h4>
                Data sets should be absolutely big time no matter what you think you believe it is all a lie please stfu.
              </h4>
            </div>
          </div>
        </div>
        
      </div>
    </div>
<img className="svg-full" src={Shore} alt="Shore" />

// Triple Card
<div className="flex">
  <div className="card"></div>
  <div className="card"></div>
  <div className="card"></div>
</div>

<section className="module-quarter"></section>

<section className="module">
  <img className="svg-full" src={Green} alt="Green Test" />
</section>

<section className="module-half">

</section>

  <section className="module">
    <img className="svg-large" src={Bars} alt="Projector" />
    <h1>A data-driven intelligence network for dynamic cities.</h1>
  </section>

  <section className="module-third flex">
    {jewels}
  </section>

  <section className="module-third">
    <Button>jaboy</Button>
  </section>

</div>

const jarr = [ 
  "orchid", "baker", "mystic", "orange", 
  "cyber", "park", "tree", "bluejay", 
  "azul", "plum", "coffee"
]

const jewels = jarr.map(obj => 
  <div className="col-1-12">
    <Jewel color={obj}/>
  </div> 
);
*/