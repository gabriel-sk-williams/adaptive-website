import React, { Component } from 'react';

import LandscapeTech from './svg/landscape_tech.svg';
import NodeDiagram from './svg/diagram_node.svg';
import NodeCity from './svg/diagram_city.svg';
import NodeConnection from './svg/diagram_connection.svg';

import Foldaway from './Foldaway';
import Footer from './Footer';
import './Astyles.css';

class Tech extends Component {

  render() {
    const f1 = 
      <div className="paragraph">
        <h4 className="mini-top">
          A <b>graph</b> is a type of database that uses <b>nodes</b> and <b>edges</b> to store and represent information. Edges delineate a relationship between any two nodes. In Adaptive, a node be almost any urban element: a building, a parcel, a block, or even a person.
          <br/><br/>
        </h4>
        <img className="svg-diagram" src={NodeDiagram} alt="Main" />
      </div>

    const f2 = 
    <div className="paragraph">
      <h4 className="mini-top">
      Since graph networks store <b>connections</b> instead of unsorted and unattached entries, we can accommodate highly flexible queries.
      <br/><br/>
      If a planner wants to generate a proximity assessment for a 15-minute city profile, we want her to have that map in minutes, not months. Likewise, developers shouldn't have to sift through private data repositories and wait for zoning analyses to find the right opportunity. In a graph database, we can retrieve all the elements we need and prepare them automatically.
      </h4>
      <img className="svg-diagram" src={NodeCity} alt="Main" />
    </div>

    const f3 = 
    <div className="paragraph">
      <h4 className="mini-top">
      After initializing the core graph, we can begin to introduce new data sets as they relate to the region of interest. These data points can come in any format, including physical documents that would benefit from being digitized. We use proprietary algorithms to parse, process, and distribute new information within the graph; every new data point strengthens the assertions made by the Adaptive network.
      </h4>
      <img className="svg-diagram" src={NodeConnection} alt="Main" />
    </div>

    const f4 = 
    <div className="paragraph">
      <h4 className="mini-top">
      Adaptive is built for anyone with urban problems to solve—primarily city planning departments and developers. A tech demo is available upon request.
      </h4>
    </div>

    return (
      <main className="container">
        <img className="svg-base" src={LandscapeTech} alt="Tech" />
        
        <div className="inner-rails">
          <h1 className="left hero">
            A service, product, and a platform all at once.
          </h1>
          <h4 className="left paragraph gap-bottom"> 
             Adaptive is built on the premise that there is no silver bullet for urban problems: every place is a dynamic expression of its own, and therefore every project demands a unique approach. There may not be a standardized, scalable venture-backed solution that would meet the needs of every city in the country—but we do believe planning and development can be more informed, effective, and dynamic.<br/><br/>
          </h4>
          <Foldaway headline="What is a graph network?" content={f1} />
          <Foldaway headline="What's the difference?" content={f2} />
          <Foldaway headline="How does it work?" content={f3} />
          <Foldaway headline="Who is it for?" content={f4} />
        </div>
        <Footer />
      </main>
    );
  }
}

export default Tech;