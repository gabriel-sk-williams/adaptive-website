//import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './Astyles.css';

class SlideApp extends Component {

  constructor () {
    super();
    this.changeSlide=this.changeSlide.bind(this);
    this.state = {
      animate: "slide before",
      hyperlink: "hyper before ",
      slideActive: 0,
      textArray: [
                  "Cities can be understood as ecosystems of second-order complexity; research shows that urbanized areas amplify wealth, innovation, and opportunity as a function of their size and density.",
                  "As the accelerated urbanization of the Industrial Revolution introduced manifold complications to city life, theorists developed Modern planning methodologies to respond to real and perceived urban issues.",
                  "By mid-20th century, land-use policies and zoning codes had matured into the crucible that would shape the future of American cities. Many municipalities still use codes adapted from the 1950's and 60's.",
                  "In 2019, urban analysts are demonstrating with increasing certainty that outdated land use policies are failing to accommodate the dynamic growth rates of cities in the 21st century.",
                  "Since the beginning of the postwar era, American cities have seen unprecedented sprawl, spatial segregation, and sharply rising rents.",
                  "Some cities are taking action—but with mixed results. Municipalities are often using the same means and methods that hampered progress in the first place. Achieving popular consensus is a daunting challenge.",
                  "Adaptive City Interface integrates unstructured data with cutting-edge urban research to derive actionable, predictive analytics for cities.",
                  "Using rigorous scientific methodologies, we produce real insights for urban planners—new data and adjustments are continuously incorporated into our recursively self improving model. The future of cities is Adaptive.",
                 ],
      hyperlinks: [{
        article: "'Why Denser Cities Are Smarter and More Productive'",
        source: "(2012) Richard Florida, CityLab",
        link: "https://www.citylab.com/life/2012/12/why-denser-cities-are-smarter-and-more-productive/4049/",
        index: 0,
      }, {
        article: "'Growth, innovation, and scaling, and the pace of life in cities'",
        source: "(2012) Bettencourt et al., Global Institute of Sustainability",
        link: "https://www.researchgate.net/publication/6390858_Growth_Innovation_Scaling_and_the_Pace_of_Life_in_Cities",
        index: 0,
      }, {
        article: "'Zoning in 20th-Century American Cities'",
        source: "(2016) Christopher Silver, Oxford Research Encyclopedia",
        link: "http://oxfordre.com/americanhistory/view/10.1093/acrefore/9780199329175.001.0001/acrefore-9780199329175-e-209",
        index: 1,
      }, {
        article: "'The Racial Origins of Zoning: Southern Cities from 1910-40'",
        source: "(1991) Christopher Silver, Planning Perspectives Journal",
        link: "https://www.tandfonline.com/doi/abs/10.1080/02665439108725726?journalCode=rppe20",
        index: 1,
      }, {
        article: "'An Economic History of Zoning and a Cure for Its Exclusionary Effects'",
        source: "(2004) William Fischel, Dartmouth",
        link: "https://journals.sagepub.com/doi/10.1080/0042098032000165271",
        index: 2,
      }, {
        article: "'The American Metropolis at Century's End: Past and Future Influences'",
        source: "(2000) Robert Fishman, Rutgers University",
        link: "https://www.researchgate.net/publication/237276883_The_American_Metropolis_at_Century's_End_Past_and_Future_Influences",
        index: 2,
      }, {
        article: "'Barriers to Shared Growth: The Case of Land Use Regulation and Economic Rents'",
        source: "(2015) Jason Furman, Chairman of the White House Council of Economic Advisers",
        link: "https://obamawhitehouse.archives.gov/sites/default/files/page/files/20151120_barriers_shared_growth_land_use_regulation_and_economic_rents.pdf",
        index: 3,
      }, {
        article: "'Why White House Economists Worry About Land-Use Regulations'",
        source: "(2015) Nick Timiraos, Wall Street Journal",
        link: "https://blogs.wsj.com/economics/2015/11/20/why-white-house-economists-worry-about-land-use-regulations/",
        index: 3,
      }, {
        article: "'Housing Constraints and Spatial Misallocation'",
        source: "(2017) C. Hsieh and E. Moretti, National Bureau of Economic Research",
        link: "https://www.aeaweb.org/articles?id=10.1257/mac.20170388",
        index: 3,
      }, {
        article: "'How San Francisco planned its own housing crisis'",
        source: "(2018) Hunter Oatman-Stanford, Collectors Weekly",
        link: "https://www.collectorsweekly.com/articles/demolishing-the-california-dream/",
        index: 4,
      }, {
        article: "'The affordable housing crisis in Austin: How we got here [...]'",
        source: "(2018) Joshua Cuddy, Master's Dissertation, UT",
        link: "https://repositories.lib.utexas.edu/handle/2152/72808",
        index: 4,
      }, {
        article: "'The incredible shrinking megacity: How Los Angeles engineered a housing crisis'",
        source: "(2015) Henry Grabar, salon.com",
        link: "https://www.salon.com/2015/04/05/the_incredible_shrinking_megacity_how_los_angeles_enginereed_a_housing_crisis/",
        index: 4,
      }, {
        article: "Austin, Texas: 'CodeNEXT Dies on City Council Dais'",
        source: "(2018) Cindy Widner, Curbed Austin",
        link: "https://austin.curbed.com/2018/8/9/17672754/austin-development-zoning-code-growth",
        index: 5,
      }, {
        article: "'Portland's residential infill project still has major flaws, housing advocates say'",
        source: "(2018) Michael Andersen, Medium",
        link: "https://medium.com/@pdx4all/portlands-residential-infill-project-still-has-major-flaws-housing-advocates-say-6a225ec290e",
        index: 5,
      }, {
        article: "'As an Arlington resident, I'm excited about Amazon—and worried about housing costs'",
        source: "(2018) Jane Green, Greater Greater Washington",
        link: "https://ggwash.org/view/69848/as-an-arlington-resident-im-excited-about-amazon-and-worried-about-housing-",
        index: 5,
      }, {
        article: "'The Uses of Big Data in Cities'",
        source: "(2014) Luis Bettencourt, Santa Fe University",
        link: "https://www.researchgate.net/publication/274046137_The_Uses_of_Big_Data_in_Cities",
        index: 6,
      }, {
        article: "'The New Science of Cities'",
        source: "(2013) Michael Batty",
        link: "https://mitpress.mit.edu/books/new-science-cities",
        index: 6,
      }, {
        article: "'The RELU-TRAN Model and its applications'",
        source: "(2007) Alex Anas",
        link: "https://sites.google.com/site/alexanashomepage/the-relu-tran-model-and-its-applications/",
        index: 7,
      }, {
        article: "'The Spatial Distribution of Land Prices and Densities'",
        source: "(2015) Alain Bertaud",
        link: "https://marroninstitute.nyu.edu/working-papers/the-spatial-distribution-of-land-prices-and-densities",
        index: 7,
      }, {
        article: "'The Optimal Distribution of Population Across Cities'",
        source: "(2016) Albouy et al., National Bureau of Economic Research",
        link: "https://www.nber.org/papers/w22823.pdf",
        index: 7,
      }, {  
        article: "'Upzoning Chicago: Impacts of a Zoning Reform on Property Values and Housing Construction'",
        source: "(2019) Yonah Freemark, Urban Affairs Review",
        link: "https://journals.sagepub.com/doi/abs/10.1177/1078087418824672?journalCode=uarb",
        index: 7,
      }],
    }
  }

