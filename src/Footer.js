import React, { Component } from 'react';
import { Link } from "react-router-dom";
 
class Footer extends Component {

	handleClick = () => { this.props.menuToggle(); }

    render() {
        return (
            <footer id="footer" className="module-third">
                <div className="inner-rails">
                    <ul className="flex gap-top footer-border">
                        <li className="col-4-12 left">
                        <h3 className="bold"> adaptive 2021 </h3>
                        </li>
                        <li className="col-4-12 right legal">
                            <ul className="flex-column">      
                                <h3 className="bold"> legal </h3><br/>
                                <h5> Terms </h5>
                                <h5> Privacy </h5>
                            </ul>
                        </li>
                        <li className="col-4-12 right">
                            <ul className="flex-column">      
                                <h3 className="bold"> company </h3><br/>
                                <Link to='/contact/'><h5> Careers </h5></Link>
                                <Link to='/contact/'><h5> Contact </h5></Link>
                                <a href="mailto:office@adaptivecity.io">
                                    <h5 className="select"> office@adaptivecity.io </h5>
                                </a>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
		);
    }
}

export default Footer;