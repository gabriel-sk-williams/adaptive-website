import React, { Component } from 'react';
import NavTopMobile from './NavTopMobile';
import ArrowShape from './svg/ArrowShape';
import { Link } from "react-router-dom";

class NavMobile extends Component {

    menuToggle = () => { this.props.menuToggle(); }

    render() {
	    return (
            <div className={this.props.status}>
                <main className="container">
                    <div className="mobile-rails">
                    <NavTopMobile menuToggle={this.menuToggle} />
                    <Link to='/tech/'>
                        <section className="mini-module">
                            <ul className="flex">
                                <li className="col-6-12">
                                    <div className="mini-card">
                                        <h3 className="left mobile">tech</h3>
                                    </div>
                                </li>
                                <li className="col-6-12">
                                    <div className="mini-symbol right">
                                        <ArrowShape 
                                            className="exit-shape" 
                                            onClick={this.menuToggle}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </Link>
                    <Link to='/contact/'>
                        <section className="mini-module">
                            <ul className="flex">
                                <li className="col-6-12">
                                    <div className="mini-card">
                                        <h3 className="left mobile">contact</h3>
                                    </div>
                                </li>
                                <li className="col-6-12">
                                    <div className="mini-symbol right">
                                        <ArrowShape 
                                            className="exit-shape" 
                                            onClick={this.menuToggle}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section className="fake-module" />
                    </Link>
                    </div>
                </main>
            </div>
	    );
    }
}

export default NavMobile;