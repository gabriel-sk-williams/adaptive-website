import React, { Component } from 'react';
// import Artifact from './Artifact';
 
class Footer extends Component {

	handleClick = () => { this.props.menuToggle(); }

    render() {
        return (
            <footer id="footer" className="module-third">
                <ul className="flex-right gap-top">
                    <li className="col-5-12">
                        <ul className="flex-column">
                            <li>
                                <h3 className="bold"> adaptive 2021 </h3>
                            </li>
                        </ul>
                    </li>
                    <li className="col-7-12">
                        <ul className="flex-right footmod">
                            <li className="col-3-12">
                                <ul className="flex-column">      
                                <h3 className="bold"> legal </h3>
                                    <br/>
                                    <h5> Terms </h5>
                                    <h5> Privacy </h5>
                                </ul>
                            </li>
                            <li className="col-9-12 space">
                                <ul className="flex-column">      
                                    <h3 className="bold"> company </h3>
                                    <br/>
                                    <h5> About </h5>
                                    <h5> Careers </h5>
                                    <a href="mailto:office@adaptivecity.io">
                                        <h5 className="select"> office@adaptivecity.io </h5>
                                    </a>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </footer>
		);
    }
}

export default Footer;