  componentDidMount() {
    this.activateText(7000);
  }

  componentWillReceiveProps(change) {
    this.changeSlide(change.slideActive);
  }

  changeSlide(sA) {
    let sP = this.state.slideActive;

    //slide down
    if(sA > sP) {
      this.process("up ", sA);
    }

    //slide up
    if(sA < sP) {
      this.process("down ", sA);
    }
  }

  process(string, sA) {
    this.setState({ 
      animate: "slide " + string,
      hyperlink: "hyper " + string
    });
  
    setTimeout(
        function() {
          this.setState({slideActive: sA,});
        }.bind(this),
          1500
      );
  
    this.activateText(1500);
  }

  activateText(timeout) {
    setTimeout(
      function() {
        this.setState({
          animate: "slide active ",
          hyperlink:"hyper active "
        });
      }.bind(this),
        timeout
    );
  }
  
  render() {
    const headline = this.state.textArray[this.state.slideActive];
    const wrapClass = "wrap-high center";
    let textAnimation = this.state.animate;
    let hyperae0 = this.state.hyperlink + 'fade-1';
    let hyperae1 = this.state.hyperlink + 'fade-2';
    let hyperae2 = this.state.hyperlink + 'fade-3';
    let hyperae3 = this.state.hyperlink + 'fade-4';

    const hyperlinks = this.state.hyperlinks.map((link, i) => {
      if (link.index === this.state.slideActive) {
        return(
          <a rel="noopener noreferrer"
            ref={i}
            href={link.link} 
            target="_blank">
              <h4 id="nav" className="white">
                <br/>
                {link.article}
                <br/>
                {link.source}
                <br/>
              </h4>            
          </a>                
        )
      }else{
        return null;
      }
    })

    const activelinks = hyperlinks.filter((item, i) => {
        return item !== null;
    })

    const hyp0 = activelinks[0] ? activelinks[0].ref : null;
    const hyp1 = activelinks[1] ? activelinks[1].ref : null;
    const hyp2 = activelinks[2] ? activelinks[2].ref : null;
    const hyp3 = activelinks[3] ? activelinks[3].ref : null;
    
    return (              
          <div className='container'
                onWheel={(e) => this.changeSlide(e)}>
            <div className={wrapClass}>

              <ul className='flex'>
                <div className={textAnimation}>
                  <li>
                    <h2 id={this.state.slideActive} >
                      {headline}                       
                    </h2>
                  </li>
                </div>
              </ul>

              <ul className='flex-column'>
                <li className={hyperae0} > 
                  {hyperlinks[hyp0]}
                </li>
                <li className={hyperae1} > 
                  {hyperlinks[hyp1]}
                </li>
                <li className={hyperae2} > 
                  {hyperlinks[hyp2]}
                </li>
                <li className={hyperae3} > 
                  {hyperlinks[hyp3]}
                </li>
              </ul>

            </div>
          </div>
    );
  }
}

export default SlideApp;
