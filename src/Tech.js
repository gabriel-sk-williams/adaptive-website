import React, { Component } from 'react';

import Foldaway from './Foldaway';

import Footer from './Footer';
import './Astyles.css';

class Tech extends Component {

  render() {
    const f1 = 
      <div className="mini-top">
        <h4 className="left indent paragraph gap-bottom">
        If you can imagine how data might appear in an Excel spreadsheet—that's a somewhat typical 'SQL' database structure, complete with rows and columns as its primary organizing principle.
        </h4>
      </div>

    const f2 = 
    <div className="mini-top">
      <h4 className="left indent paragraph gap-bottom">
      Adaptive is built for anyone with urban problems to solve—primarily city planning departments and developers.
      </h4>
    </div>

    const f3 = 
    <div className="mini-top">
      <h4 className="left indent paragraph gap-bottom">
      A graph is composed of 'nodes' and 'edges' (remember the molecule above). In a urban graph database, Nodes can be any urban element: a building, a parcel, a block, or even a person. <br/><br/>
      'Edges' are the connections between nodes, which is how we establish relationships between them. In a graph database, we can designate that relationship however we want. For instance, we might say that a 'business' node is _INSIDE_ a 'building' node. Within the Adaptive nomenclature this would be a vertical relationship, where one type of node contains a different, smaller node. So all of our nodes have at least one or two vertical relationships: the CIty node contains Neighborhood nodes, which contain Block nodes, which contain Zoning and Parcel nodes, which contain Building nodes. 
      <br/><br/>
      We can also create many different horizontal relationships between various node types. For instance, due to the efficiency of graph networks we can calculate a 'distance' edge between any two nodes, because the streets themselves are a series of edges on their own. We can look at or even model the flows of goods and services, commutes to work, or trips to the grocery store by single mothers.
      </h4>
    </div>

    const f4 = 
    <div className="mini-top">
      <h4 className="left indent paragraph gap-bottom">
      Sure, you can do some of these things individually on Google maps or inside various softwares, but never all at the same time. A very experienced urban planner will make these same connections in her mind, but only to a relatively limited degree, and certainly not at scale. If that urban planner wants to generate a proximity assessment for a 15-minute city project, we want her to have that map in minutes, not months. Likewise, for developers, time is money; sifting through private data repositories and waiting on the architect for a zoning analysis is not an ideal use of resources.. None of this tedium is necessary anymore. With Adaptive all the relevant data points can be added, aligned, search, and filtered.
      </h4>
    </div>

    return (
      <main className="container">
        <div className="inner-rails">
          <Foldaway headline="What is a graph network?" content={f1} />
          <Foldaway headline="Who is it for?" content={f2} />
          <Foldaway headline="How does it work?" content={f3} />
          <Foldaway headline="What's the difference?" content={f4} />
        </div>
        <Footer />
      </main>
    );
  }
}

export default Tech;